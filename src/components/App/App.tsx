import './App.css'
import Input from '../Input'
import List from '../List'
import useGetSearchRepoAPI from '../../hooks/useGetSearchRepoAPI'
import debounce from 'lodash.debounce'
import LoadMore from '../LoadMore'

function App() {
  const { query, setQuery, repoList, setPage, page, isLoading } =
    useGetSearchRepoAPI()

  const onInputChange = debounce((val: string) => {
    setQuery(val)
  }, 500)

  return (
    <div className="App">
      <button
        onClick={() => {
          setPage(page + 1)
        }}
      >
        click
      </button>
      <Input onChange={onInputChange} />
      <List repoList={repoList} />
      {'query:' + query}
      {!isLoading && query && <LoadMore />}
    </div>
  )
}

export default App
