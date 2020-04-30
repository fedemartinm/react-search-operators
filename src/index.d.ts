import { ParseResult, Token } from 'search-operators'
import React from 'react'

declare const Search: React.FC<SearchProps>

/**
 * React Search Operators Component
 */
export default Search

/**
 * Generated Query
 */
export interface SearchQuery {
  text: string
  parsed: ParseResult | any
  tokens: Token[]
  suggestions: Suggestion[]
}

/**
 * Parser result.
 */
export interface SearchParseResult {
  text: string
  parsed: ParseResult | any
}

/**
 * Suggestion
 */
export interface Suggestion extends SuggestionBase {
  [key: string]: any
}

export interface SuggestionBase {
  show?: Boolean
  text?: string
}

export interface SearchProps {
  /** IDs used in ARIA. If component is used more than once to be sure each is unique. */
  id?: string

  /** An element type to render as input
   * text and onTextChange(text) props are required!
   */
  as?: any

  /** Search text. Use it on controlled implementations. */
  text: string

  /** An element type to render as icon */
  icon: any

  /** Input placeholder text */
  placeholder: string

  /** Object to style your search component */
  theme: any

  /** Replace default parser implementation */
  parser: any

  /** Default parser options */
  parserOptions: any

  /** Search suggestions array */
  suggestions: Suggestion[]

  /** An element type to render as suggestion */
  suggestionAs: any

  /** Called after user clicks search or types enter */
  onSearch: (search: SearchQuery) => void

  /** Called when a suggestion is clicked */
  onChange: (search: SearchParseResult) => void

  /** called every time search is parsed */
  onTextChange: (text: string) => void

  /** Called every time search text change. Use it on controlled implementations. */
  onSelect: (suggestion: Suggestion) => void
}
