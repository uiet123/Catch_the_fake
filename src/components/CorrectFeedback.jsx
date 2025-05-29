import { useContext } from "react";
import { store } from "../store/ContextAPI";
import questions from "../data/questions";
import safe_msg from "../assets/safe_msg.png";
import "../styles/CorrectFeedback.css";

const CorrectFeedback = () => {
  const { current } = useContext(store);
  return (
    <div className="feedback-wrapper-green">
      <div className="message-card-green">
        {questions[current].text}
        <img className="safe-msg-icon" src={safe_msg} alt="safe tick" />
      </div>
    </div>
  );
};

export default CorrectFeedback;
