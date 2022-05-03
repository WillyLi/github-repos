import { useState, useEffect } from 'react'
import axios from 'axios'
import { IResponse, IRepo } from './types'

const store: {
  [query: string]: IRepo[]
} = {}

function useGetSearchRepoAPI() {
  const [query, setQuery] = useState('')
  const [repoList, setRepoList] = useState<IRepo[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const per_page = 30

  const getStartIndex = (page: number) => (page - 1) * per_page
  const getEndIndex = (page: number) => page * per_page - 1

  const fetch = () => {
    setIsLoading(true)
    return axios
      .get<IResponse>('https://api.github.com/search/repositories', {
        params: {
          q: query,
          per_page,
          page
        }
      })
      .then(({ data }) => {
        const start = getStartIndex(page)
        data.items.forEach((repo, index) => {
          store[query][start + index] = repo
        })
      })
      .catch(({ response }) => {
        console.error(response.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const fetchHandler = async () => {
    if (!query || isLoading) return
    if (!store[query]) {
      store[query] = []
    }
    const startIndex = getStartIndex(page)
    const endIndex = getEndIndex(page)
    const hasFetched = store[query][startIndex]
    if (!hasFetched) {
      await fetch()
    }
    setRepoList(store[query].slice(0, endIndex))
  }

  useEffect(() => {
    fetchHandler()
  }, [query, page])

  return { query, repoList, setQuery, setPage, page, isLoading }
}
export default useGetSearchRepoAPI
