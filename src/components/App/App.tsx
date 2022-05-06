import styles from './App.module.css'
import Input from '../Input'
import List from '../List'
import LoadMore from '../LoadMore'
import Loader from '../Loader'

import useGetSearchRepoAPI from '../../hooks/useGetSearchRepoAPI'
import debounce from 'lodash.debounce'

function App() {
  const {
    query,
    setQuery,
    repoList,
    setPage,
    page,
    isLoading,
    hasMore,
    isLocked
  } = useGetSearchRepoAPI()

  const onInputChange = debounce((val: string) => {
    setQuery(val)
    setPage(1)
  }, 500)

  const onLoadMore = debounce(() => {
    setPage(page + 1)
  }, 2000)

  return (
    <div className={styles.app}>
      <h1 className={styles.heading}>Search Repos on Github</h1>
      <Input onChange={onInputChange} />
      {isLocked && (
        <div className={styles.error}>
          Exceed Rate Limit, please wait for 1 minute{' '}
        </div>
      )}
      <List repoList={repoList} />
      {isLoading && <Loader />}
      {!isLoading && query && hasMore && <LoadMore onLoadMore={onLoadMore} />}
    </div>
  )
}

export default App
