import { LIGHT } from '../Theme/consts'
import PropTypes from 'prop-types'
import React from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import light from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light'
import styles from './code.module.css'
import useTheme from '../../Hooks/useTheme'

SyntaxHighlighter.registerLanguage('javascript', js)

const Code = ({ code }) => {
  const theme = useTheme()
  const highlighter = theme === LIGHT ? light : dark
  return (
    <div>
      <SyntaxHighlighter
        className={styles.code}
        language='javascript'
        style={highlighter}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
Code.defaultProps = {
  code: '',
}

Code.propTypes = {
  code: PropTypes.string,
}

export default Code
