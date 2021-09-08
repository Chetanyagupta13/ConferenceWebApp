import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default () => (
    <div style={{ width: "80%" }}>
        <div className="row">
            <div className="col-sm-7">
                <p class="list-group-item list-group-item-action active"
                    style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", marginTop: "10px" }}>
                    ICAAI 2021 Listener Registration Path
                </p>
            </div>
        </div>
        <div className="row">
            <p style={{ marginLeft: "10px", fontSize: "14px" }}>
            Neither full paper publication, nor abstract presentation, you can register as listener to attend the conference directly. 
            </p>
        </div>
        <div className="row">
            <div className="col-sm-7">
                <p class="list-group-item list-group-item-action active"
                    style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", marginTop: "10px" }}>
                    Registration Fee
                </p>
            </div>
        </div>
        <div className="row">
            <p style={{ marginLeft: "10px", fontSize: "14px" }}>
            <span style={{color:"orange"}}>Normal participants:</span> 320 USD<br/>
            <span style={{color:"blue"}}>Normal participants Online Listener:</span> 80 USD<br/>
            <span style={{color:"orange"}}>Student participants:</span> 280 USD<br/>
            <span style={{color:"blue"}}>Student participants Online Listener:</span> 50 USD<br/>
            <span style={{color:"orange"}}>Committee participants:</span> 280 USD<br/>
            <span style={{color:"blue"}}>Committee participants Online Listener:</span> 50 USD<br/>
            <span style={{color:"orange"}}>Group registration:</span> please mail icaai@sciei.org<br/>
            <span style={{color:"orange"}}>One day visit:</span> 100 USD<br/>
            </p>
        </div>
        <div className="row">
            <div className="col-sm-7">
                <p class="list-group-item list-group-item-action active"
                    style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", marginTop: "10px" }}>
                    To Register as Listener
                </p>
            </div>
        </div>
        <div className="row">
            <p style={{ marginLeft: "10px", fontSize: "14px" }}>
                <ul>
                    <li>Download <span style={{color:"blue"}}>Registration form here</span></li>
                    <li>Fill the form and <span style={{color:"orange"}}>make payment,</span></li>
                    <li>Send form to mail address: aaiep@nitsri.net</li>
                    <li>The conference secretary will feed you back with <span style={{color:"orange"}}>registration confirmation</span></li>
                    <li>For another payment methods (bank tranfer or paypal acoount), please mail: <span style={{color:"orange"}}>aaiep@nitsri.net</span></li>
                </ul>
            </p>
        </div>
        <div className="row">
            <div className="col-sm-7">
                <p class="list-group-item list-group-item-action active"
                    style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", marginTop: "10px" }}>
                    Registration Includes
                </p>
            </div>
        </div>
        <div className="row">
            <p style={{ marginLeft: "10px", fontSize: "14px" }}>
                <ul>
                    <li>Admission to all sessions</li>
                    <li>Certificate, Name tag, Conference bag, Souvenir</li>
                    <li>Lunches, coffee breaks and Dinner</li>
                    <li>Conference Schedule/Abstracts</li>
                </ul>
                Any questions, please mail: <span style={{color:"blue"}}>aaiep@nitsri.net</span>
            </p>
        </div>
        <div className="row">
            <div className="col-sm-7">
                <p class="list-group-item list-group-item-action active"
                    style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", marginTop: "10px" }}>
                    Refund/Cancellation Policy
                </p>
            </div>
        </div>
        <div className="row">
            <p style={{ marginLeft: "10px", fontSize: "14px" }}>
            If a registrant is unable to attend an event for any reason, they may substitute, by arrangement with the registrar, someone else of Co-authors or from the same institute/organization. Written requests for cancellations must be sent to Conference Secretary.
            </p>
            <table style={{ marginLeft: "20px", fontSize: "14px", border:"1px solid gery", marginBottom: "8px"}}>
                <thead style={{ border:"1px solid grey"}}>
                    <tr>
                        <td style={{ border:"1px solid grey"}}><b>Time</b></td>
                        <td ><b>How much will be charged</b></td>
                    </tr>
                </thead>
                <tbody style={{border:"1px solid grey"}}>
                    <tr>
                        <td style={{ border:"1px solid grey"}}>Three months before the conference</td>
                        <td style={{ border:"1px solid grey"}}>30 USD will be charged</td>
                    </tr>
                    <tr>
                        <td style={{ border:"1px solid grey"}}>Two months before the conference</td>
                        <td style={{ border:"1px solid grey"}}>30% of payment will be charged</td>
                    </tr>
                    <tr>
                        <td style={{ border:"1px solid grey"}}>One months before the conference</td>
                        <td style={{ border:"1px solid grey"}}>50% of payment will be charged</td>
                    </tr>
                    <tr>
                        <td style={{ border:"1px solid grey"}}>Less than one month before the conference</td>
                        <td style={{ border:"1px solid grey"}}>NO REFUND</td>
                    </tr>
                </tbody>
            </table>
            <p style={{ marginLeft: "px", fontSize: "14px" }}>
                <ul>
                    <li>Personal Reason</li>
                </ul>
                In the event that the conference cannot be attended due to "personal reasons", the conference committees will not bear any responsibility, refund or pay any compensation. Such as travel difficulties, visa issues, health issues, financial issues, etc.
            </p>
        </div>
    </div>
);