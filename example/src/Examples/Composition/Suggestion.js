import React from 'react'

const navigate = () => {
  window.open(window.location, '_blank').focus()
}

const Suggestion = ({ text }) => {
  return <a onMouseDown={navigate}>{text}</a>
}

export default Suggestion
