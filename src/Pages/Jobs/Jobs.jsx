import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from "axios"
import styles from './Jobs.module.css';


const Jobs = () => {
  const [isReact, setIsReact] = useState(false)
  const [jobs, setJobs] = useState([]);

  const reactHandler = () => {
    setIsReact(!isReact)
  }

  const fetchData = async () => {
    try {
      const response = (await axios.get('http://localhost:9000/jobs')).data;
      setJobs(response);
    } catch (error) {
      Swal.fire({
        title: error.message,
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);  // Empty dependency array means this useEffect runs once when the component mounts

  return (
    <div className={styles.jobContainer}>
      {jobs.map(job => (
        <div key={job.id} className={styles.jobContent}>
          <div className={styles.icons}>
            <div className={styles.logoCompany}>
              <img src={job.logo} alt="" />
              <h2>{job.companyName}</h2>
            </div>
            <img title='Show More Details!' className={styles.details} src="https://img.icons8.com/?size=48&id=FfPV3jkJQwxU&format=png" alt="" />
          </div>
          <div className={styles.postText}>
            <div className={styles.texts}>
              <h2>{job.title}</h2>
              <p>{job.position}</p>
              <p>{job.description}</p>
            </div>
            <div className={styles.btns}>
            {isReact ? (
              <>
                <img title='Loved' onClick={() => reactHandler()} className={styles.interactionIcon} src="https://img.icons8.com/?size=160&id=115342" alt="" />
              </>
            ) : (
              <>
                <img title='Favorite' onClick={() => reactHandler()} className={styles.interactionIcon} src="https://img.icons8.com/?size=128&id=80322&format=png" alt="" />
              </>
            )}
              <img title='Edit' className={styles.interactionIcon}  src="https://img.icons8.com/?size=100&id=102714&format=png" alt="" />
              <img title='Delete' className={styles.interactionIcon} src="https://img.icons8.com/?size=100&id=8mDEXg7uTLVh&format=png" alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default Jobs;
