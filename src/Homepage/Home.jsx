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
    sec4Heading: false,
  });
  const sec2headingRef = useRef(null);
  const sec3headingRef = useRef(null);
  const sec4headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === sec2headingRef.current && entry.isIntersecting) {
            setIsVisible((prevState) => ({ ...prevState, sec2Heading: true }));
          } else if (entry.target === sec3headingRef.current && entry.isIntersecting) {
            setIsVisible((prevState) => ({ ...prevState, sec3Heading: true }));
          }
          else if (entry.target === sec4headingRef.current && entry.isIntersecting) {
            setIsVisible((prevState) => ({ ...prevState, sec4Heading: true }));
          }
          else {
            if (entry.target === sec2headingRef.current) {
              setIsVisible((prevState) => ({ ...prevState, sec2Heading: false }));
            }
            if (entry.target === sec3headingRef.current) {
              setIsVisible((prevState) => ({ ...prevState, sec3Heading: false }));
            }
            if (entry.target === sec4headingRef.current) {
              setIsVisible((prevState) => ({ ...prevState, sec4Heading: false }));
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
    if (sec4headingRef.current) {
      observer.observe(sec4headingRef.current);
    }

    return () => {
      if (sec2headingRef.current) {
        observer.unobserve(sec2headingRef.current)
      }
      if (sec3headingRef.current) {
        observer.unobserve(sec3headingRef.current)
      }
      if (sec4headingRef.current) {
        observer.unobserve(sec4headingRef.current)
      }
    }
  }, []);

  // for aboutme
  const [isaboutVisible, setIsAboutVisible] = useState({
    sec2about: false,
    service1: false,
    service2: false,
    service3: false,
  });
  const aboutRef = useRef(null);
  const service1Ref = useRef(null);
  const service2Ref = useRef(null);
  const service3Ref = useRef(null);

  useEffect(() => {
    const aboutobserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === aboutRef.current && entry.isIntersecting) {  
            setIsAboutVisible((prevState) => ({ ...prevState, sec2about: true }));
          } else if (entry.target === service1Ref.current && entry.isIntersecting) {  
            setIsAboutVisible((prevState) => ({ ...prevState, service1: true }));
          } else if (entry.target === service2Ref.current && entry.isIntersecting) {  
            setIsAboutVisible((prevState) => ({ ...prevState, service2: true }));
          } else if (entry.target === service3Ref.current && entry.isIntersecting) {  
            setIsAboutVisible((prevState) => ({ ...prevState, service3: true }));
          }
          else {
            if (entry.target === aboutRef.current ) {  
              setIsAboutVisible((prevState) => ({ ...prevState, sec2about: false }));
            }
            if (entry.target === service1Ref.current && entry.isIntersecting) {  
              setIsAboutVisible((prevState) => ({ ...prevState, service1: false }));
            }
            if (entry.target === service2Ref.current && entry.isIntersecting) {  
              setIsAboutVisible((prevState) => ({ ...prevState, service2: false }));
            }
            if (entry.target === service3Ref.current && entry.isIntersecting) {  
              setIsAboutVisible((prevState) => ({ ...prevState, service3: false }));
            }
          }
        });
      },{
        threshold: 0.2,
      }
    );
    
    if (aboutRef.current) {
      aboutobserver.observe(aboutRef.current);
    }
    if (service1Ref.current) {
      aboutobserver.observe(service1Ref.current);
    }
    if (service2Ref.current) {
      aboutobserver.observe(service2Ref.current);
    }
    if (service3Ref.current) {
      aboutobserver.observe(service3Ref.current);
    }

    return () => {
      if (aboutRef.current) {
        aboutobserver.unobserve(aboutRef.current);
      }
      if (service1Ref.current) {
        aboutobserver.unobserve(service1Ref.current);
      }
      if (service2Ref.current) {
        aboutobserver.unobserve(service2Ref.current);
      }
      if (service3Ref.current) {
        aboutobserver.unobserve(service3Ref.current);
      }
    };
  }, []);


  // bg color effect
  const [bgColor, setBgColor] = useState("#f2f4f4");

  const handleHover = (color) => {
    setBgColor(color);
  }

  const handleHoverOut = () => {
    setBgColor("#f2f4f4");
  }


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
            <h3 ref={aboutRef} className={`${isaboutVisible.sec2about ? 'visible' : ''}`}>Creative <span>web</span> and <span>visual</span> designer shaping ideas into stunning digital experiences.</h3>
            <img src="/images/abi2.jpg" alt="" ref={imageRef2} className='section2-img2'/>
          </div>
        </div>

        <div className="line1"></div>

        <div className="section-3"> 
          <span ref={sec3headingRef} className={`section-3-heading ${isVisible.sec3Heading ? 'visible' : ''}`}>What <span>i can</span> do</span>
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

        {/* <div className="line1"></div> */}

        <div className="services-section">
          <span ref={sec4headingRef} className={`services-heading ${isVisible.sec4Heading ? 'visible' : ''}`}>Services <span>i</span> Provide</span>  

          <div style={{ backgroundColor: bgColor, transition: "background-color 0.5s ease" }}>    
            <div className="service1">
              <img 
                src="/images/ds1.png" alt="" className='service1-img1'
                onMouseEnter={() => handleHover("#f5b7b1")}
                onMouseLeave={handleHoverOut}
              />
              <div ref={service1Ref} className={`sm-heading-subheading ${isaboutVisible.service1 ? 'visible' : ''}`}>
                <h2 className='service1-name'>Social media content creation</h2>
                <h3 className="sm-subheading">
                  I offer creative and engaging <span>social media</span> content creation services to help brands stand out.
                  From eye-catching visuals to compelling captions.
                </h3>
              </div> 
            </div>

            <div className="service2">
              <div ref={service2Ref} className={`sm2-heading-subheading ${isaboutVisible.service2 ? 'visible' : ''}`}>
                <h2 className='service2-name'>Visual Design creation</h2>
                <h3 className="sm2-subheading">
                  I create stunning graphics and cohesive <span>designs</span> that capture attention, communicate effectively, 
                  and leave a lasting impression.
                </h3>
              </div>
              <img 
                src="/images/ds6.png" alt="" className='service2-img1'
                onMouseEnter={() => handleHover("#a2d9ce")}
                onMouseLeave={handleHoverOut}
              /> 
            </div>

            <div className="service3">
              <img 
                src="/images/landingpage.jpg" alt="" className='service3-img1'
                onMouseEnter={() => handleHover("#d7bde2")}
                onMouseLeave={handleHoverOut}
              />
              <div ref={service3Ref} className={`sm3-heading-subheading ${isaboutVisible.service3 ? 'visible' : ''}`}>
                <h2 className='service3-name'>Landing page creation</h2>
                <h3 className="sm3-subheading">
                I design and develop high-converting <span>landing pages</span> tailored to your goals. 
                From clean layouts to responsive designs, I ensure your page delivers a seamless user experience and drives results.
                </h3>
              </div> 
            </div>
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