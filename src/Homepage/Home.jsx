import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../Header/Header';
import { Timeline } from 'gsap/gsap-core';



gsap.registerPlugin(ScrollTrigger);

// tech stack
// const techStack = ['ReactJs', 'AWS', 'Python', 'Docker', 'Kubernetes', 'Jenkins', 'MySql'];

const Home = () => {


  // const elementRef = useRef(null);
  // const titleRef = useRef(null);
  // const contentRef = useRef(null);
  // const [isTitleVisible, setTitleIsVisible] = useState(false);
  // const [isContentVisible, setIsContentVisible] = useState(false);

  // useEffect(() => {
  //   const titleObserver = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setTitleIsVisible(true);
  //         // observer.disconnect(); // if element is visible once stop observing
  //       }
  //       // if (!entry.isIntersecting) {
  //       //   setTitleIsVisible(false);
  //       // }
  //       // setIsVisible(entry.isIntersecting);
  //     },
  //     { 
  //       threshold: 0.01 
  //     }
  //   );

  //   const contentObserver = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsContentVisible(true);
  //       }
  //       // if (!entry.isIntersecting) {
  //       //   setIsContentVisible(false);
  //       // }
  //       // setIsVisible(entry.isIntersecting);
  //     },
  //     { 
  //       threshold: 0.01 
  //     }
  //   );

  //   if (titleRef.current) {
  //     titleObserver.observe(titleRef.current);
  //   }

  //   if (contentRef.current) {
  //     contentObserver.observe(contentRef.current);
  //   }

  //   return () => {
  //     if (titleRef.current) {
  //       titleObserver.unobserve(titleRef.current)
  //     }
  //     if (contentRef.current) {
  //       contentObserver.unobserve(contentRef.current);
  //     }
  //   }
  // }, []);

  // cursor effect
  // const [position, setPosition] = useState({ x:0, y:0});

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setPosition({ x: e.pageX, y:e.pageY});
  //   };

  //   document.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  
  const homeRef = useRef(null);
  const textanimRef = useRef(null);
  const headingRef = useRef(null);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const newtextRef = useRef(null);
  const sec2textRef = useRef(null);
  const imageRef = useRef(null);
  const imageRef2 = useRef(null);
  // const containerRef = useRef(null)
   
  useEffect(() => {
    gsap.fromTo(homeRef.current, {
      y: '100%',
      opacity: 0
    },
    {
      y: '0%',
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
    },
  );
  }, []);

  // useEffect(() => {
  //   gsap.fromTo(newtextRef.current, {
  //     opacity: 0,
  //     y: 100,
  //     },{
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       ease: 'power3.out',
  //       scrollTrigger: {
  //         trigger: newtextRef.current,
  //         start: 'top 70%',
  //         toggleActions: 'play none none none',
  //       }
  //   });
  // }, []);

  useEffect(() => {

    gsap.to(textanimRef.current, {
      x: 100,
      scrollTrigger: {
        trigger: textanimRef.current,
        start: "top 27%",
        end: "top 0",
        scrub: true,
      }
    });

    gsap.to(headingRef.current, {
      x: -100,
      scrollTrigger: {
        trigger: textanimRef.current,
        start: "top 27%",
        end: "top 0",
        scrub: true,
      }
    });

    gsap.to(videoRef.current, {
      width: '100%',
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 57%",
        end: "top 0",
        scrub: true,
      }
    });

    gsap.from(sec2textRef.current, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      }
    });

    gsap.fromTo(textRef.current, {
      opacity: 0,
      y: 50,
    },{
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        }
    });

    gsap.to(sectionRef.current, {
      backgroundColor: "#9fc5e8",
      duration: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'center center',
        end: "bottom bottom",
        scrub: true,
      },
    });

    // image Ref
    gsap.fromTo(imageRef.current, {
      y: '50%',
      opacity: 0,
    },{
      opacity: 1,
      y: '0%',
      duration: 0.8,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 80%', 
        end: 'bottom 20%',
        scrub: true,
      }
    });

    gsap.fromTo(imageRef2.current, {
      y: '50%',
      opacity: 0,
    },{
      opacity: 1,
      y: '0%',
      duration: 0.8,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: imageRef2.current,
        start: 'top 80%', 
        end: 'bottom 20%',
        scrub: true,
      }
    });

    gsap.fromTo(newtextRef.current, {
      clipPath: "inset(0 0 100% 0)",
      },{
        clipPath: "inset(0 0 0% 0)",
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: newtextRef.current,
          start: 'top 50%',
          end: 'bottom 15%',
          // toggleActions: 'play none none none',
          scrub: true,
        }
    });

  }, []);

  // useEffect(() => {
  //   gsap.fromTo(".section-2-heading", { 
  //       opacity: 0, 
  //       y: 50       
  //     }, 
  //     { 
  //       opacity: 1, 
  //       y: 0,       
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: ".section-2-heading",
  //         start: "top 80%", 
  //         end: "top 20%",   
  //         scrub: true,      
  //       }
  //     }
  //   );
  // }, []);

  useEffect(() => {
    var elemC = document.querySelector(".sec3-options");
    var fixelem = document.querySelector(".fixed-img-div");

    var elems = document.querySelectorAll('.elem');

    if (elemC && fixelem && elems) {
      elemC.addEventListener("mouseenter", () => {
        fixelem.style.display = 'block';
      });

      elemC.addEventListener("mouseleave", () => {
        fixelem.style.display = 'none';
      });

      elems.forEach((e) => {
        e.addEventListener("mouseenter", () => {
          var image = e.getAttribute("data-image");
          fixelem.style.backgroundImage = `url(${image})`;
        })
      })

      return () => {
        elemC.removeEventListener("mouseenter", () => {
          fixelem.style.display = 'block';
        });

        elemC.removeEventListener("mouseleave", () => {
          fixelem.style.display = 'none';
        });
      };
    }

  }, []);

  const [isVisible, setIsVisible] = useState({
    sec2Heading: false,
    sec3Heading: false,
  });
  const sec2headingRef = useRef(null);
  const sec3headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === sec2headingRef.current && entry.isIntersecting) {
            setIsVisible((prevState) => ({ ...prevState, sec2Heading: true }));
          } else if (entry.target === sec3headingRef.current && entry.isIntersecting) {
            setIsVisible((prevState) => ({ ...prevState, sec3Heading: true }));
          }
          else {
            if (entry.target === sec2headingRef.current) {
              setIsVisible((prevState) => ({ ...prevState, sec2Heading: false }));
            }
            if (entry.target === sec3headingRef.current) {
              setIsVisible((prevState) => ({ ...prevState, sec3Heading: false }));
            }
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    if (sec2headingRef.current) {
      observer.observe(sec2headingRef.current);
    }
    if (sec3headingRef.current) {
      observer.observe(sec3headingRef.current);
    }

    return () => {
      if (sec2headingRef.current) {
        observer.unobserve(sec2headingRef.current)
      }
      if (sec3headingRef.current) {
        observer.unobserve(sec3headingRef.current)
      }
    }
  }, []);

  // for aboutme
  const [isaboutVisible, setIsAboutVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const aboutobserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsAboutVisible(true);
          } else {
            setIsAboutVisible(false);
          }
        });
      },{
        threshold: 0.2,
      }
    );
    
    if (aboutRef.current) {
      aboutobserver.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        aboutobserver.unobserve(aboutRef.current);
      }
    };
  }, []);


  return (
    <div>
      <div className="fixed-img-div"></div>
      <div className="home-container">
        {/* <div id="cursor"
          style={{
            left: `${position.x - 25}px`,
            top: `${position.y - 25}px`,
          }}
        ></div> */}
        <div className="hero-header-section">
          <Header/>
          {/* <span className='hero-header'>Manan <span className='header-side-text'>is a</span></span> */}
          <div className="subheading-profile">
            <span className='hero-section-below-text' ref={headingRef}>Creative</span>
          </div>
          <div className="below-text-two" ref={textanimRef}>
            <span className='profile-text'>Visual</span>
            <span className='designer-text'>Designer</span>
          </div>
          <video src="/video/heroVid.mp4"  autoPlay muted loop ref={videoRef}></video>
        </div>
        
        <div className="section-2">
          <span ref={sec2headingRef} className={`section-2-heading ${isVisible.sec2Heading ? 'visible' : ''}`}>Hi, I am <span>Manan</span> Vaishnav</span>
          <div className="section2-aboutme">
            {/* <video src="/video/aboutvid.mp4" autoPlay muted></video> */}
            <img src="/images/abi1.jpg" alt="" ref={imageRef} className='section2-img1'/>
            <h3 ref={aboutRef} className={`${isaboutVisible ? 'visible' : ''}`}>Creative <span>web</span> and <span>visual</span> designer shaping ideas into stunning digital experiences.</h3>
            <img src="/images/abi2.jpg" alt="" ref={imageRef2} className='section2-img2'/>
          </div>
        </div>

        <div className="line1"></div>

        <div className="section-3"> 
          <span ref={sec3headingRef} className={`section-3-heading ${isVisible.sec3Heading ? 'visible' : ''}`}>What i can do</span>
          <div className="sec3-options">
            <div className='elem' data-image='/images/webdev.gif'>
              <div className="overlay"></div>
              <h2>Website Development</h2>
            </div>
            <div className='elem' data-image='/images/visualdev.gif'>
              <div className="overlay"></div>
              <h2>Visual Designs</h2>
            </div>
            <div className='elem' data-image='/images/appdev.gif'>
              <div className="overlay"></div>
              <h2>Application Development</h2>
            </div>
            <div className='elem' data-image='/images/softdev.gif'>
              <div className="overlay"></div>
              <h2>Software Development</h2>
            </div>
            {/* <div className='elem'>
              <div className="overlay"></div>
              <h2>Graphic Designs</h2>
            </div> */}
          </div>
        </div>

        <div className="text-carousel">
          <div className="moving-text">
            <div className="text-con">
              <h2>CREATIVITY</h2>
              <div className="circle-s"></div>
              <h2>DESIGN</h2>
              <div className="circle-s"></div>
              <h2>DEVELOPMENT</h2>
              <div className="circle-s"></div>
            </div>
            <div className="text-con">
              <h2>CREATIVITY</h2>
              <div className="circle-s"></div>
              <h2>DESIGN</h2>
              <div className="circle-s"></div>
              <h2>DEVELOPMENT</h2>
              <div className="circle-s"></div>
            </div>
            <div className="text-con">
              <h2>CREATIVITY</h2>
              <div className="circle-s"></div>
              <h2>DESIGN</h2>
              <div className="circle-s"></div>
              <h2>DEVELOPMENT</h2>
              <div className="circle-s"></div>
            </div>
          </div>
        </div>

        <div className="footer-class">
          <h2 className="footer-header">Let's Connect</h2>
          <div className="footer-data">
            <div className="data-for-connect">
              <label className='contact-label'>Contact</label>
              <div className="contact-email">
                <h3 className="contact-number">+91 9510721504</h3>
                <h3 className="contact-email">vaishnav.manan22@gmail.com</h3>
              </div>
              <div className="social-media">
                <div className="social-insta">
                  <img src="/images/instagram.png" alt="" />
                  <h4>_manan__22</h4>
                </div>
              </div>
            </div>
            <img src="/images/connection.png" alt="" className='footer-img'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home