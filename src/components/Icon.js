import React from 'react'
import themeable from 'react-themeable'

//Default suggestion item
export const Icon = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='11' cy='11' r='8'></circle>
        <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
      </svg>
    </div>
  )
}

export const getIconProps = (id, theme, onClick) => {
  // Prepare icon props
  return { onClick, ...themeable(theme)(`${id}-icon`, `icon`) }
}
