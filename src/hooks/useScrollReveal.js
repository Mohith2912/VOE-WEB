import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement
    root.classList.add('has-js')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'))
      return () => root.classList.remove('has-js')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => {
      observer.disconnect()
      root.classList.remove('has-js')
    }
  }, [])
}

