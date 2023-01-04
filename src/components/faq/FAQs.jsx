import React from "react";
import { FaQuestion } from 'react-icons/all'
import { faqs } from '../../data'
import SectionHead from "../section_head/SectionHead";
import FAQ from "./FAQ";

function FAQs() {
    return (
        <section className="faqs">
            <div className="container faqs__container">
                <SectionHead icon={<FaQuestion/>} title="FAQs"/>
                <div className="faqs__wrapper">
                    {
                        faqs.map(({id, question, answer}) => {
                            return (
                                <FAQ key={id} question={question} answer={answer}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default FAQs