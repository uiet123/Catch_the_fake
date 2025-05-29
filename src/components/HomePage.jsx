import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className="home">
        <div className="home-content">
          <h1>CATCH THE FAKE</h1>
          <div className="home-content-p">
            <p>Beware of Fraud Messages!</p>
            <p>Spot the fraud and collect points.</p>
          </div>
          <Link to={"./login"}>
            <button className="home-content-login">Log in</button>
          </Link>
          <div className="login-content">
            <p>Don’t have log in?</p>
            <Link to={"./register"}>
              <p className="register">Register yourself</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
