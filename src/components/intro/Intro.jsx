import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from "react";

import DownArrow from "../downArrow/DownArrow";


export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: [ "Senior CSS Developer", "Junior ReactJS Developer" ]
        })
    }, []);

    return (
        <div className="intro" id="intro">

            <div className="left">
                <div className="imgContainer">
                    <img src={process.env.PUBLIC_URL + "/assets/my-pic.png"} alt="" />
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Sharon Wasker</h1>
                    <h3>I am a <span ref={textRef}></span></h3>
                </div>
            </div>
                <DownArrow />
            
        </div>
    )
}
