import React from 'react'
import "./footer.css";
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='details_wraped'>
                    <h1>Join the Adventure newsletter to receive our best vacation deals</h1>
                    <p>You can unsubscribe at any time.</p>
                    <form>
                        <input className='input_data' placeholder='Email id' type='text' />
                        <button className='btn'>Subscribe</button>
                    </form>
                </div>
            </section>
            <section className='nav_links_footer'>
                <div className='nav_links_footer_child'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className='nav_links_footer_child'>
                    <h2>Contact Us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
                <div className='nav_links_footer_child'>
                    <h2>Videos</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>

                <div className='nav_links_footer_child'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>


            </section>
            <section>
                <div className='footer_icons'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRVL
                            <i class='fab fa-typo3' />
                        </Link>
                    </div>
                    <small class='website-rights'>TRVL © 2020</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer