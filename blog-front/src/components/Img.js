import React from "react";
import cat from "../static/cat.png";

export default function Img() {
    return (
        <img
            style={{
                width: "10rem",
                position: "fixed",
                left: "85%",
                top: "78%",
            }}
            alt="cat"
            src={cat}
        ></img>
    ); 
}
