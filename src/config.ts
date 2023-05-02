import { defaults } from 'lodash-es'
import Browser from 'webextension-polyfill'

export enum TriggerMode {
  Always = 'always',
  Manually = 'manually',
}

export const TRIGGER_MODE_TEXT = {
  [TriggerMode.Always]: { title: 'Always', desc: 'CPGPT is queried on every search' },
  [TriggerMode.Manually]: {
    title: 'Manually',
    desc: 'CPGPT is queried when you manually click a button',
  },
}

export enum Theme {
  Auto = 'auto',
  Light = 'light',
  Dark = 'dark',
}

export enum Language {
  Auto = 'auto',
  English = 'english',
  Chinese = 'chinese',
  Spanish = 'spanish',
  French = 'french',
  Korean = 'korean',
  Japanese = 'japanese',
  German = 'german',
  Portuguese = 'portuguese',
}

export const Prompt =
  'First summarise the story of the following into a short problem statement(you can ignore proper nouns and focus on mathematical part while summarizing).\
 Now suggest suitable algorithm for this problem.\
 Make sure you try to solve it in the best possible time complexity.\
 If possible add pseudo-code or code as well.\
 If you can think of any alternative solution with different time complexity do suggest that too.\
 Next, suggest 3-4 general problems which makes use of similar concept.\
 Next, suggest 3-4 similar problems on any competitive programming platforms.\
 Next, suggest 3-4 relevant papers(with publishing year) related to this algorithm.\
 Here is the full story of the problem:\
 '

export interface SitePrompt {
  site: string
  prompt: string
}

const userConfigWithDefaultValue = {
  triggerMode: TriggerMode.Always,
  theme: Theme.Auto,
  language: Language.Auto,
  prompt: Prompt,
  promptOverrides: [] as SitePrompt[],
}

export type UserConfig = typeof userConfigWithDefaultValue

export async function getUserConfig(): Promise<UserConfig> {
  const result = await Browser.storage.local.get(Object.keys(userConfigWithDefaultValue))
  return defaults(result, userConfigWithDefaultValue)
}

export async function updateUserConfig(updates: Partial<UserConfig>) {
  console.debug('update configs', updates)
  return Browser.storage.local.set(updates)
}

export enum ProviderType {
  ChatGPT = 'chatgpt',
  GPT3 = 'gpt3',
}

interface GPT3ProviderConfig {
  model: string
  apiKey: string
}

export interface ProviderConfigs {
  provider: ProviderType
  configs: {
    [ProviderType.GPT3]: GPT3ProviderConfig | undefined
  }
}

export async function getProviderConfigs(): Promise<ProviderConfigs> {
  const { provider = ProviderType.ChatGPT } = await Browser.storage.local.get('provider')
  const configKey = `provider:${ProviderType.GPT3}`
  const result = await Browser.storage.local.get(configKey)
  return {
    provider,
    configs: {
      [ProviderType.GPT3]: result[configKey],
    },
  }
}

export async function saveProviderConfigs(
  provider: ProviderType,
  configs: ProviderConfigs['configs'],
) {
  return Browser.storage.local.set({
    provider,
    [`provider:${ProviderType.GPT3}`]: configs[ProviderType.GPT3],
  })
}
