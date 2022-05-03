import './App.css';
import Input from '../Input';
import List from '../List'
import useGetSearchRepoAPI from '../../hooks/useGetSearchRepoAPI'
import debounce from 'lodash.debounce'

function App() {
  const { query, setQuery, repoList } = useGetSearchRepoAPI()

  const onInputChange = debounce((val: string) => {
    setQuery(val)
  }, 500)

  return (
    <div className="App">
      <Input onChange={onInputChange} />
      <List repoList={repoList} />
      {'query:' + query}
    </div>
  );
}

export default App;
