import styles from './Item.module.css'
import { IParsedRepo } from '../../hooks/useGetSearchRepoAPI/types'

interface IListProps {
  repo: IParsedRepo
}

function Item({ repo }: IListProps) {
  const {
    html_url,
    name,
    description,
    owner: { avatar_url, login },
    language,
    forks_count,
    watchers_count,
    stargazers_count
  } = repo
  return (
    <li className={styles.item}>
      <a
        href={html_url}
        className={styles.link}
        target="_blank"
        rel="noreferrer"
      >
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.user}>
          <picture className={styles.avatar}>
            <img src={avatar_url} alt={login} />
          </picture>
          <div>{login}</div>
        </div>
        <div className={styles.desc}>{description}</div>
        <div className={styles.metas}>
          {language && <div className={styles.language}>{language}</div>}
          <div className={styles.fork}>🔱 {forks_count}</div>
          <div className={styles.watcher}>👀 {watchers_count}</div>
          <div className={styles.start}>⭐︎ {stargazers_count}</div>
        </div>
      </a>
    </li>
  )
}

export default Item
