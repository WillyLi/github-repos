import { IRepo } from '../../hooks/useGetSearchRepoAPI/types'

const repoParser = (repo: IRepo): IRepo => {
  const {
    id,
    name,
    git_url,
    owner: { avatar_url, login },
    watchers_count,
    forks_count,
    stargazers_count,
    updated_at,
    description
  } = repo
  return {
    id,
    name,
    git_url,
    owner: { avatar_url, login },
    watchers_count,
    forks_count,
    stargazers_count,
    updated_at,
    description
  }
}

export default repoParser
