import { useContext } from "react";
import { store } from "../store/ContextAPI";
import questions from "../data/questions";
import fraud_msg from "../assets/fraud_msg.png";
import "../styles/WrongFeedback.css";

const WrongFeedback = () => {
  const { current } = useContext(store);
  return (
    <div className="feedback-wrapper-red">
      <div className="message-card-red">
        {questions[current].text}
        <img className="fraud-msg-icon" src={fraud_msg} alt="fraud_msg" />
      </div>
    </div>
  );
};

export default WrongFeedback;
