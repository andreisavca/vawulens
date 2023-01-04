import React from "react";
import Header from "../../components/header/Header";
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
import './about.css'


function About() {
    return (
        <>
            <Header title="About Us" image={HeaderImage}>
                Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui
            </Header>
            <section className="about__story">
                <div className="container about__story-container">
                    <div className="about__section-image">
                        <img src={StoryImage} alt="Story"/>
                    </div>
                    <div className="about__section-content">
                        <h1>Our Story</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aperiam cumque deserunt laboriosam molestiae mollitia sapiente tenetur vel veniam!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi harum impedit in laboriosam minima obcaecati perferendis sequi voluptatem. Ab aspernatur beatae dicta distinctio ea eos eum, laboriosam repudiandae soluta voluptas!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad debitis fugit hic, impedit incidunt magni minus qui repellat vel veritatis! Consequuntur deleniti dicta dignissimos dolorum ducimus fugiat nesciunt, recusandae voluptas.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about__vision">
                <div className="container about__vision-container">
                    <div className="about__section-content">
                        <h1>Our Vision</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aperiam cumque deserunt laboriosam molestiae mollitia sapiente tenetur vel veniam!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi harum impedit in laboriosam minima obcaecati perferendis sequi voluptatem. Ab aspernatur beatae dicta distinctio ea eos eum, laboriosam repudiandae soluta voluptas!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad debitis fugit hic, impedit incidunt magni minus qui repellat vel veritatis! Consequuntur deleniti dicta dignissimos dolorum ducimus fugiat nesciunt, recusandae voluptas.
                        </p>
                    </div>
                    <div className="about__section-image">
                        <img src={VisionImage} alt="Story"/>
                    </div>
                </div>
            </section>

            <section className="about__mission">
                <div className="container about__mission-container">
                    <div className="about__section-image">
                        <img src={MissionImage} alt="Mission"/>
                    </div>
                    <div className="about__section-content">
                        <h1>Our Mission</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aperiam cumque deserunt laboriosam molestiae mollitia sapiente tenetur vel veniam!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi harum impedit in laboriosam minima obcaecati perferendis sequi voluptatem. Ab aspernatur beatae dicta distinctio ea eos eum, laboriosam repudiandae soluta voluptas!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad debitis fugit hic, impedit incidunt magni minus qui repellat vel veritatis! Consequuntur deleniti dicta dignissimos dolorum ducimus fugiat nesciunt, recusandae voluptas.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
