// Register.jsx
import React, { useState } from "react";
import "./reg.css";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [add, setAdd] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (!password) {
        throw new Error("Password field cannot be empty");
      }

      // Create user in Firebase Authentication
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = credential.user;

      // Send email verification
      await sendEmailVerification(user);

      // Save additional user data to Firestore
      await setDoc(doc(db, "Users", user.uid), {
        name: name,
        email: user.email,
        address: add,
        // You can add more fields as needed
      });

      // Display success message
      toast.success(
        "User Registered Successfully!! Please verify your email.",
        {
          position: "top-center",
        }
      );

      // Clear input fields
      setEmail("");
      setName("");
      setPassword("");
      setAdd("");
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="mini">
      <ToastContainer />
      <section className="container">
        <header>Registration Form</header>
        <form className="form" onSubmit={handleRegister}>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter full name"
              required
            />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              required
            />
          </div>
          <div className="input-box">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <button className="btn" type="submit">
            Register
          </button>
          <span className="already-registered">Already Registered --></span>
          <Link to="/login" className="Reg">
            Login Here
          </Link>
        </form>
      </section>
    </div>
  );
};

export default Register;
