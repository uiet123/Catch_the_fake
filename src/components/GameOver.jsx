import React, { useContext } from "react";
import { store } from "../store/ContextAPI";
import star from "../assets/star.png";
import { saveScoreToFirestore } from "../utils/firebaseUtils";
import bg_shadow from "../assets/bg_shadow.png";
import "../styles/GameOver.css";
import { useNavigate } from "react-router-dom";

const GameOver = () => {
  const navigate = useNavigate();
  const { score, user } = useContext(store);
  const handleContinue = async () => {
    await saveScoreToFirestore(user.uid, user.displayName, user.email, score);
    navigate("/leaderboard");
  };
  return (
    <div className="game-over-container">
      <img className="bg-shadow" src={bg_shadow} alt="bg_shadow" />
      <div className="game-over-box">
        <h1>
          GAME <br />
          OVER
        </h1>
        <p>You have scored</p>
        <div className="score-display">
          <img src={star} alt="star" />
          <h2>
            {score} <span>Points</span>
          </h2>
        </div>
      </div>
      <button onClick={handleContinue} className="continue-gameover-button">
        Continue
      </button>
    </div>
  );
};

export default GameOver;
