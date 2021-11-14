import React, { useState } from "react";
import { render } from "react-dom";
// import Maps fro./MapViewMap";
// import MapView from "./MapView";

import profilepic from '../img/profilepic.jpg'
const AdminProfile = () => {
    // const [markerPosition, setMarkerPosition] = useState({
    //     lat: 49.8419,
    //     lng: 24.0315
    // });
    // const { lat, lng } = markerPosition;

    // function moveMarker() {
    //     setMarkerPosition({
    //         lat: lat + 0.0001,
    //         lng: lng + 0.0001
    //     });
    // }

    return (
        <div>
            <div style={{ margin: "auto" }}>
                <img src={profilepic} alt='profile-pic' style={{ borderRadius: "100%", width: "170px", display: "block", marginLeft: "auto", marginRight: "auto" }} />
                <h1 style={{ textAlign: "center" }}>Ashok Mehta</h1>
                <div style={{ backgroundColor: "#accafa" }}><h4 style={{ color: 'red', textAlign: "center", padding: "20px" }}>Collection status : Pending</h4></div>
            </div>
            <div style={{ marginLeft: "100px" }}>
                <h5><strong>Customer Id</strong>: AZ1256</h5>
                <h5><strong>Mobile No</strong>: 1929439596</h5>
                <h5><strong>Email Id</strong>: ashokmehta@gmail.com</h5>
                <h5><strong>Address</strong>:</h5>
                <br />
                <div style={{ width: "70%", height: "500px" }}>
                    {/* <MapView /> */}
                    {/* <a href="https://goo.gl/maps/LodTVdjgS8PFAaW59" target="_blank">
                        <div id="map-tile"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.2074954972127!2d72.86094961420038!3d19.273340786974988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b05754f319d5%3A0xb6ba9b4f80f984b4!2sParivar!5e0!3m2!1sen!2sin!4v1590953742777!5m2!1sen!2sin" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" ></iframe><span>location</span></div>
                    </a> */}
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
