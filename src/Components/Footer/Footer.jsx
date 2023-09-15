import React from "react";
import "./footer.css"
import video2 from '../../assets/video2.mp4'
import {FiSend} from "react-icons/fi";
import {MdOutlineTravelExplore} from "react-icons/md";
import {AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from "react-icons/ai";
import {FaTripadvisor} from "react-icons/fa";


const Footer = () => {
    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder="Enter Email Address" />
                        <button className="btn flex" type="submit">
                            SEND <FiSend className='icon'/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon"/> Travel.
                            </a>
                        </div>

                        <div className="footerParagraph">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Ullam inventore eos
                            fuga hic cum voluptatem minima, tempore
                            non odio provident nobis ipsam at,
                            doloremque sed cupiditate ipsum in,
                            atque soluta?
                        </div>

                        <div className="footerSocials">
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <FaTripadvisor className="icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;