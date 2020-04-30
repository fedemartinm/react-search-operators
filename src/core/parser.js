import SearchParser from 'search-operators'

export function defaultParser({ prev, next }) {
  let tokens = []
  let parsed = {
    filters: [],
    terms: [],
  }
  try {
    parsed = SearchParser.parse(next.text, this.parserOptions)
    tokens = SearchParser.tokens
  } catch {}
  //add parsed value
  next = { ...next, parsed, tokens }
  return { prev, next }
}
