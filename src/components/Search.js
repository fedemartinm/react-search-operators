import { Input, Item, getIconProps, Icon } from './'
import React, { useEffect, useState } from 'react'
import { defaultParser, suggest } from '../core'

import Autowhatever from 'react-autowhatever'
import PropTypes from 'prop-types'
import defaultTheme from '../styles'
import { usePipe } from '../hooks'

const Search = (props) => {
  const {
    id,
    as,
    text,
    icon,
    placeholder,
    theme,
    //parser
    parser,
    parserOptions,
    //suggestions
    suggestions,
    suggestionAs,
    //events
    onSearch,
    onChange,
    onTextChange,
    onSelect,
  } = props

  const [active, setActive] = useState(false)
  const [state, setState] = useState({
    text: text ? text : '',
    parsed: [],
    tokens: [],
    suggestions: [],
  })

  //Parser implementation
  const _parser = parser ? parser : defaultParser

  //Process search pipeline
  const context = { parserOptions, suggestions }
  const _write = usePipe(_parser, suggest)
  const write = (...data) => _write.call(context, ...data)

  //Write to pipe
  const processSearch = (text) => {
    let { next } = write({ prev: state, next: { text } })
    let event = { parsed: next.parsed, text: next.text }
    setState(next)
    onChange?.call(null, event)
  }

  //Event handlers
  const _onTextChange = onTextChange || processSearch
  const _onBlur = () => setActive(false)
  const _onFocus = () => setActive(true)
  const _onEnter = () => onSearch?.call(null, state)
  const _onIconClick = () => onSearch?.call(null, state)
  const _onItemMouseDown = (_, { itemIndex }) =>
    onSelect?.call(null, state.suggestions[itemIndex])

  //Controlled: process passed text
  useEffect(() => {
    if (typeof text !== 'undefined') {
      processSearch(text)
    }
  }, [text])

  // Compose auto-whatever
  const inputComponent = as ? as : Input
  const itemComponent = suggestionAs ? suggestionAs : Item
  const iconComponent = icon ? icon : Icon

  // If Item is wrapped, create element
  // (fragments, forwardedRefs, memos...)
  const itemElement =
    typeof itemComponent === 'object'
      ? (props) => React.createElement(itemComponent, props)
      : itemComponent

  // Inner component
  // drop ref
  const compositeInput = ({ ref, ...props }) =>
    React.createElement(
      React.Fragment,
      null,
      React.createElement(inputComponent, { ...props }),
      React.createElement(iconComponent, getIconProps(id, theme, _onIconClick))
    )

  // Suggest
  const items = active ? state.suggestions : []

  return (
    <Autowhatever
      id={id}
      items={items}
      theme={theme}
      renderItem={itemElement}
      renderInputComponent={compositeInput}
      itemProps={{ onMouseDown: _onItemMouseDown }}
      inputProps={{
        placeholder,
        parsed: state.parsed,
        text: state.text,
        tokens: state.tokens,
        onFocus: _onFocus,
        onBlur: _onBlur,
        onTextChange: _onTextChange,
        onEnter: _onEnter,
      }}
    />
  )
}

Search.propTypes = {
  /** IDs used in ARIA. If component is used more than once to be sure each is unique. */
  id: PropTypes.string,

  /** An element type to render as input */
  as: PropTypes.elementType,

  /** Search text. Use it on controlled implementations. */
  text: PropTypes.string,

  /** An element type to render as icon */
  icon: PropTypes.elementType,

  /** Input placeholder text */
  placeholder: PropTypes.string,

  /** Object to style your search component */
  theme: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),

  /** Replace default parser implementation */
  parser: PropTypes.func,

  /** Default parser options */
  parserOptions: PropTypes.object,

  /** Search suggestions array */
  suggestions: PropTypes.array,

  /** An element type to render as suggestion */
  suggestionAs: PropTypes.elementType,

  /** Called after user clicks search or types enter */
  onSearch: PropTypes.func,

  /** Called when a suggestion is clicked */
  onChange: PropTypes.func,

  /** called every time search is parsed */
  onTextChange: PropTypes.func,

  /** Called every time search text change. Use it on controlled implementations. */
  onSelect: PropTypes.func,
}

Search.defaultProps = {
  id: 'id',
  placeholder: 'Search...',
  theme: defaultTheme,
}

export default Search
