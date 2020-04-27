import Code from '../Code/Code'
import External from './External'
import Loading from '../Loading/Loading'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './example.module.css'
import useRawPage from '../../Hooks/useRawPage'

const Example = ({ component: Component }) => {
  const { title, description, source, raw } = Component
  const { loading, page } = useRawPage(raw)
  if (loading) {
    return <Loading />
  }

  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <p>
        {description} <External to={source} />
      </p>
      <div className={styles.example}>
        <div>
          <Code code={page} />
        </div>
        <div>
          {' '}
          <Component />
        </div>
      </div>
    </section>
  )
}

Example.defaultProps = {
  component: null,
}

Example.propTypes = {
  component: PropTypes.element.isRequired,
}

export default Example