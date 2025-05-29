import { db } from "../firebase";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";

export const saveScoreToFirestore = async (uid, name, email, score) => {
  try {
    await setDoc(doc(db, "leaderboard", uid), {
      name: name || "Anonymous",
      email,
      score,
    });
  } catch (error) {
    console.error("Error saving score:", error);
  }
};

export const getLeaderboardData = async () => {
  try {
    const snapshot = await getDocs(collection(db, "leaderboard"));
    let data = [];
    snapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data.sort((a, b) => b.score - a.score); 
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return [];
  }
};
