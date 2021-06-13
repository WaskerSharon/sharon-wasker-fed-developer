
import { useEffect, useState } from "react";
import { testimonialData } from "../../data/testimonialData";
import './testimonials.scss'

export default function Testimonials() {

    const [ data, setData ] = useState([]);
    
    useEffect (() => {
        setData(testimonialData);
    }, []);

    return (
        <div className="testimonials" id="testimonials">
            <h2>Testimonials</h2>
            <div className="container">
                { data.map ((d) => (
                    <div className={ d.featured ? "card featured" : "card"  }>
                        <div className="top">
                            <img src={process.env.PUBLIC_URL + "/assets/right-arrow.png"} className="left" alt="" />
                            <img
                                className="user"
                                src={ d.img }
                                alt=""
                                 />
                            <img src={d.icon} className="right" alt="" />
                        </div>
                        <div className="center">
                            <p>{d.desc}.</p>
                            </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                  ))
                }
            </div>
            
        </div>
    )
}
