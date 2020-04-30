import React from 'react'
import styles from './example.module.scss'
export default ({ to }) => {
  return (
    <a
      className={styles.external}
      href={to}
      target='_blank'
      rel='noopener noreferrer'
    >
      <span>
        source
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='14'
          viewBox='0 0 24 24'
          fill='none'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
          <polyline points='15 3 21 3 21 9'></polyline>
          <line x1='10' y1='14' x2='21' y2='3'></line>
        </svg>
      </span>
    </a>
  )
}
