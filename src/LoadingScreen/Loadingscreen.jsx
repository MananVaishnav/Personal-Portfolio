import React, { useEffect, useRef } from 'react'
import './Loadingscreen.css';
import gsap from 'gsap';
import SplitType from 'split-type';

const Loadingscreen = ({ onLoadingComplete }) => {

    const screenRef = useRef();
    const textRef = useRef();

    useEffect(() => {

        const myText = new SplitType(textRef.current);
        const letters = textRef.current.querySelectorAll('.char');

        // gsap.set(letters, { y: "100%" });

        gsap.to(letters , {
            // opacity: 1,
            y: 0,
            delay: 0.2,
            duration: 1,
            ease: "power2.out",
            stagger: 0.1,
            onComplete: () => {
                gsap.to(screenRef.current, {
                    y: '-100%',
                    // opacity: 0,
                    duration: 1,
                    ease: "power2.inOut",
                    onComplete: () => {
                        screenRef.current.style.display = "none";
                        if (onLoadingComplete) {
                            onLoadingComplete();
                        }
                    }
                });
            }
        });
    }, [onLoadingComplete]);

  return (
    <div ref={screenRef} className='loading-screen'>
        <h1 ref={textRef} className="welcometext">Welcome</h1>
    </div>
  )
}

export default Loadingscreen