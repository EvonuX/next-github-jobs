import React, { useState } from 'react'
import Head from 'next/head'

import Job from '@/components/Job'
import styles from '../styles/modules/home.module.scss'

const Index = ({ jobList }) => {
  const [jobs, setJobs] = useState(jobList)

  const onChangeLocation = async e => {
    const location = e.target.id || e.target.value

    const res = await fetch(`api/jobs?location=${location}`)
    const data = await res.json()

    setJobs(data)
  }

  const onChangeSearch = async e => {
    const text = e.target.value

    const res = await fetch(`api/jobs?description=${text}`)
    const data = await res.json()

    setJobs(data)
  }

  const showFullTime = async e => {
    const res = await fetch(`api/jobs?full_time=${e.target.checked}`)
    const data = await res.json()

    setJobs(data)
  }

  return (
    <div className={styles.home}>
      <Head>
        <title>Github Jobs Listing</title>
      </Head>

      <div className={styles.home__hero}>
        <img src="/bg.png" alt="hero" />
        <div className={styles.home__hero__input + ' input__field'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#B9BDCF"
            width="18"
            height="18"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"
              fillRule="evenodd"
            />
          </svg>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Title, companies, expertise or benefits"
            onChange={e => onChangeSearch(e)}
          />
          <button className="btn" type="submit">
            Search
          </button>
        </div>
      </div>

      <div className={styles.home__wrapper}>
        <div className={styles.home__wrapper__sidebar}>
          <div className="input input__checkbox">
            <input type="checkbox" name="type" id="type" onChange={e => showFullTime(e)} />
            <label htmlFor="type">Full Time</label>
          </div>

          <label
            style={{ marginTop: '2rem', marginBottom: '1rem', display: 'block' }}
            htmlFor="location"
            className="color--secondary"
          >
            LOCATION
          </label>
          <div className="input__field" style={{ marginBottom: '2rem', display: 'block' }}>
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
            <input
              className="input"
              type="text"
              name="location_field"
              placeholder="City, state, zip code or country"
              onChange={e => onChangeLocation(e)}
            />
          </div>

          <div className="input input__radio">
            <input type="radio" name="location" id="london" onChange={e => onChangeLocation(e)} />
            <label htmlFor="london">London</label>
          </div>

          <div className="input input__radio">
            <input
              type="radio"
              name="location"
              id="amsterdam"
              onChange={e => onChangeLocation(e)}
            />
            <label htmlFor="amsterdam">Amsterdam</label>
          </div>

          <div className="input input__radio">
            <input type="radio" name="location" id="new+york" onChange={e => onChangeLocation(e)} />
            <label htmlFor="new+york">New York</label>
          </div>

          <div className="input input__radio">
            <input type="radio" name="location" id="berlin" onChange={e => onChangeLocation(e)} />
            <label htmlFor="berlin">Berlin</label>
          </div>
        </div>

        <div className={styles.home__wrapper__listing}>
          {jobs.length ? (
            jobs.map(job => {
              return <Job key={job.id} job={job} />
            })
          ) : (
            <h2>No jobs found.</h2>
          )}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await fetch('https://jobs.github.com/positions.json?page=1')
  const jobs = await data.json()

  return {
    props: { jobList: jobs }
  }
}

export default Index
