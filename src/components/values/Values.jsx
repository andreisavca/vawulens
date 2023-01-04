import React from "react";
import Image from '../../images/values.jpg'
import { GiCutDiamond } from 'react-icons/all'
import { values } from '../../data'
import SectionHead from "../section_head/SectionHead";
import Card from "../card/Card";

function Values() {
    return (
        <section className="values">
            <div className="container values__container">
                <div className="values__left">
                    <div className="values__image">
                        <img src={Image} alt="Values"/>
                    </div>
                </div>
                <div className="values__right">
                    <SectionHead icon={<GiCutDiamond/>} title="Values"/>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="values__wrapper">
                        {
                            values.map(({id, icon, title, desc}) => {
                                return (
                                    <Card className="values__value" key={id}>
                                        <span>{icon}</span>
                                        <h4>{title}</h4>
                                        <small>{desc}</small>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values