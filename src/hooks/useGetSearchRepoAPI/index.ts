import { useState, useEffect } from 'react'
import axios from 'axios'
import { IResponse, IRepo } from './types'

const store: {
  [query: string]: {
    items: IRepo[],
    count: number
  }
} = {}

const PER_PAGE = 30

function useGetSearchRepoAPI() {
  const [query, setQuery] = useState('')
  const [repoList, setRepoList] = useState<IRepo[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const getStartIndex = (page: number) => (page - 1) * PER_PAGE
  const getEndIndex = (page: number) => page * PER_PAGE - 1

  const fetch = () => {
    setIsLoading(true)
    return axios
      .get<IResponse>('https://api.github.com/search/repositories', {
        params: {
          q: query,
          per_page: PER_PAGE,
          page
        }
      })
      .then(({ data }) => {
        const start = getStartIndex(page)
        store[query]['count'] = data.total_count
        data.items.forEach((repo, index) => {
          store[query]['items'][start + index] = repo
        })
      })
      .catch(({ response }) => {
        console.error(response.data.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const fetchHandler = async () => {
    if (!query || isLoading) return
    if (!store[query]) {
      store[query] = {
        items: [],
        count: 0
      }
    }
    const startIndex = getStartIndex(page)
    const endIndex = getEndIndex(page)
    const hasFetched = store[query]['items'][startIndex]
    if (!hasFetched) {
      await fetch()
    }
    if (store[query]['items'].length >= store[query]['count']) {
      setHasMore(false)
    }
    setRepoList(store[query]['items'].slice(0, endIndex))
  }

  useEffect(() => {
    fetchHandler()
  }, [query, page])

  return { query, repoList, setQuery, setPage, page, isLoading, hasMore }
}
export default useGetSearchRepoAPI
