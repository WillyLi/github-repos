import './LoadMore.css'
import { useRef } from 'react'
import useIntersection from '../../hooks/useIntersection'

function LoadMore() {
  const ref = useRef<HTMLDivElement>(null)
  useIntersection<HTMLDivElement>(ref, () => {})

  return (
    <div ref={ref} className="LoadMore">
      loading...
    </div>
  )
}

export default LoadMore
