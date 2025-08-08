import { useEffect, useRef } from 'react'

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [callback])

  return ref
}
