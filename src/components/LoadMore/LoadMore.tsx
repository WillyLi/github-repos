import './LoadMore.css'
import { useRef } from 'react'
import useIntersection from '../../hooks/useIntersection'
interface ILoadMoreProps {
  onLoadMore(): void
}

function LoadMore({ onLoadMore }: ILoadMoreProps) {
  const ref = useRef<HTMLDivElement>(null)
  useIntersection<HTMLDivElement>(ref, onLoadMore)

  return <div ref={ref} className="LoadMore"></div>
}

export default LoadMore
