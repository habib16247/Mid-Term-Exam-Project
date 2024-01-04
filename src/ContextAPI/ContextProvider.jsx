import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, updateProfile } from 'firebase/auth';
import { app } from "../FireBase/Firebase.config";
import Swal from 'sweetalert2';  
import axios from 'axios';
import { toast } from 'react-toastify';

export const AuthProvider = createContext(null);
const auth = getAuth(app);

const ContextProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [deleteCount, setDeleteCount] = useState(0)
    const [isReact, setIsReact] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [user, setUser] = useState({})

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value, password, confirmPassword } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if(formData.username === "" || formData.email === "" || formData.password === "" || formData.confirmPassword === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "please fill the form",
          });
          return;
    }

    if (/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(formData.password)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password must be at least 8 characters, one uppercase letter, one lowercase letter, and one number",
        });
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
        return;
      }

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        updateProfile(auth.currentUser, {
            displayName: formData.username,
          })
          .then(() => {
            navigate("/")
          })
        Swal.fire({
          title: "Success!",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,  // Display error message
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };
  
  const reactHandler = (id) => {
    setJobs((prevJobs) => {
      return prevJobs.map((job) => {
        if (job.id === id) {
          return {
            ...job,
            isReact: !job.isReact,
          };
        }
        return job;
      });
    });
  };
  

  // const deleteHandler = (id) => {
  //   const deleteFilter = jobs.filter((item) => item.id !== id);
  //   setJobs(deleteFilter);
  // };

  

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

  useEffect(() => {
    fetchData();
  }, []); 


  if (isReact) {
    setIsFavorite(jobs)
  } else {
    console.log("there is no favorite?")
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    });
  }, [user])


const providerA = new GoogleAuthProvider();
const providerB = new FacebookAuthProvider();
const providerC = new TwitterAuthProvider();
const providerD = new GithubAuthProvider();

const googleHandler = () => {
  signInWithPopup(auth, providerA)
}
const FBHandler = () => {
  signInWithPopup(auth, providerB)
}
const TwitterHandler = () => {
  signInWithPopup(auth, providerC)
}
const GithubHandler = () => {
  signInWithPopup(auth, providerD)
}


// const [isFavorite, setIsFavorite] = useState(job.istrue || false);

//   const handleFavorite = (job) => {
//     const status = !isFavorite;

//     axios
//       .put(`http://localhost:9000/jobs/${job.id}`, {
//         ...job,
//         istrue: status,
//       })
//       .then((res) => {
//         setIsFavorite(status);
//         status ? toast.success("Added to favorites successfully.") : toast.warn("Removed from favorites.");
//       })
//       .catch((error) => toast.error(error.message));
//   };



  // console.log(isFavorite)
  const authentication = { deleteCount, setDeleteCount, /*isFavorite,*/ formData, handleChange, handleSubmit, count, setCount, reactHandler, jobs, setJobs, fetchData, googleHandler, FBHandler, TwitterHandler, GithubHandler, /*handleFavorite*/ };

  return (
    <AuthProvider.Provider value={authentication}>
      {children}
    </AuthProvider.Provider>
  );
};

export default ContextProvider;
   