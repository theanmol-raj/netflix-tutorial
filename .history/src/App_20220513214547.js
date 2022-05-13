import { useState } from 'react';
import './App.css';
import HomeScreen from './Screen/HomeScreen';
import LoginScreen from './Screen/LoginScreen'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [user , SetUSer] = useState(false)
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={user ?<HomeScreen /> : <div className=' flex h-screen w-screen items-center justify-center text-[7rem] font-black'> 404</div>} />
      <Route path="/Login" element={user ? <div><Link to={'/'}>Homescreen</Link></div> : <LoginScreen S={SetUSer} />} />
      </Routes>

    </div>
  );
}

export default App;
