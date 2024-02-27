import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/navbar/Navbar';
import HomeChatPage from './pages/HomeChatPage';
import axios from 'axios';
import AuthContext from './context/AuthContext';
import { useContext } from 'react';


axios.defaults.withCredentials = true;

function App() {

  //const { isLoggedIn  } = AuthContext();
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
              <Route exact path="/" element={<HomePage/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/welcome" element={<HomeChatPage/>}/>
        {/* {
          isLoggedIn === false && (
            <>
              <Route exact path="/" element={<HomePage/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
            </>
          )          
        }
        {
          isLoggedIn === true && (
            <Route path="/welcome" element={<HomeChatPage/>}/>
          )
        } */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
