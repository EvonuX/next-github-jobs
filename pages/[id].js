import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/modules/job-page.module.scss'

const Job = ({ job }) => {
  const setDate = date => {
    const time = new Date(date)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    return time.toLocaleDateString('en-US', options)
  }

  return (
    <div className={styles.job}>
      <Head>
        <title>{job.title} - Github Jobs</title>
      </Head>

      <div className={styles.job__sidebar}>
        <Link href="/">
          <a>&larr; Back to search</a>
        </Link>

        <p className="color--secondary">HOW TO APPLY</p>

        <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }}></div>
      </div>

      <div className={styles.job__info}>
        <h1>
          {job.title} <div className="chip">{job.type}</div>
        </h1>

        <p className="color--secondary text--small">{setDate(job.created_at)}</p>

        <div className={styles.job__info__company}>
          <img src={job.company_logo} alt="company logo" width="42" height="42" />
          <div>
            <h2>{job.company}</h2>
            <p className="color--secondary text--small">{job.location}</p>
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
  const data = await fetch(`https://jobs.github.com/positions/${params.id}.json`)
  const job = await data.json()

  return {
    props: { job }
  }
}

export default Job
