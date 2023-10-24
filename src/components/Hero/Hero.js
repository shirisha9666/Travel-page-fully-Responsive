import React from "react";
import "./hero.css";
import Video from "../../videos/video-1.mp4"



const Hero = () => {
    return (
        <>
            <div className="hero_section">

                <video src={Video} autoPlay loop muted />


                <h1>Adventure Awaits</h1>
                <p>what are you waiting for ?</p>
                <div className="btn_menu">
                    <button className="btn_first"
                    >GET STARTED</button>
                    <button className="btn_secound"

                    >WATCH TRAILER <i class="fa-regular fa-circle-play"></i></button>
                </div>
            </div>
            {/* <Cards /> */}
        </>
    )
}

export default Hero