import React from "react";
import './home.css'
import MainHeader from "../../components/main_header/MainHeader";
import Programs from "../../components/programs/Programs";
import Values from "../../components/values/Values";
import FAQs from "../../components/faq/FAQs";
import Testimonials from "../../components/testimonials/Testimonials";

function Home() {
    return (
        <>
            <MainHeader/>
            <Programs/>
            <Values/>
            <FAQs/>
            <Testimonials/>
        </>
    )
}

export default Home