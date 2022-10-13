import React from "react";
import "./Envelope.css";
import Image from "../src/img/stamp.png"

function Envelope(props) {
    return (<div className="container">
                <div className="flex-top">
                  <div>
                    {" "}
                    {props.toPerson}
                    {props.addressTo}
                  </div>
                  <div className="img-border">
                    <img src={Image} alt="" />
                  </div>
                </div>
                <div className="flex-center">
                  <div>
                    {" "}
                    {props.fromPerson}
                    {props.addressFrom}
                  </div>
                </div>
            </div>)
    }

export default Envelope;