import { useContext, useState } from "react";
import { motion } from "framer-motion";
import questions from "../data/questions";
import "../styles/GamePage.css";
import { store } from "../store/ContextAPI";
import red from "../assets/red.png";
import green from "../assets/green.png";
import star from "../assets/star.png";
import CorrectFeedback from "./CorrectFeedback";
import WrongFeedback from "./WrongFeedback";
import { useNavigate } from "react-router-dom";

const GamePage = () => {
  const navigate = useNavigate();
  const { current, score, handleSwipe, showFeedback, isCorrect } =
    useContext(store);

  const handleGameSwipe = (direction) => {
    handleSwipe(direction, () => navigate("/gameover"));
  };
  return (
    <div className="gamepage">
      <button className="top-score-button">
        <img src={star} alt="star" />
        <h1>{score}</h1>
      </button>
      <div className="red-image">
        <img src={red} height={130} width={380} alt="" />
      </div>
      <div className="game-container">
        <div className="card-stack left-stack">
          {questions
            .slice(0, current)
            .slice(-3)
            .reverse()
            .map((q, index) => (
              <motion.div
                key={q.id}
                className="card"
                style={{ zIndex: index + 1 }}
              >
                <div className="card-content whatsapp-style">{q.text}</div>
              </motion.div>
            ))}
        </div>

        {/* Center Card */}
        <div className="card-stack center-stack">
          {questions[current] && (
            <motion.div
              key={questions[current].id}
              className="card"
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.y < -100) {
                  handleGameSwipe("up");
                } else if (info.offset.y > 100) {
                  handleGameSwipe("down");
                }
              }}
              style={{ zIndex: 999 }}
            >
              <div className="card-content whatsapp-style">
                {questions[current].text}
              </div>
            </motion.div>
          )}
        </div>

        {/* Right Stack */}
        <div className="card-stack right-stack">
          {questions.slice(current + 1, current + 4).map((q, index) => (
            <motion.div
              key={q.id}
              className="card"
              style={{ zIndex: index + 1 }}
            >
              <div className="card-content whatsapp-style">{q.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="green-image">
        <img src={green} height={130} width={380} alt="" />
      </div>
      {showFeedback && (isCorrect ? <CorrectFeedback /> : <WrongFeedback />)}
    </div>
  );
};

export default GamePage;
