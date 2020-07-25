import React from 'react'

import 'normalize.css'
import 'styles/main.scss'

import styles from 'styles/modules/footer.module.scss'

import Header from '@/components/Header'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Header />

      <main>
        <Component {...pageProps} />
      </main>

      <footer className={styles.footer}>Djordje Stevanovic @ DevChallenges.io</footer>
    </>
  )
}

export default App
