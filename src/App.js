
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/LogIn/Login/Login';
import LoginBanner from './components/LogIn/LoginBanner/LoginBanner';
import Register from './components/LogIn/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

          </Routes>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
