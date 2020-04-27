import PropTypes from 'prop-types'
import React from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import styles from './code.module.css'

SyntaxHighlighter.registerLanguage('javascript', js)

const Code = ({ code }) => (
  <div>
    <SyntaxHighlighter
      className={styles.code}
      language='javascript'
      style={docco}
    >
      {code}
    </SyntaxHighlighter>
  </div>
)

Code.defaultProps = {
  code: '',
}

Code.propTypes = {
  code: PropTypes.string,
}

export default Code
