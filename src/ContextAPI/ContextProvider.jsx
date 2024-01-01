import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { app } from "../FireBase/Firebase.config";
import Swal from 'sweetalert2';  // Import Swal correctly
// import { useNavigate } from "react-router-dom";

export const AuthProvider = createContext(null);
const auth = getAuth(app);

const ContextProvider = ({ children }) => {

    // const navigate = useNavigate();

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

    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(formData.password)) {
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
        //   .then(() => {
        //     navigate("/")
        //   })
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

  const authentication = { formData, handleChange, handleSubmit };
  return (
    <AuthProvider.Provider value={authentication}>
      {children}
    </AuthProvider.Provider>
  );
};

export default ContextProvider;
   