import './List.css'
import { IRepo } from '../../hooks/useGetSearchRepoAPI/types'
import Item from '../Item'
interface IListProps {
  repoList: IRepo[]
}

function List({ repoList }: IListProps) {
  const items = repoList.map((repo) => <Item repo={repo} key={repo.id} />)
  return <ul className="list">{items}</ul>
}

export default List
