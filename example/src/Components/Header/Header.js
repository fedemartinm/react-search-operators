import GitHubButton from 'react-github-btn'
import GithubLogo from '../Github/Logo'
import React from 'react'
import Selector from '../Theme/Selector'
import styles from './header.module.css'
export default () => (
  <header className={styles.header}>
    <h2>React Search Operators</h2>
    <p>Search component based on search-operators, to filter search results</p>
    <div className={styles.githubButtons}>
      <GitHubButton
        href='https://github.com/fedemartinm/react-search-operators'
        data-icon='octicon-star'
        data-size='large'
        aria-label='Star fedemartinm/react-search-operators on GitHub'
      >
        Star
      </GitHubButton>
      <GitHubButton
        href='https://github.com/fedemartinm/react-search-operators/fork'
        data-icon='octicon-repo-forked'
        data-size='large'
        aria-label='Fork fedemartinm/react-search-operators on GitHub'
      >
        Fork
      </GitHubButton>
    </div>
    <div className={styles.githubLink}>
      <Selector />
      <GithubLogo />
      <a href={'https://github.com/fedemartinm/react-search-operators/'}>
        View on GitHub
      </a>
    </div>
  </header>
)
