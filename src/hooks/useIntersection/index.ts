import { useEffect, RefObject } from 'react'
const BUFFER = 300
export default function useIntersection<T extends Element>(
  ref: RefObject<T>,
  callback: () => void,
): void {
  const config = {
    rootMargin: `${BUFFER}px 0px ${BUFFER}px 0px`
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback()
      }
    })
  }, config)

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [])
}
