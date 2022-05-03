import './Item.css';
import { IRepo } from '../../hooks/useGetSearchRepoAPI/types'

interface IListProps {
  repo: IRepo
}

function Item({ repo }: IListProps) {
  const { git_url, name, description } = repo
  return (
    <a href={git_url} className="item">
      <div>{name}</div>
      <div>{description}</div>
    </a>
  );
}

export default Item;
