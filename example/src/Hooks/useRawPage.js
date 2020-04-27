import { useEffect, useState } from 'react'

/**
 * Load raw text from passed url
 * @param {*} url page origin
 */
export default function useRawPage(url) {
  const [state, setState] = useState({
    loading: true,
    page: '',
  })
  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((page) => {
        setState({ loading: false, page })
      })
      .catch((error) => {
        setState({ loading: false, page: 'Error loading page...' })
      })
  }, [])
  return state
}
