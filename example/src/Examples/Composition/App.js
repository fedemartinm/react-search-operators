import './app.css'

import React from 'react'
import Search from 'react-search-operators'
import Suggestion from './Suggestion'
import styles from './theme.module.scss'

const App = () => {
  const suggestions = [
    {
      show: true,
      text: 'Open in new window',
    },
  ]
  return (
    <div className='app'>
      <Search
        id='composition'
        theme={styles}
        suggestions={suggestions}
        suggestionAs={Suggestion}
      />
    </div>
  )
}

export default App
