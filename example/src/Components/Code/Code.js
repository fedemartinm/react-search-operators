import { LIGHT } from '../Theme/consts'
import PropTypes from 'prop-types'
import React from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import styleCode from './code.module.css'
import styleDark from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark'
import styleLight from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import useTheme from '../../Hooks/useTheme'

SyntaxHighlighter.registerLanguage('jsx', jsx)

const Code = ({ code }) => {
  const theme = useTheme()
  const highlighter = theme === LIGHT ? styleLight : styleDark
  return (
    <SyntaxHighlighter
      className={styleCode.code}
      language='jsx'
      style={highlighter}
    >
      {code}
    </SyntaxHighlighter>
  )
}
Code.defaultProps = {
  code: '',
}

Code.propTypes = {
  code: PropTypes.string,
}

export default Code
