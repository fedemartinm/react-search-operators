// src/context/main.js
import React, { createContext, useState } from 'react'

import { LIGHT } from './consts'

const ThemeContext = createContext()
const ThemeProvider = ({ children }) => {
  let [theme, setTheme] = useState(LIGHT)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
