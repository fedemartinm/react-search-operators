import 'react-search-operators/dist/index.css'
import './app.css'

import React, { useState } from 'react'

import Search from 'react-search-operators'

const App = () => {
  const [text, setText] = useState('')
  // Hide if match operator present
  const suggestFilter = (_, searchState) =>
    !searchState.parsed.filters.some((filter) => filter.type === 'match')
  //Suggest user to filter origin of search
  const suggestions = [
    {
      show: suggestFilter,
      text: (_, { text }) => `${text} - in all github`,
      repo: 'all',
    },
    {
      show: suggestFilter,
      text: (_, { text }) => `${text} - in this repo`,
      repo: 'this',
    },
  ]
  //On select suggest, change search applying operation
  const select = (e) => {
    console.log('Entre', e)
    setText(`in:${e.repo} ${text}`)
  }
  //Tell to parser that 'in' is a valid match operand
  const options = {
    keys: ['in'],
  }
  return (
    <div className='app'>
      <Search
        text={text}
        onTextChange={setText}
        suggestions={suggestions}
        parserOptions={options}
        onSelect={select}
      />
    </div>
  )
}

export default App
