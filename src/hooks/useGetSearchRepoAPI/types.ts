export interface IRepo {
  id: string
  name: string
  html_url: string
  owner: {
    avatar_url: string
    login: string
  }
  watchers_count: number
  forks_count: number
  stargazers_count: number
  updated_at: string
  description: string
  language: string
}
export interface IParsedRepo {
  id: string
  name: string
  html_url: string
  owner: {
    avatar_url: string
    login: string
  }
  updated_at: string
  description: string
  language: string
  watchers_count: string
  forks_count: string
  stargazers_count: string
}
export interface IResponse {
  items: IRepo[]
  total_count: number
}
