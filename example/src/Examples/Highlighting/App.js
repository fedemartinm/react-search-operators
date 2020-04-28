import 'react-search-operators/dist/index.css'
import './app.css'

import DraftInput from './DraftInput'
import React from 'react'
import Search from 'react-search-operators'

const App = () => {
  const suggestions = [{ show: true, text: 'Try with some operators!' }]
  const parserOptions = { keys: ['in'] }
  return (
    <div className='app'>
      <Search
        suggestions={suggestions}
        as={DraftInput}
        parserOptions={parserOptions}
      />
    </div>
  )
}

export default App
