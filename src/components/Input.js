import React from 'react'

//Default input item
export const Input = ({ onTextChange, onEnter, text, ...props }, ref) => {
  return (
    <input
      {...props}
      onKeyUp={(e) => e.keyCode === 13 && onEnter()}
      onChange={(e) => onTextChange(e.target.value)}
      value={text}
    />
  )
}
