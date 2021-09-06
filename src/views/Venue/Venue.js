import React from "react";
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export default () => (
    <div style={{ width: "80%" }}>
        <div className="row">
            <div className="col-sm-7">
                <p class="list-group-item list-group-item-action active"
                    style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", marginTop: "10px" }}>
                    Venue
                </p>
            </div>
        </div>
        <div className="row">
            <p style={{ marginLeft: "10px", fontSize: "16px", color:"red" }}>
            Due to the outbreaks and continuing impacts of the COVID-19 recently, considering the safety and well-being of participants, AAIEP organizing committee decide to held the conference VIRTUALLY.  We are sorry for the inconveniences caused. Your supports and collaborations are greatly appreciated.
            </p>
        </div>
    </div>
);