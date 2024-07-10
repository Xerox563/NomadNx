import React, { useState } from "react";
import "./log.css";
import { auth } from "./firebase";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (!user.emailVerified) {
        throw new Error("Email not verified. Please verify your email.");
      }

      localStorage.setItem("authToken", userCredential.accessToken);

      await sendTokenToBackend(userCredential.accessToken);

      window.location.href = "/";

      toast.success("User Logged in successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.error("Error logging in:", error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  const sendTokenToBackend = async (token) => {
    try {
      const response = await fetch("http://localhost:3001/tokens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error("Failed to send token to backend.");
      } else {
        toast.success("Token Sent Successfully To the Backened !!", {
          position: "bottom-center",
        });
      }
    } catch (error) {
      console.error("Error sending token to backend:", error.message);
    }
  };

  return (
    <div className="mini">
      <ToastContainer />
      <div className="wrapper">
        <div className="title">Login Form</div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="field">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="field gaper ">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            Not a member? <Link to="/register">Register Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
