import React from "react";
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import './contact.css'
import Header from "../../components/header/Header";


function Contact() {
    return (
        <>
            <Header title="Get In Touch" image={HeaderImage}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam consequatur cupiditate
                ea earum eius error exercitationem iste maxime modi nam odit pariatur, praesentium quibusdam quisquam rerum unde velit voluptate!
            </Header>
            <section className="contact">
                <div className="container contact__container">
                    <div className="contact__wrapper">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact