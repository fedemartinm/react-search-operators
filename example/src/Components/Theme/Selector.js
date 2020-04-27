import { DARK, LIGHT } from './consts'
import { Moon, Sun } from './Icons'
import React, { useContext, useEffect } from 'react'

import { ThemeContext } from './Provider'
import styles from './theme.module.scss'

const Selector = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  useEffect(() => {
    if (theme === DARK) {
      document.body.classList.remove('theme-light')
      document.body.classList.add('theme-dark')
    } else {
      document.body.classList.remove('theme-dark')
      document.body.classList.add('theme-light')
    }
  }, [theme])
  if (theme === DARK) {
    return <Sun className={styles.selector} onClick={() => setTheme(LIGHT)} />
  } else {
    return <Moon className={styles.selector} onClick={() => setTheme(DARK)} />
  }
}

export default Selector
