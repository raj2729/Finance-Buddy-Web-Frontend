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
        {/* <Navbar /> */}
        <div style={{width:'100%',height:"70px",backgroundColor:"#40A9FF"}}>

        </div>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/admin" component={Admin}></Route>
          <Route exact path="/customer/:id" component={AdminProfile}></Route>
          <Route exact path="/agents" component={Agents}></Route>
    </>
  );
}

export default App;