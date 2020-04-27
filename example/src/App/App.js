import DraftJsExample from '../Examples/'
import Example from '../Components/Example/Example'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import React from 'react'
import { ThemeProvider } from '../Components/Theme/Provider'
import styles from './app.module.scss'

const App = () => {
  return (
    <ThemeProvider>
      <div className={styles.page}>
        <Header />
        <section className={styles.container}>
          <Example component={DraftJsExample} />
          <Example component={DraftJsExample} />
          <Example component={DraftJsExample} />
          <Example component={DraftJsExample} />
        </section>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
