import React from 'react'
import Link from 'next/link'
import styles from '../styles/modules/job.module.scss'

const Job = ({ job }) => {
  const { title, location, company, type, id, company_logo, created_at } = job

  const setDate = date => {
    const time = new Date(date)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    return time.toLocaleDateString('en-US', options)
  }

  return (
    <div className={styles.job}>
      <img src={company_logo} alt="company logo" width="90" height="90" loading="lazy" />

      <div className={styles.job__details}>
        <div className={styles.job__details__company}>{company}</div>
        <div className={styles.job__details__title}>
          <Link href="/[id]" as={`/${id}`}>
            <a>{title}</a>
          </Link>
        </div>
        <div className={styles.job__details__type + ' chip'}>{type}</div>
      </div>

      <div className={styles.job__location}>
        <div className="color--secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#B9BDCF"
            width="18px"
            height="18px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
          {location}
        </div>
        <div className="color--secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#B9BDCF"
            width="18px"
            height="18px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
          </svg>
          {setDate(created_at)}
        </div>
      </div>
    </div>
  )
}

export default Job
