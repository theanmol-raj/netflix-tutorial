import { useState } from 'react';
import './App.css';
import HomeScreen from './Screen/HomeScreen';
import LoginScreen from './Screen/LoginScreen'


function App() {
  const [user , SetUSer] = useState(true)
  return (
    <div className="App">
      {user? <HomeScreen /> : <LoginScreen />}

    </div>
  );
}

export default App;
