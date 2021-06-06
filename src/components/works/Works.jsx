import './works.scss'

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={process.env.PUBLIC_URL + "/assets/mobile.png"} alt="" />
                                </div>
                                <h2>title</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                   illo corporis voluptas sed fuga, ea, laboriosam adipisci iure!
                                   </p>
                            </div>
                        </div>
                        <div className="right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
