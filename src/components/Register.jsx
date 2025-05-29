import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      await updateProfile(userCredential.user, {
        displayName: form.name,
      });
      navigate("/gamepage");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="register-page">
      <div className="register-form">
        <form onSubmit={handleRegister}>
          <h2 className="form-title">Register yourself</h2>

          <div className="single-input">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              placeholder="Enter your name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="double-input-group">
            <div className="input-group">
              <label htmlFor="email">Email ID</label>
              <input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone No.</label>
              <input
                id="phone"
                placeholder="Enter your phone number"
                type="tel"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="double-input-group">
            <div className="input-group">
              <label htmlFor="password">Enter Password</label>
              <input
                id="password"
                placeholder="***********"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                id="confirmPassword"
                placeholder="*************"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="continue-register-button">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
