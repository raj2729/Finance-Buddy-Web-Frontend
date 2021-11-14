import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Admin from './components/Admin'
import AdminProfile from './components/AdminProfile'
import Agents from './components/Agents'
import ErrorPage from './components/ErrorPage'
import Login from './components/Login'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="" element={<Login />}></Route>
          <Route path="admin" element={<Admin />} exact></Route>
          <Route path="adminprofile" element={<AdminProfile />} exact></Route>
          <Route path="agents" element={<Agents />} exact></Route>
          <Route element={<ErrorPage />} exact></Route>
        </Routes>
      </Router>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" component={Login} exact></Route>
          <Route path="/admin" component={Admin} exact></Route>
          <Route path="/adminprofile" component={AdminProfile} exact></Route>
          <Route path="/agents" component={Agents} exact></Route>
          <Route component={ErrorPage} exact></Route>
        </Routes>

      </BrowserRouter> */}
    </>
  );
}

export default App;