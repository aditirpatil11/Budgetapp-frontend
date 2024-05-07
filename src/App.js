import './App.css';
import NotificationBar from './components/NotificationBar/NotificationBar';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import HomePage from './components/HomePage/HomePage';
import Dashboard from './components/Dashboard/Dashboard'; 

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} /> {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
