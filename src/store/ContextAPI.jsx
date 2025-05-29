// src/context/ContextAPI.js
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import questions from "../data/questions";
export const store = createContext();

const ContextAPI = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const resetGame = () => {
    setCurrent(0);
    setScore(0);
  };

  const handleSwipe = (direction, onGameOver) => {
    const userAnswer = direction === "up" ? "fraud" : "safe";
    const actualAnswer = questions[current].answer;

    const correct = userAnswer === actualAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    setTimeout(() => {
      if (current + 1 >= questions.length) {
        onGameOver();
      } else {
        handleAnswer(userAnswer);
        setShowFeedback(false);
      }
    }, 2000);
  };

  const handleAnswer = (userAnswer) => {
    const isCorrect = questions[current].answer === userAnswer;
    if (isCorrect) setScore((prev) => prev + 5);
    setCurrent((prev) => (prev + 1 < questions.length ? prev + 1 : prev));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <store.Provider
      value={{
        user,
        loading,
        current,
        setCurrent,
        score,
        handleAnswer,
        handleSwipe,
        showFeedback,
        isCorrect,
        resetGame,
      }}
    >
      {children}
    </store.Provider>
  );
};

export default ContextAPI;
