import Composition from '../Examples/Composition'
import Example from '../Components/Example/Example'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Highlight from '../Examples/Highlighting'
import IntroductionExample from '../Examples/Introduction'
import React from 'react'
import Suggestions from '../Examples/Suggestions'
import { ThemeProvider } from '../Components/Theme/Provider'
import styles from './app.module.scss'
//Polyfills
import 'core-js/features/object/assign'
import 'core-js/features/promise'
import 'whatwg-fetch'

const App = () => {
  return (
    <ThemeProvider>
      <div className={styles.page}>
        <Header />
        <section className={styles.container}>
          <Example component={IntroductionExample} />
          <Example component={Suggestions} />
          <Example component={Composition} />
          <Example component={Highlight} />
        </section>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
