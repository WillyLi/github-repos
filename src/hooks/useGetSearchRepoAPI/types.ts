export interface IRepo {
  id: string
  name: string
  git_url: string
  owner: {
    avatar_url: string
    login: string
  }
  watchers_count: number
  forks_count: number
  stargazers_count: number
  updated_at: string
  description: string
}
export interface IResponse {
  items: IRepo[]
}
