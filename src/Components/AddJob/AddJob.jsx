import React, { useState } from 'react';
import styles from './AddJob.module.css'; // Import the module CSS
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        id: 0,
        title: '',
        salary: '',
        logo: '',
        companyName: '',
        position: '',
        description: '',
        requirements: [],
        qualifications: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleArrayChange = (e, arrayName) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [arrayName]: value.split(',').map(item => item.trim())
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to backend)
        console.log(formData);
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
            <h2>Add Job</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles['form-group']}>
                    <label className={styles.infoName} htmlFor="title">Title:</label>
                    <input
                        type="text"
                        className={styles.jobInput}
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="salary">Salary:</label>
                    <input
                        type="text"
                        className={styles.jobInput}
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="logo">Logo:</label>
                    <input
                        type="text"
                        className={styles.jobInput}
                        name="logo"
                        value={formData.logo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="companyName">Company Name:</label>
                    <input
                        type="text"
                        className={styles.jobInput}
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="position">Position:</label>
                    <input
                        type="text"
                        className={styles.jobInput}
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        className={styles.jobInput}
                        name="description"
                        rows="4"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="requirements">Requirements (comma-separated):</label>
                    <input
                        type="text"
                        className={styles.jobInput}
                        name="requirements"
                        onChange={(e) => handleArrayChange(e, 'requirements')}
                        required
                    />
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="qualifications">Qualifications (comma-separated):</label>
                    <input
                        type="text"
                        className={styles.jobInput}
                        name="qualifications"
                        onChange={(e) => handleArrayChange(e, 'qualifications')}
                        required
                    />
                </div>
                <button className={styles.submit} type="submit">Submit</button>
                <div className={styles.btnsBack}>
                    <button onClick={() => navigate(-1)}>
                        Go Back
                    </button>
                    <button  onClick={() => navigate("/")}>
                        Go Home
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default AddJob;
