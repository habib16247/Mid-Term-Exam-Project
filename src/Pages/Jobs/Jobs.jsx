import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import styles from './Jobs.module.css';
import { NavLink } from 'react-router-dom';
import DetailsModal from './DetailsModal';
import { AuthProvider } from '../../ContextAPI/ContextProvider';

const Jobs = () => {
  const [isReact, setIsReact] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [isFavorite, setIsFavorite] = useState()


  const {reactHandler, } = useContext(AuthProvider)

  const deleteHandler = (id) => {
    const deleteFilter = jobs.filter((item) => item.id !== id);
    setJobs(deleteFilter);
  };

  const reactHandler = (id) => {
    setJobs((prevJobs) => {
      return prevJobs.map((job) => {
        if (job.id === id) {
          return {
            ...job,
            isReact: !job.isReact, // Toggle the isReact property for the specific job
          };
        }
        return job;
      });
    });
  };

  const fetchData = async () => {
    try {
      const response = (await axios.get('http://localhost:9000/jobs')).data;
      setJobs(response);
    } catch (error) {
      Swal.fire({
        title: error.message,
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    }
  };




  // if(isReact) {
  //   setIsFavorite(jobs)
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []); // Empty dependency array means this useEffect runs once when the component mounts

  return (
    <div className={styles.jobContainer}>
      {jobs.map((job) => (
        <div key={job.id} className={styles.jobContent}>
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
                  onClick={() => reactHandler(job.id)}
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
                className={styles.interactionIcon}
                src="https://img.icons8.com/?size=100&id=8mDEXg7uTLVh&format=png"
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
