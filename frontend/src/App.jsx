import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import WelcomeChat from "./pages/WelcomeChat";
import Navbar from "./components/navbar/Navbar";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/welcome' element={<WelcomeChat/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
