import { IParsedRepo } from '../../hooks/useGetSearchRepoAPI/types'
import Item from '../Item'
import styles from './List.module.css'

interface IListProps {
  repoList: IParsedRepo[]
}

function List({ repoList }: IListProps) {
  const items = repoList.map((repo, index) => (
    <Item repo={repo} key={repo.id + index} />
  ))
  return <ul className={styles.ul}>{items}</ul>
}

export default List
