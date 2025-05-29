import React, { useContext, useEffect, useState } from "react";
import { getLeaderboardData } from "../utils/firebaseUtils";
import { IoMdShare } from "react-icons/io";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { store } from "../store/ContextAPI";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import "../styles/LeaderBoard.css";

const LeaderBoard = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { resetGame } = useContext(store);
  const navigate = useNavigate();

  const leaderboardRef = useRef(null);

  const handleShare = async () => {
    if (!leaderboardRef.current) return;

    const canvas = await html2canvas(leaderboardRef.current);
    const dataUrl = canvas.toDataURL("image/png");

    const blob = await (await fetch(dataUrl)).blob();
    const filesArray = [
      new File([blob], "leaderboard.png", {
        type: "image/png",
        lastModified: new Date().getTime(),
      }),
    ];

    const shareData = {
      files: filesArray,
      title: "My Catch the Fake Score",
      text: "Check out my leaderboard result!",
    };

    if (navigator.canShare && navigator.canShare({ files: filesArray })) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        alert("Sharing failed: " + err.message);
      }
    } else {
      // Fallback: Download the image
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "leaderboard.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      alert("Sharing not supported on this device. Image downloaded.");
    }
  };

  useEffect(() => {
    const fetchLeaders = async () => {
      const data = await getLeaderboardData();
      setLeaders(data);
      setLoading(false);
    };
    fetchLeaders();
  }, []);

  if (loading)
    return (
      <div className="leaderboard-loading">
        <LoadingPage />
      </div>
    );

  const handleClick = () => {
    resetGame();
    navigate("/gamepage");
  };

  return (
    <div
      className="leaderboard-container"
      ref={leaderboardRef}
      id="leaderboard"
    >
      <div className="leaderboard-box">
        <h1 className="leaderboard-title">LEADERBOARD</h1>
        {leaders.map((player, index) => (
          <div
            key={player.uid}
            className={`leaderboard-row ${index === 9 ? "highlighted" : ""}`}
          >
            <div className="rank">{index + 1}</div>
            <div className="avatar">
              {player.name?.[0]?.toUpperCase() || "?"}
            </div>
            <div className="player-info">
              <div className="player-name">{player.name}</div>
            </div>
            <div className="player-score">
              <strong>{player.score}</strong> points
            </div>
          </div>
        ))}
      </div>
      <div className="button-group">
        <div className="share-icon">
          <IoMdShare />
        </div>
        <button className="share-button" onClick={handleShare}>
          {" "}
          Share
        </button>
        <button onClick={handleClick} className="play-again-button">
          Play Again
        </button>
      </div>
    </div>
  );
};

export default LeaderBoard;
