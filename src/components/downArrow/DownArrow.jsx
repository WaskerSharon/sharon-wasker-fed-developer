import React from 'react';
import "./downArrow.scss";

export default function DownArrow() {
    return (
        <a  className="downArrow" href="#portfolio">
            <img src={process.env.PUBLIC_URL + "/assets/down.png"} alt="" />
        </a>
    );
};
