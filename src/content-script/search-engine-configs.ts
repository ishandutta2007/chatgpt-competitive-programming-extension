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
}
