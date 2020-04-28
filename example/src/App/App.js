import AnchorExample from '../Examples/Anchor'
import Composition from '../Examples/Composition'
import DraftJsExample from '../Examples/DraftJS'
import Example from '../Components/Example/Example'
import Footer from '../Components/Footer/Footer'
import FuncExample from '../Examples/Func'
import Header from '../Components/Header/Header'
import IntroductionExample from '../Examples/Introduction'
import React from 'react'
import Suggestions from '../Examples/Suggestions'
import { ThemeProvider } from '../Components/Theme/Provider'
import styles from './app.module.scss'

const App = () => {
  return (
    <ThemeProvider>
      <div className={styles.page}>
        <Header />
        <section className={styles.container}>
          <Example component={IntroductionExample} />
          <Example component={Suggestions} />
          <Example component={Composition} />
          {/*   <Example component={AnchorExample} />
          <Example component={FuncExample} /> */}
          {/* <Example component={DraftJsExample} />
          <Example component={DraftJsExample} /> */}
        </section>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
