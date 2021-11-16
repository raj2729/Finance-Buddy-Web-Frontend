import React, { useState , useEffect} from "react";
import { render } from "react-dom";
import axios from "axios";
import { Spinner } from "react-bootstrap";
// import Maps fro./MapViewMap";
// import MapView from "./MapView";

import profilepic from '../img/profile.png'
const AdminProfile = (props) => {
    useEffect(()=>{
        getData()
    },[]);
    const [obj,setObj]=useState({});
    const [loading,setLoading]=useState(true);
    const getData=async ()=>{
        try {
            const resp=await axios.get(`https://finance-buddy-api.herokuapp.com/users/getUserDetailsFromAgent/${props.match.params.id}`,{ headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem('token'))}`} })
            setObj(resp.data.data);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log(e);
        }
        
    }
    return (
        loading==true?<center><Spinner animation="border" /></center>:
        <div>
            <div style={{ margin: "auto" }}>
                <img src={profilepic} alt='profile-pic' style={{ borderRadius: "50%", width: "170px", display: "block", marginLeft: "auto", marginRight: "auto" }} />
                <h1 style={{ textAlign: "center" }}>{obj.name}</h1>
                <div style={{ backgroundColor: "#accafa" }}><h4 style={{ color: 'red', textAlign: "center", padding: "20px" }}>Collection status : Pending</h4></div>
            </div>
            <div style={{ marginLeft: "100px" }}>
                <h5><strong>Customer Id</strong>: {obj._id}</h5>
                <h5><strong>Mobile No</strong>: {obj.mobileNumber}</h5>
                <h5><strong>Email Id</strong>: {obj.customerEmailId}</h5>
                <h5><strong>Address</strong>:</h5>
                <br />
                <div style={{ width: "70%", height: "500px" }}>
                    <div style={{ margin: "5rem", display: "inline", width: "auto", height: "auto" }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.4523260589867!2d72.86281901490716!3d19.21910885245276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b732f361dc25%3A0xdb427764a8b4c9d9!2sBlue%20Rose%20Ind.%20P.C.S%20Ltd!5e0!3m2!1sen!2sin!4v1625567379906!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" title="googlemap"></iframe>
                        <h6 style={{ width: "600", margin: "1rem 12rem", color: "white" }}>Now Open in Google maps</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProfile