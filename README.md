# Catch the Fake - React Game
A fun and educational card-swipe game where users must identify whether a message is Fraud or Safe. Built using React, Firebase Authentication, Firestore and Context API, with animations via Framer Motion.
Live Demo Link - https://catchthefake.web.app/

# Project Setup Instructions
The project was initiated using React with Vite for a fast and optimized development setup. After initializing the app, Firebase was integrated for authentication and Firestore was set up to handle leaderboard data.
Once the backend setup was complete, development began with building reusable components and adding custom CSS styling for each screen.
After development and testing, the project was built using the Vite build tool and finally deployed using Firebase Hosting.

# Overview of the application architecture.
src/
assets/                 # Icons, images, backgrounds
components/             # All game components and screens
GamePage.jsx            # Main game logic and swiping
GameOver.jsx            # Final score page
CorrectFeedback.jsx     # Tick feedback on correct swipe
WrongFeedback.jsx       # Cross feedback on wrong swipe
LeaderBoard.jsx         # High score screen
LoadingPage.jsx         # Initial loading animation
HomePage.jsx            # Landing/start page
Login.jsx               # Login form
Register.jsx            # Register form
Navbar.jsx              # Navigation bar
PrivateRoute.jsx        # Route guard for auth
ContextAPI.jsx          # Game & Auth state (using Context API)
styles/                 # CSS files for each component
data/                   # Mock data
utils/                  # firebaseUtils.js 
App.jsx                 # Main App component with routes
main.jsx                # React DOM entry point
