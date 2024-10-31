import React from 'react';
import Image from 'next/image';
import '../style/services.css';

function Services() {
    return (
        <main className='main'>
            <div className='heading'>
                <h1>About Me</h1>
            </div>
            <div className='about'>
                <p>
                    I provide expert web development services designed to elevate your brand’s online presence. With a focus on sleek, user-friendly design, I create responsive, high-performance websites tailored to meet your specific goals. Whether you need a captivating portfolio, a business site, or a custom web solution, I ensure each project reflects your vision and engages your audience. Let’s work together to build a digital experience that makes a lasting impact!
                </p>
                <Image src="/about.jpeg" alt='image' width={300} height={200} />
            </div>
        </main>
    );
}

export default Services;
