import { useEffect, RefObject } from 'react'
interface ObserverOption {
  readonly root: Element | null
  readonly rootMargin: string
  readonly threshold: number | Array<number>
}

export default function useIntersection<T extends Element>(
  ref: RefObject<T>,
  callback: IntersectionObserverCallback,
  option?: ObserverOption
): void {
  const observer = new IntersectionObserver(callback, option)

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [])
}
