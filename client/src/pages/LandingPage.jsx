import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import YouTube from "react-youtube";
import AOS from "aos";
import "aos/dist/aos.css";
// import banner1 from '../assets/images/organ1.jpeg'
import banner2 from '../assets/images/organ2.jpeg'
import Navbar from '../components/Navbar';
import Marquee from "react-fast-marquee";
// import { motion } from "framer-motion";
import DonarCard from '../components/DonarCard'

import './css/Landingpage.css'
const LandingPage = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration (in ms)
            once: true, // Animation happens only once
            easing: "ease-in-out",
        });
    }, []);
    const options = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 1,
            mute: 1,
        }
    }
    const onReady = () => {
        console.log("Video is ready");

    };
    return (

        <>

            <Navbar />


            <div className="bannerimage">
                <img className='img-fluid' src={banner2} alt="" />
            </div>



            <header className="mt-5 bg-success container-fluid text-white text-center py-5" data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500">
                <h1>Save Lives, Be an Organ Donor</h1>
                <p>One donor can save up to 8 lives. Make a difference today!</p>
                <Link to='/login' className="btn btn-light mt-3">Login</Link>
                <br />
                <Link to='/userregister' className="btn btn-light mt-3">Register</Link>
            </header>

            <Marquee speed={50} gradient={false}>

                <div className="yt-video container-fluid mt-5 p-5 d-none d-lg-block  bg-primary">
                    <YouTube className='d-inline me-5' videoId="ub3Q3t7Juak" opts={options} onReady={onReady} />
                    <YouTube className='d-inline' videoId="V9oXkucoJUE" opts={options} onReady={onReady} />
                </div>
            </Marquee>


            <div className="container-fluid">
                <h1 className="text-center mt-5 text-white">Organ Donation Records</h1>
                <div className="donor-container">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <DonarCard key={index} />
                    ))}
                </div>
            </div>

            <section id="why" className="container my-5 text-black" data-aos="fade-up"
                data-aos-duration="3000">
                <h2 className="text-center text-dark  mb-4">Why Donate?</h2>
                <p className='text-center'>Thousands of people are waiting for life-saving transplants. By becoming a donor, you can give someone a second chance at life.</p>
            </section>

            <div className="content">
                
                <div className="summary-cards">
                    <div className="card card-shadow">Total Donors: 120</div>
                    <div className="card card-shadow">Total Recipients: 95</div>
                    <div className="card card-shadow">Successful Transplants: 60</div>
                </div>
            </div>


            <section id="how"
                className="bg-light py-5"
                data-aos="fade-up"
                data-aos-duration="3000">

                <div className="container text-center text-black">
                    <h2>How It Works</h2>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <h4>Register</h4>
                            <p>Sign up online to become a donor.</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Inform Family</h4>
                            <p>Make sure your loved ones know about your decision.</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Donate</h4>
                            <p>In the event of an emergency, your organs can save lives.</p>
                        </div>
                    </div>
                </div>
            </section>




            <section id="contact" className="container my-5 text-black w-50" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <h2 className="text-center mb-4">Any Query ? Call Us</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>


            <footer className="bg-dark text-white text-center py-3">
                <p>&copy; 2025 Organ Donation Initiative</p>
            </footer>


        </>
    )
}

export default LandingPage
