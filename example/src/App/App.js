import DraftJsExample from '../Examples/'
import Example from '../Components/Example/Example'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import React from 'react'
import styles from './app.module.css'

const App = () => {
  return (
    <div>
      <Header />
      <section className={styles.container}>
        <Example component={DraftJsExample} />
        <Example component={DraftJsExample} />
        <Example component={DraftJsExample} />
        <Example component={DraftJsExample} />
      </section>
      <Footer />
    </div>
  )
}

export default App
