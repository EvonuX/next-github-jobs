import React from 'react'
import styles from 'styles/modules/header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__logo}>
          <span>Github</span> Jobs
        </div>
      </div>
    </header>
  )
}

export default Header
