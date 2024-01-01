import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { app } from "../FireBase/Firebase.config";
import Swal from 'sweetalert2';  // Import Swal correctly

export const AuthProvider = createContext(null);
const auth = getAuth(app);

const ContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) => {
        const user = res.user;
        console.log(user);

        Swal.fire({
          title: "Success!",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Cool",
        });

        updateProfile(auth.currentUser, {
          displayName: formData.username,  // Corrected the form data field
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
