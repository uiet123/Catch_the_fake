import "../styles/Login.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
    const [seePassword, setSeePassword] = useState(false);
    const [form, setForm] = useState({
    email: "",
    password: ""
  });

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/gamepage");
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <h2 className="form-title">Log in</h2>
          <div className="input-groups">
          <div className="input-group">
            <label htmlFor="email">Email ID</label>
            <input
              id="email"
              placeholder="Enter your email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              placeholder="Enter you password"
              type={seePassword ? "text" : "password" }
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              
              
            />
               <span
      className="eye-icon"
      onClick={() => setSeePassword(!seePassword)}
    >
      {seePassword ? <FaEye /> : <FaEyeSlash />}
    </span>
          </div>
          <Link to="/register" className="forgot-password">Forgot your password?</Link>
          </div>
          
          <button type="submit" className="next-button">Next</button>
        </form>
      </div>
    </div>
  );
};

export default Login;