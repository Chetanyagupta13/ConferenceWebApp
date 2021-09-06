import React from "react";
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export default () => (
    <div style={{ width: "80%" }}>
        <div className="row">
            <div className="col-sm-7">
                <p class="list-group-item list-group-item-action active"
                    style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", marginTop: "10px" }}>
                    November 20, 2021 | Saturday
                </p>
            </div>
        </div>
        <div className="row">
            <p style={{ marginLeft: "10px", fontSize: "16px" }}>
            <b>10:00-17:00</b> Participants Check-in and Materials Collection
            </p>
        </div>
        <div className="row">
            <div className="col-sm-7">
                <p class="list-group-item list-group-item-action active"
                    style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", marginTop: "10px" }}>
                    November 21, 2021 | Sunday | Morning
                </p>
            </div>
        </div>
        <div className="row">
            <p style={{ marginLeft: "10px", fontSize: "16px" }}>
            <b>09:00-9:05</b> Opening Remark
            </p>
            <p style={{ marginLeft: "10px", fontSize: "16px" }}>
            <b>09:05-09:50</b> Keynote I
            </p>
            <p style={{ marginLeft: "10px", fontSize: "16px" }}>
            <b>09:50-10:35</b> Keynote II
            </p>
            <p style={{ marginLeft: "10px", fontSize: "16px" }}>
            <b>10:35-11:00</b> Coffee Break and Group Photo
            </p>
            <p style={{ marginLeft: "10px", fontSize: "16px" }}>
            <b>11:00-11:40</b> Plenary I
            </p>
            <p style={{ marginLeft: "10px", fontSize: "16px" }}>
            <b>11:40-13:00</b> Lunch
            </p>
        </div>
        <div className="row">
            <div className="col-sm-7">
                <p class="list-group-item list-group-item-action active"
                    style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", marginTop: "10px" }}>
                    November 21, 2021 | Sunday | Afternoon
                </p>
            </div>
        </div>
        <div className="row">
            <p style={{ marginLeft: "10px", fontSize: "16px" }}>
                <b>13:00-15:00</b> Session 1-Algorithm Design and Soft Computing
                <div className="">
                    Session 2-Data Analysis and Calculation<br/>
                    Session 3-Intelligent Robots and Artificial Intelligence
                </div>
            </p>
            <p style={{ marginLeft: "10px", fontSize: "16px" }}>
            <b>15:00-15:30</b> Coffee Break and Poster Session
            </p>
            <p style={{ marginLeft: "10px", fontSize: "16px" }}>
                <b>16:00-17:30</b> Session 4-Modern Information Technology and Application
                <div className="">        
                    Session 5-Image Processing<br/>
                    Session 6-Computer Network and Information Communication
                </div>
            </p>
            <p style={{ marginLeft: "10px", fontSize: "16px" }}>
            <b>18:00-20:00</b> Dinner
            </p>
        </div>
        <div className="row">
            <div className="col-sm-7">
                <p class="list-group-item list-group-item-action active"
                    style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", marginTop: "10px" }}>
                    November 22, 2021 | Monday | Lab Visit
                </p>
            </div>
        </div>
        <div className="row">
            <p style={{ marginLeft: "10px", fontSize: "16px" }}>
            <b>10:00-12:00</b> Academic Visit (Pending)
            </p>
            <p style={{ marginLeft: "10px", fontSize: "16px" }}>
            <b>12:00-18:00</b> City Visit (Pending)
            </p>
        </div>
    </div>
);