export interface ILocaleConfig {
  path: string
  name: string
  default: boolean
  dateFormat: string
  metadata: {
    imageBaseUrl: string
    titleTemplate: string
    defaultTitle: string
    description: string
  }
}
