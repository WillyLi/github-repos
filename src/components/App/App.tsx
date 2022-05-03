import './App.css'
import Input from '../Input'
import List from '../List'
import useGetSearchRepoAPI from '../../hooks/useGetSearchRepoAPI'
import debounce from 'lodash.debounce'
import LoadMore from '../LoadMore'

function App() {
  const { query, setQuery, repoList, setPage, page, isLoading, hasMore } =
    useGetSearchRepoAPI()

  const onInputChange = debounce((val: string) => {
    setQuery(val)
    setPage(1)
  }, 500)

  const onLoadMore = debounce(() => {
    setPage(page + 1)
  }, 2000)

  return (
    <div className="App">
      <Input onChange={onInputChange} />
      <List repoList={repoList} />
      {'query:' + query}
      {!isLoading && query && hasMore && <LoadMore onLoadMore={onLoadMore} />}
    </div>
  )
}

export default App
