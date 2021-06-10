
import { useEffect, useState } from "react";
import './works.scss'
import { worksData } from "../../data/worksData";


export default function Works() {

    const [ data, setData ] = useState([]);
    const [ currentSlide, setCurrentSlide ] = useState(0);

    useEffect (() => {
        setData(worksData);
    },[]);

    const handleClick = (way) =>  {
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0 ) ;
    }

    return (
        <div className="works" id="works">
            <div 
                className="slider" 
                style={ {transform: `translateX(-${currentSlide * 100}vw)`}}
            >
                { data.map( (wData) => (
                    <div className="container">
                        <div className="item" id={wData.id}>
                            <div className="left" >
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={wData.icon} alt="" />
                                    </div>
                                    <h2>{wData.title}</h2>
                                    <p>{wData.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={wData.img} alt="" />
                            </div>
                        </div>
                    </div>
                  ))
                }
            </div>
            <img 
                src={process.env.PUBLIC_URL + "/assets/arrow.png"} 
                className="arrow left" alt="" 
                onClick={() => handleClick("left")} 
            />
            <img 
                src={process.env.PUBLIC_URL + "/assets/arrow.png"}
                className="arrow right" alt=""
                onClick={() => handleClick("right")}
            />
        </div>
    )
}
