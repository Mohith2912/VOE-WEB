import { useEffect } from 'react'

const upsertMeta = (selector, attribute, value, content) => {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export function usePageMeta(title, description) {
  useEffect(() => {
    const pageUrl = `${window.location.origin}${window.location.pathname}`
    document.title = `${title} — VOE`
    upsertMeta('meta[name="description"]', 'name', 'description', description)
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', `${title} — VOE`)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description)
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', pageUrl)
    const canonical = document.head.querySelector('link[rel="canonical"]')
    canonical?.setAttribute('href', pageUrl)
  }, [title, description])
}
