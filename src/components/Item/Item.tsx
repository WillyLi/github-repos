import styles from './Item.module.css'
import { IRepo } from '../../hooks/useGetSearchRepoAPI/types'

interface IListProps {
  repo: IRepo
}

function Item({ repo }: IListProps) {
  const { git_url, name, description } = repo
  return (
    <li className={styles.item}>
      <a href={git_url} className={styles.link}>
        <div>{name}</div>
        <div>{description}</div>
      </a>
    </li>
  )
}

export default Item
