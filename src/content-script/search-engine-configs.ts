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
    sidebarContainerQuery: ['#sidebar'],
    appendContainerQuery: [],
  },
  projecteuler: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['div[class="problem_content"]'],
    sidebarContainerQuery: ['#problem_answer'],
    appendContainerQuery: [],
  },
  leetcode: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['#qd-content'],
    sidebarContainerQuery: ['nav'],
    appendContainerQuery: [],
  },
  codechef: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['#problem-statement'],
    sidebarContainerQuery: ['#vertical-tab-panel-1'],
    appendContainerQuery: [],
  },
  poj: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['body > table:nth-child(3) > tbody > tr > td > div:nth-child(5)'],
    sidebarContainerQuery: ['p[class="pst"]'],
    appendContainerQuery: [],
  },
  interviewbit: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['head > meta[name="description"]'],
    sidebarContainerQuery: ['div[class="interviewbit"]'],
    appendContainerQuery: [],
  },
  atcoder: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['#task-statement > span > span.lang-en > div:nth-child(2) > section'],
    sidebarContainerQuery: ['form[class="form-horizontal form-code-submit"]'],
    appendContainerQuery: [],
  },
  hackerrank: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['div[class="msB challenge_problem_statement_body"]'],
    sidebarContainerQuery: ['div[class="fs-right-pane"]'],
    appendContainerQuery: [],
  },
  hackerearth: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['div[class="description"]'],
    sidebarContainerQuery: ['div[class="contributors-panel"]'],
    appendContainerQuery: [],
  },
  kattis: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['div[class="problembody"]'],
    sidebarContainerQuery: ['#instructions-container'],
    appendContainerQuery: [],
  },
  dmoj: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['div[class="content-description screen"]'],
    sidebarContainerQuery: ['#comments'],
    appendContainerQuery: [],
  },
  timus: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['div[class="problem_content"]'],
    sidebarContainerQuery: ['div[class="problem_links"]'],
    appendContainerQuery: [],
  },
  eolymp: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['div[class="eo-paper__content eo-problem-statement"]'],
    sidebarContainerQuery: [
      'div[class="eo-paper__content eo-paper__content_border eo-paper__content_muted eo-paper__content_compact"]',
    ],
    appendContainerQuery: [],
  },
  topcoder: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['td[class="problemText"]'],
    sidebarContainerQuery: ['td[class="bodyTextBold"]'],
    appendContainerQuery: [],
  },
  lightoj: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['div[class="markdown-body"]'],
    sidebarContainerQuery: ['div[class="card-footer"]'],
    appendContainerQuery: [],
  },
  toph: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['div[class="artifact"]'],
    sidebarContainerQuery: ['form[id="frmSubmit"]'],
    appendContainerQuery: [],
  },
  newtonschool: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['#controlled-tab-example-tabpane-question > div[class="row"]'],
    sidebarContainerQuery: ['div[class="main-container"]'],
    appendContainerQuery: [],
  },
  cses: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['div[class="content"]'],
    sidebarContainerQuery: ['div[class="nav sidebar"]'],
    appendContainerQuery: [],
  },
  codedrills: {
    inputQuery: ["input[name='query']"],
    bodyQuery: [
      '#app > div > div:nth-child(2) > main > div > span > div.container.container--fluid > div > div > span > span > div.v-window.v-item-group.theme--light.v-tabs-items > div > div > span > div > div:nth-child(1)',
    ],
    sidebarContainerQuery: ['div[class="v-list-item__content"]'],
    appendContainerQuery: [],
  },
  pramp: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['div[class="nav-tab-panel nav-tab-panel_active nav-tab-panel_markdown"]'],
    sidebarContainerQuery: [
      'div[class="nav-tab-panel nav-tab-panel_active nav-tab-panel_markdown"] > h2',
    ],
    appendContainerQuery: [],
  },
  algoexpert: {
    inputQuery: ["input[name='query']"],
    bodyQuery: [
      '#root > div > div > div > div > div:nth-child(1) > div > div:nth-child(1) > div > div > div:nth-child(2) > div > div.ae-workspace-dark > div',
    ],
    sidebarContainerQuery: [
      'div[class="vertical reflex-container"] > div[class="horizontal reflex-element"]',
    ],
    appendContainerQuery: [],
  },
}
