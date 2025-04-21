"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });


    const router = useRouter();

    return (
        <>
            <section id="homeFirstSection">
                <h2>Model 3</h2>
                <h3>Performance</h3>
                <button onClick={() => router.replace("/product/4rubgUzcE340HrGgsEom")}>Order Now</button>
                <button><a href="#homeFeaturedSection">
                    <IoIosArrowDown />Learn More
                </a></button>
                <a href="https://romancastro.vercel.app/">Site developed by Roman Castro</a>
            </section>
            <section id="homeFeaturedSection">
                <article id="homeFeaturedSectionArticle" data-aos="fade-up" data-aos-duration="1500">
                    <Image alt="homeFeaturedImage" src={"/featuredHome/featured1.avif"} width={1920} height={1080} id="homeFeaturedImage"/>
                    <div>
                        <h3>Stay Connected</h3>
                        <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
                    </div>
                </article>

                <article id="homeFeaturedSectionArticleReverse" data-aos="fade-up" data-aos-duration="1500">
                    <video src="/featuredHome/featured2.webm" loop autoPlay muted></video>
                    <div>
                        <h3>Immersive Sound</h3>
                        <p>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
                    </div>
                </article>
                
                <article id="homeFeaturedSectionArticle" data-aos="fade-up" data-aos-duration="1500">
                    <Image alt="homeFeaturedImage" src={"/featuredHome/featured3.avif"} width={1920} height={1080} id="homeFeaturedImage"/>
                    <div>
                        <h3>Room for Everything</h3>
                        <p>With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.</p>
                    </div>
                </article>
            </section>
            <section id="homeFeaturedBanner">
                <h2>Built for Distance</h2>
                <p>Go up to 584 kilometers (EPA est.) on a single charge with updated exterior styling optimized for maximum aerodynamics.</p>
            </section>
        </>
    );
}
