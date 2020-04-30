import 'react-search-operators/dist/index.css'
import './app.css'

import React, { useState } from 'react'

import Search from 'react-search-operators'

const App = () => {
  const [state, setState] = useState({})
  return (
    <div className='app'>
      <Search id='introduction' onChange={setState} />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}

export default App
