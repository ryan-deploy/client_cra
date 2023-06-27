import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import User from "./pages/user/user";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">home</Link> | <Link to="/login">login</Link> |{" "}
        <Link to="/user">user</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
