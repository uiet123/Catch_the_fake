import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/components/Login';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Register from './components/Register';
import GamePage from './components/GamePage';
import PrivateRoute from './components/PrivateRoute';
import GameOver from './components/GameOver';
import LeaderBoard from './components/LeaderBoard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gamepage" element={<PrivateRoute><GamePage /></PrivateRoute>} />
        <Route path="/gameover" element={<GameOver />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
