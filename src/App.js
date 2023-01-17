import logo from "./logo.svg";
import "./App.css";
import RegisterUser from "./components/RegisterUser";
import Login from "./components/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RegisterUser />}></Route>
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
