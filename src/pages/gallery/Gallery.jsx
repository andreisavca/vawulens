import React from "react";
import './gallery.css'
import HeaderImage from "../../images/header_bg_3.jpg"
import Header from "../../components/header/Header";


function Gallery() {
    const galleryLength = 15
    const images = []
    for(let i = 1; i < galleryLength; i++) {
        images.push(require(`../../images/gallery${i}.jpg`))
    }
    return (
        <>
            <Header title="Our Gallery" image={HeaderImage}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet porro provident voluptatem!
                Aliquam asperiores, atque culpa dignissimos, eum harum inventore laborum neque provident quas
                quasi quidem quos repellendus suscipit voluptate.
            </Header>
            <section className="gallery">
                <div className="container gallery__container">
                    {
                        images.map((image, index) => {
                            return (
                                <article key={index}>
                                    <img src={image} alt={`Gallery ${index + 1}`}/>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}


export default Gallery
