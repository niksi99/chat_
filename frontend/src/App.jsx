import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import WelcomeChat from "./pages/WelcomeChat";
import Navbar from "./components/navbar/Navbar";
import axios from "axios";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";

axios.defaults.withCredentials = true;

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
        <Router>
          <Navbar/>
          <Routes>
           <Route exact path='/' element={<HomePage/>}></Route>
            {
              isLoggedIn === false && (
                <>
                  <Route path='/register' element={<Register/>}></Route>
                  <Route path='/login' element={<Login/>}></Route>
                </>
              )
            }
            {
              isLoggedIn === true && (
                  <Route path='/welcome' element={<WelcomeChat/>}></Route>
              )
            }
          </Routes>
        </Router>
    </div>
  )
}

export default App
