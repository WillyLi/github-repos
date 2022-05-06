import { IRepo, IParsedRepo } from '../../hooks/useGetSearchRepoAPI/types'
import abbreviationNumber from '../abbreviationNumber'

const repoParser = (repo: IRepo): IParsedRepo => {
  const {
    id,
    name,
    html_url,
    owner: { avatar_url, login },
    watchers_count,
    forks_count,
    stargazers_count,
    updated_at,
    description,
    language
  } = repo
  return {
    id,
    name,
    html_url,
    owner: { avatar_url, login },
    watchers_count: abbreviationNumber(watchers_count, 1),
    forks_count: abbreviationNumber(forks_count, 1),
    stargazers_count: abbreviationNumber(stargazers_count, 1),
    updated_at,
    description,
    language
  }
}

export default repoParser
