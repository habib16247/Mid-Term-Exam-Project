import React, { useContext, useEffect, useState } from 'react';
import styles from './Jobs.module.css';
import { NavLink } from 'react-router-dom';
import { AuthProvider } from '../../ContextAPI/ContextProvider';
import axios from 'axios';
import JobComponent from '../../Components/JobComponent/JobComponent';

const Jobs = () => {

  const { reactHandler, jobs, fetchData, handleFavorite} = useContext(AuthProvider);


  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:9000/jobs/${id}`);
      console.log("DELETE Response:", response.data);
      fetchData()
    } catch (error) {
      console.error("Error deleting post: ", error);
    }
  };



  return (
    <>
    <div className={styles.aboutHero}>
          <h1 className={styles.directPath}><NavLink to="/" style={{color: "rgb(255, 147, 7)"}}>Home </NavLink> {" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}Jobs <br /><br /><br /><br />
          <NavLink to="/addjob" style={{color: "rgb(255, 147, 7)"}}>Add Jobs</NavLink>
          </h1>
          
      </div>
    <div className={styles.jobContainer}>
      {jobs.map((job) => (
        <JobComponent key={job.id} job={job} deleteHandler={deleteHandler} /*handleFavorite={handleFavorite}*//>
      ))}
    </div>
    </>
  );
};

export default Jobs;




// return (
//   <div className={styles.jobContainer}>
//     {jobs.map((job) => (
//       <div key={job.id} className={styles.jobContent}>
//         {/* ... [Other JSX] */}
//         {job.isReact ? (
//           <img
//             title="Loved"
//             onClick={() => reactHandler(job.id)}
//             className={styles.interactionIcon}
//             src="https://img.icons8.com/?size=160&id=115342"
//             alt=""
//           />
//         ) : (
//           <img
//             title="Favorite"
//             onClick={() => reactHandler(job.id)}
//             className={styles.interactionIcon}
//             src="https://img.icons8.com/?size=128&id=80322&format=png"
//             alt=""
//           />
//         )}
//         {/* ... [Other JSX] */}
//       </div>
//     ))}
//   </div>
// );
// };