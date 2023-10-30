import { render } from 'preact'
import '../base.css'
import { getUserConfig, Theme } from '../config'
import { detectSystemColorScheme } from '../utils'
import { getArkoseToken } from './arkose'
import ChatGPTContainer from './ChatGPTContainer'
import { config, SearchEngine } from './search-engine-configs'
import './styles.scss'
import { getPossibleElementByQuerySelector } from './utils'

async function mount(question: string, promptSource: string, siteConfig: SearchEngine) {
  const container = document.createElement('div')
  container.className = 'chat-gpt-container'

  const userConfig = await getUserConfig()
  let theme: Theme
  if (userConfig.theme === Theme.Auto) {
    theme = detectSystemColorScheme()
  } else {
    theme = userConfig.theme
  }
  if (theme === Theme.Dark) {
    container.classList.add('gpt-dark')
  } else {
    container.classList.add('gpt-light')
  }

  const siderbarContainer = getPossibleElementByQuerySelector(siteConfig.sidebarContainerQuery)
  if (siderbarContainer) {
    console.log('if container', container)
    siderbarContainer.prepend(container)
  } else {
    container.classList.add('sidebar-free')
    const appendContainer = getPossibleElementByQuerySelector(siteConfig.appendContainerQuery)
    console.log('else appendContainer', appendContainer)
    if (appendContainer) {
      appendContainer.appendChild(container)
    }
  }
  console.debug('question:', question)
  const arkoseToken = await getArkoseToken()

  render(
    <ChatGPTContainer
      question={question}
      arkoseToken={arkoseToken}
      promptSource={promptSource}
      triggerMode={userConfig.triggerMode || 'always'}
    />,
    container,
  )
}

/**
 * mount html elements when requestions triggered
 * @param question question string
 * @param index question index
 */
export async function requeryMount(question: string, index: number) {
  const container = document.querySelector<HTMLDivElement>('.question-container')
  let theme: Theme
  const questionItem = document.createElement('div')
  questionItem.className = `question-${index}`

  const userConfig = await getUserConfig()
  if (userConfig.theme === Theme.Auto) {
    theme = detectSystemColorScheme()
  } else {
    theme = userConfig.theme
  }
  if (theme === Theme.Dark) {
    container?.classList.add('gpt-dark')
    questionItem.classList.add('gpt-dark')
  } else {
    container?.classList.add('gpt-light')
    questionItem.classList.add('gpt-light')
  }
  questionItem.innerText = `Q${index + 1} : ${question}`
  container?.appendChild(questionItem)
}

const siteRegex = new RegExp(Object.keys(config).join('|'))
const siteName = location.hostname.match(siteRegex)![0]
const siteConfig = config[siteName]

async function run() {
  console.debug('Try to Mount ChatGPT on', siteName)

  if (siteConfig.bodyQuery) {
    const bodyElement = getPossibleElementByQuerySelector(siteConfig.bodyQuery)
    console.debug('bodyElement', bodyElement)
    if (bodyElement && siteName == 'interviewbit') {
      console.debug('bodyElement.content', bodyElement.content)
      bodyElement.textContent = bodyElement.content
    }

    if (bodyElement && siteName == 'leetcode') {
      const leetcode_url = 'https://leetcode.com/graphql/'
      interface MyVariables {
        titleSlug: string
      }
      interface MyData {
        operation_name: string
        query: string
        variables: MyVariables
      }

      let splits = location.href.split('/')
      splits = splits.filter((e) => (e === 0 ? true : e))
      const titleSlug = splits[splits.length - 1]

      const data: MyData = {
        operation_name: 'questionContent',
        query:
          '\n    query questionContent($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    content\n    mysqlSchemas\n  }\n}\n    ',
        variables: {
          titleSlug: 'split-the-array-to-make-coprime-products',
        },
      }

      console.log('data:', data)
      const response = await fetch(leetcode_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        console.log('ERROR POST REQ')
      } else {
        const responseBody = await response.arrayBuffer()
        if (responseBody !== null) {
          // We actually dont need to do anything with the data quetrying again has populated the doms which empty earlier
          /*
            const asString = new TextDecoder("utf-8").decode(responseBody);
            const asJSON = JSON.parse(asString);
          */
        }
      }
    }

    if (bodyElement && bodyElement.textContent) {
      const bodyInnerText = bodyElement.textContent.trim().replace(/\s+/g, ' ').substring(0, 1500)
      console.log('Body: ' + bodyInnerText)
      const userConfig = await getUserConfig()

      const found = true
      const question = found?.prompt ?? userConfig.prompt
      const promptSource = found?.site ?? 'default'

      console.debug('question(raw):', question)
      console.debug('bodyInnerText:', bodyInnerText)
      mount(question + bodyInnerText, promptSource, siteConfig)
    }
  }
}

run()

if (siteConfig.watchRouteChange) {
  siteConfig.watchRouteChange(run)
}

async function run_again() {
  console.debug('Try again to Mount ChatGPT on', siteName)
  if (siteConfig.bodyQuery) {
    const bodyElement = getPossibleElementByQuerySelector(siteConfig.bodyQuery)
    console.debug('bodyElement again', bodyElement)
    if (bodyElement && siteName == 'codechef') {
      let splits = location.href.split('/')
      splits = splits.filter((e) => (e === 0 ? true : e))
      const codechef_url =
        'https://www.codechef.com/api/contests/PRACTICE/problems/' + splits[splits.length - 1]
      const response = await fetch(codechef_url)
      if (!response.ok) {
        console.log('ERROR GET REQ')
      } else {
        const CCresponseBody = await response.json()
        if (CCresponseBody !== null) {
          // We actually dont need to do anything with the data quetrying again has populated the doms which empty earlier
          /*
           let originalBody = CCresponseBody["body"].replace(/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/g,'');
           console.log("responseBody:", originalBody);
          */
        }
      }
    }
    if (bodyElement && bodyElement.textContent) {
      const bodyInnerText = bodyElement.textContent.trim().replace(/\s+/g, ' ').substring(0, 1500)
      console.log('Body: ' + bodyInnerText)
      const userConfig = await getUserConfig()

      const found = true
      const question = found?.prompt ?? userConfig.prompt
      const promptSource = found?.site ?? 'default'

      console.debug('question(raw):', question)
      console.debug('bodyInnerText:', bodyInnerText)
      mount(question + bodyInnerText, promptSource, siteConfig)
    }
    return true
  }
  return false
}

window.setTimeout(function () {
  if (siteName == 'codechef') run_again()
}, 6000)
