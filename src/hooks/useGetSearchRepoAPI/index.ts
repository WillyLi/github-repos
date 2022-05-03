import { useState, useEffect } from 'react';
import axios from 'axios'
import { IResponse, IRepo } from './types'

function useGetSearchRepoAPI() {
  const [query, setQuery] = useState('');
  const [repoList, setRepoList] = useState<IRepo[]>([]);

  useEffect(() => {
    if (!query) return
    axios
      .get<IResponse>('https://api.github.com/search/repositories', {
        params: {
          q: query,
          per_page: 30,
          page: 1
        }
      })
      .then(({ data }) => {
        setRepoList(data.items)
      })
      .catch(e => { console.error(e) })
  }, [query])

  return { query, repoList, setQuery }
}
export default useGetSearchRepoAPI

