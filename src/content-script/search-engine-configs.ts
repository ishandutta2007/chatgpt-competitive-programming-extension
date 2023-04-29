export interface SearchEngine {
  inputQuery: string[]
  bodyQuery: string[]
  sidebarContainerQuery: string[]
  appendContainerQuery: string[]
  watchRouteChange?: (callback: () => void) => void
}

export const config: Record<string, SearchEngine> = {
  google: {
    inputQuery: ["input[name='q']"],
    bodyQuery: ['#place-'],
    sidebarContainerQuery: ['#rhs'],
    appendContainerQuery: ['#rcnt'],
  },
  spoj: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['#problem-body'],
    sidebarContainerQuery: ['#ccontent'],
    appendContainerQuery: [],
  },
  codeforces: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['div[class="problem-statement"]'],
    sidebarContainerQuery: ['#footer'],
    appendContainerQuery: [],
  },
  projecteuler: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['div[class="problem_content"]'],
    sidebarContainerQuery: ['#problem_answer'],
    appendContainerQuery: [],
  },
  leetcode: {},
  codechef: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['#problem-statement'],
    sidebarContainerQuery: ['#vertical-tab-panel-1'],
    appendContainerQuery: [],
  },
  poj: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['td'],
    sidebarContainerQuery: ['tr'],
    appendContainerQuery: [],
  },
  interviewbit: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['#problem_description_markdown_content_value'],
    sidebarContainerQuery: ['div[class="p-similar-questions"]'],
    appendContainerQuery: [],
  },
  atcoder: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['#task-statement > span > span.lang-en > div:nth-child(2) > section'],
    sidebarContainerQuery: ['form[class="form-horizontal form-code-submit"]'],
    appendContainerQuery: [],
  },
  arxiv: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['#abs'],
    sidebarContainerQuery: ['div[class="metatable"]'],
    appendContainerQuery: [],
  },
  biorxiv: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['div[class="inside"]'],
    sidebarContainerQuery: ['#panels-ajax-tab-container-highwire_article_tabs'],
    appendContainerQuery: [],
  },
  pubmed: {
    inputQuery: [],
    bodyQuery: ['#abstract'],
    sidebarContainerQuery: ['#copyright'],
    appendContainerQuery: [],
  },
  ieeexplore: {
    inputQuery: [],
    bodyQuery: ['div.abstract-text.row div.u-mb-1 div'],
    sidebarContainerQuery: ['div.u-pb-1.stats-document-abstract-publishedIn'],
    appendContainerQuery: [],
  },
}
