import React from "react";
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'
import { FaLinkedin, FaFacebookF } from 'react-icons/all'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/all'
import { links } from "../../data";
import './footer.css'

function Footer() {
    const footerLinks = links.map(({name, path}, index) => {
        return (
            <li key={index}>
                <Link
                    to={path}
                >
                    {name}
                </Link>
            </li>
        )
    })
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to="/" className="logo">
                        <img src={Logo} alt="Footer Logo"/>
                    </Link>
                    <p>
                        Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!
                    </p>
                    <div className="footer__socials">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    {
                        footerLinks
                    }
                </article>
                <article>
                    <h4>Insights</h4>
                    {
                        footerLinks
                    }
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to="/s">Contact Us</Link>
                    <Link to="/s">Support</Link>
                </article>
            </div>
            <div className="footer__copyright">
                <small>2023 All right reserved</small>
            </div>
        </footer>
    )
}

export default Footer
