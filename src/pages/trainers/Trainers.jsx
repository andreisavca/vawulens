import React from 'react';
import './trainers.css'
import { trainers} from "../../data";
import HeaderImage from "../../images/header_bg_5.jpg"
import Header from "../../components/header/Header";
import Trainer from "../../components/trainer/Trainer";
import { FaFacebookF, FaLinkedinIn} from 'react-icons/all'
import { AiOutlineTwitter } from 'react-icons/all'
import {BsInstagram} from "react-icons/all";


function Trainers() {
    return (
        <>
            <Header title="Our Trainers" image={HeaderImage}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium aliquam aspernatur atque eius, eligendi explicabo molestiae porro quisquam totam voluptate!
            </Header>
            <section className="trainers">
                <div className="container trainers__container">
                    {
                        trainers.map(({id, image, name, job, socials}, index) => {
                            return (
                                <Trainer key={id} image={image} name={name} job={job} socials={[
                                    {icon: <BsInstagram/>, link: socials[0]},
                                    {icon: <AiOutlineTwitter/>, link: socials[1]},
                                    {icon: <FaFacebookF/>, link: socials[2]},
                                    {icon: <FaLinkedinIn/>, link: socials[3]}
                                ]}>
                                </Trainer>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}


export default Trainers;
