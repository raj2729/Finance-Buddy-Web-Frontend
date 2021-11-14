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
     
        <Navbar />
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/admin" component={Admin}></Route>
          <Route exact path="/adminprofile" component={AdminProfile}></Route>
          <Route exact path="/agents" component={Agents}></Route>
    </>
  );
}

export default App;