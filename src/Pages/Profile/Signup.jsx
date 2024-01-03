import React, { useContext } from 'react'

import login from "./Sign.module.css"
import { AuthProvider } from '../../ContextAPI/ContextProvider'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
  const { formData, handleChange, handleSubmit, googleHandler, FBHandler} = useContext(AuthProvider)
  const navigate = useNavigate()
  const SignUpHandler = (media) => {
    media()
      .then((res) => {
        const user = res.user;
        console.log(user);
        return Swal.fire({
          title: "Success!",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch((error) => {
        console.error("Firebase error:", error);
        return Swal.fire({
          title: "Error!",
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };
  return (
    <div className={login.background}>
        <div className={login.loginContainer}>
    
      <h2 className={login.title}>Sign Up</h2>
      <form className={login.form} onSubmit={handleSubmit}>
        <div className={login.formGroup}>
          <label className={login.label}>Username:</label>
          <input
            className={login.input}
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={login.formGroup}>
          <label className={login.label}>Email:</label>
          <input
            className={login.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={login.formGroup}>
          <label className="label">Password:</label>
          <input
            className={login.input}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={login.formGroup}>
          <label className="label">Confirm Password:</label>
          <input
            className={login.input}
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button className={login.button} type="submit">
          Sign Up
        </button>

        <div className={login.authentication}>
          <a
            onClick={() => SignUpHandler(FBHandler)}
            className={login.link}
            href="#facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              ></path>
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              ></path>
            </svg>
          </a>
          <a
            onClick={() => SignUpHandler(googleHandler)}
            className={login.link}
            href="#facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 100 100"
            >
              <path
                fill="#78a0cf"
                d="M13 27A2 2 0 1 0 13 31A2 2 0 1 0 13 27Z"
              ></path>
              <path
                fill="#f1bc19"
                d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"
              ></path>
              <path
                fill="#cee1f4"
                d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"
              ></path>
              <path
                fill="#f1bc19"
                d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"
              ></path>
              <path
                fill="#78a0cf"
                d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"
              ></path>
              <path
                fill="#fbcd59"
                d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"
              ></path>
              <path
                fill="#78a0cf"
                d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"
              ></path>
              <path
                fill="#fff"
                d="M18.5 51A2.5 2.5 0 1 0 18.5 56A2.5 2.5 0 1 0 18.5 51Z"
              ></path>
              <path
                fill="#f1bc19"
                d="M21 66A1 1 0 1 0 21 68A1 1 0 1 0 21 66Z"
              ></path>
              <path
                fill="#fff"
                d="M80 33A1 1 0 1 0 80 35A1 1 0 1 0 80 33Z"
              ></path>
              <g>
                <path
                  fill="#ea5167"
                  d="M35.233,47.447C36.447,40.381,42.588,35,50,35c3.367,0,6.464,1.123,8.968,2.996l6.393-6.885 C61.178,27.684,55.83,25.625,50,25.625c-11.942,0-21.861,8.635-23.871,20.001L35.233,47.447z"
                ></path>
                <path
                  fill="#00a698"
                  d="M58.905,62.068C56.414,63.909,53.335,65,50,65c-7.842,0-14.268-6.02-14.934-13.689l-8.909,2.97 C28.23,65.569,38.113,74.125,50,74.125c6.261,0,11.968-2.374,16.27-6.27L58.905,62.068z"
                ></path>
                <path
                  fill="#48bed8"
                  d="M68.5,45.5h-4.189H50.5v9h13.811c-1.073,3.414-3.333,6.301-6.296,8.179l7.245,6.038 c5.483-4.446,8.99-11.233,8.99-18.842c0-1.495-0.142-2.955-0.401-4.375H68.5z"
                ></path>
                <path
                  fill="#fde751"
                  d="M35,50c0-2.183,0.477-4.252,1.316-6.123l-7.818-5.212c-1.752,3.353-2.748,7.164-2.748,11.21 c0,3.784,0.868,7.365,2.413,10.556L36,55C35.634,53.702,35,51.415,35,50z"
                ></path>
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M50,74.825c-13.757,0-24.95-11.192-24.95-24.95S36.243,24.925,50,24.925 c5.75,0,11.362,2.005,15.804,5.646l0.576,0.472l-7.327,7.892l-0.504-0.377C56.051,36.688,53.095,35.7,50,35.7 c-7.885,0-14.3,6.415-14.3,14.3S42.115,64.3,50,64.3c5.956,0,11.195-3.618,13.324-9.1L50,55.208l-0.008-10.184l24.433-0.008 l0.104,0.574c0.274,1.503,0.421,2.801,0.421,4.285C74.95,63.633,63.758,74.825,50,74.825z M50,26.325 c-12.985,0-23.55,10.564-23.55,23.55S37.015,73.425,50,73.425s23.55-10.564,23.55-23.55c0-1.211-0.105-2.228-0.3-3.458H51.192 L51.2,53.8h14.065l-0.286,0.91C62.914,61.283,56.894,65.7,50,65.7c-8.657,0-15.7-7.043-15.7-15.7S41.343,34.3,50,34.3 c3.19,0,6.245,0.955,8.875,2.768l5.458-5.878C60.238,28.048,55.178,26.325,50,26.325z"
                ></path>
              </g>
            </svg>
          </a>
          <a
            // onClick={() => SignUpHandler(TwitterSignIn)}
            className={login.link}
            href="#facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                fill="#03a9f4"
                d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
              ></path>
              <path
                fill="#fff"
                d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3 c-0.951,0.559-2.671,1.156-3.793,1.372C31.311,15.422,30.033,15,28.617,15C25.897,15,24,17.305,24,20v2c-4,0-7.9-3.047-10.327-6 c-0.427,0.721-0.667,1.565-0.667,2.457c0,1.819,1.671,3.665,2.994,4.543c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057 c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27c0.626,1.935,3.773,2.958,5.928,3c-1.686,1.307-4.692,2-7,2 c-0.399,0-0.615,0.022-1-0.023C14.178,33.357,17.22,34,20,34c9.057,0,14-6.918,14-13.37c0-0.212-0.007-0.922-0.018-1.13 C34.95,18.818,35.342,18.104,36,17.12"
              ></path>
            </svg>
          </a>
        </div>
      </form>
      <div className={login.backB}>
        <button className={login.btn} onClick={() => navigate(-1)}>
          Back
        </button>
        <span style={{ color: "red" }}>Or</span>
        <button className={login.btn} onClick={() => navigate("/")} >
          Go Home
        </button>
      </div>
    </div>
    </div>
  )
}

export default Signup