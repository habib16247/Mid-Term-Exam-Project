import { useLoaderData, useNavigate } from "react-router-dom";
import styles from "./DetailsJob.module.css"

const DetailsModal = () => {
    const navigate = useNavigate()
    const loadData = useLoaderData()
    const { id, salary, title, logo, companyName, position, description, requirements, qualifications } = loadData;

    return (
        <div className={styles.detailsContainer}>
            <div className={styles.detailsBody}>
            <div className={styles.content}>
            <div className={styles.detailsContent}>
            <div className={styles.logoContent}>
                <img className={styles.companyLogo} src={logo} alt={companyName} />
                <h2 className={styles.logoName}>{companyName}</h2>
            </div>
            <div className={styles.textContext}>
            <h2 className={styles.postName}>{title}</h2>
            <p className={styles.companyIntro}><strong className={styles.introName}>Company:</strong> {companyName}</p>
            <p className={styles.companyIntro}><strong className={styles.introName}>Position:</strong> {position}</p>
            <p className={styles.companyIntro}><strong className={styles.introName}>Description:</strong> {description}</p>
            <p className={styles.companyIntro}><strong className={styles.introName}>Salary:</strong> {salary}</p>
            <div>
                <h3>Requirements:</h3>
                <ul className={styles.lists}>
                    {requirements ? (
                        requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                        ))
                    ) : (
                        <li>No requirements specified</li>
                    )}
                </ul>
            </div>
            <div>
                <h3>Qualifications:</h3>
                <ul className={styles.lists}>
                    {qualifications ? (
                        qualifications.map((qual, index) => (
                            <li key={index}>{qual}</li>
                        ))
                    ) : (
                        <li>No qualifications specified</li>
                    )}
                </ul>
            </div>
            </div>
            </div>    
                <div className={styles.actionBtns}>
                <img
                  title="Loved"
                //   onClick={() => reactHandler(job.id)}
                  className={styles.interactionIcon}
                  src="https://img.icons8.com/?size=160&id=115342"
                  alt=""
                />
                <img
                  title="Favorite"
                //   onClick={() => reactHandler(job.id)}
                  className={styles.interactionIcon}
                  src="https://img.icons8.com/?size=128&id=80322&format=png"
                  alt=""
                />
              <img
                title="Edit"
                style={{borderRadius: "50%"}}
                className={styles.interactionIcon}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJZwnnK7m-cqwyPJhs_sWOuv6AFDc1AA2rN4T1oOKIwnxudK8szLHpGwSOe1ZbeKj6Yk&usqp=CAU"
                alt=""
              />
              <img
                title="Delete"
                className={styles.interactionIcon}
                src="https://icon-library.com/images/apply-icon-png/apply-icon-png-11.jpg"
                alt=""
              />
                </div>
            </div>            
            <div className={styles.navigateBtn}>
                <button className={styles.backBtn} onClick={() => navigate(-1)}>Go Back</button>
                <button className={styles.backBtn} onClick={() => navigate("/")}>Go Home</button>
            </div>
        </div>
        </div>
    )
}

export default DetailsModal



