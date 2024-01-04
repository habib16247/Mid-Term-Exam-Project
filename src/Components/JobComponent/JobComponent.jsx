import React from 'react'
import styles from "../../Pages/Jobs/Jobs.module.css"
import { NavLink } from 'react-router-dom'

const JobComponent = ({job, deleteHandler, handleFavorite}) => {

  return (
    // <NavLink
    // to={`/details/${job.id}`}>
      <div>
        <div className={styles.jobContent}>
          <div className={styles.icons}>
            <div className={styles.logoCompany}>
              <img src={job.logo} alt="" />
              <h2>{job.companyName}</h2>
            </div>
            <NavLink
              to={`/details/${job.id}`}
              onClick={() => setSelectedJobId(job.id)}
            >
              <img
                title="Show More Details!"
                key={job.id}
                className={styles.details}
                src="https://img.icons8.com/?size=48&id=FfPV3jkJQwxU&format=png"
                alt=""
              />
            </NavLink>
          </div>
          <div className={styles.postText}>
            <div className={styles.texts}>
              <h2>{job.title}</h2>
              <p  className={styles.jobIntroInfo}>{job.position}</p>
              <p className={styles.jobIntroInfo}>{job.description}</p>
              <p className={styles.jobIntroInfo}>Salary: {job.salary}</p>
            </div>
            <div className={styles.btns}>
            {job.isReact ? (
          <img
            title="Loved"
            onClick={() => reactHandler(job.id)}
            className={styles.interactionIcon}
            src="https://img.icons8.com/?size=160&id=115342"
            alt=""
          />
            ) : (
              <img
                title="Favorite"
                // onClick={() => handleFavorite(job)}
                className={styles.interactionIcon}
                src="https://img.icons8.com/?size=128&id=80322&format=png"
                alt=""
              />
            )}
              <img
                title="Edit"
                className={styles.interactionIcon}
                src="https://img.icons8.com/?size=100&id=102714&format=png"
                alt=""
              />
              <img
                title="Delete"
                onClick={() => deleteHandler(job.id)}
                className={styles.interactionIcon}
                src="https://img.icons8.com/?size=100&id=8mDEXg7uTLVh&format=png"
                alt=""
              />
            </div>
          </div>
        </div>
    </div>
    // </NavLink>
  )
}

export default JobComponent