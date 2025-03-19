import React, { useState, useEffect } from "react";
import classes from "./AboutContent.module.css";
import hossam1 from "../../assets/iti1.jpg";

export const AboutContent = () => {
  const fullText = "Front-End Developer";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 150; // سرعة الكتابة
    const deletingSpeed = 75; // سرعة المسح
    const timeout = isDeleting ? deletingSpeed : typingSpeed;

    const handleTyping = () => {
      if (isDeleting) {
        if (textIndex > 0) {
          setDisplayText((prev) => prev.substring(0, textIndex - 1));
          setTextIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
        }
      } else {
        if (textIndex < fullText.length) {
          setDisplayText((prev) => prev + fullText[textIndex]);
          setTextIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(handleTyping, timeout);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className={classes.about}>
      <header className={classes.header}>
      <h1 className={classes.title}>Hossam 😃 {displayText}</h1>
      <h2 className={classes.subtitle}>Turning Ideas In <span style={{color:"white"}}>to Digital Reality</span></h2>
        <meta 
          name="description" 
          content="Hossam Shaban is a skilled front-end React developer, specializing in creating responsive and secure websites for clients. Learn about his projects and skills." 
        />
        <meta 
          name="keywords" 
          content="React Developer, Front-end Developer, Web Development, Portfolio, JavaScript, HTML, CSS, Responsive Websites, Secure Websites"
        />
      </header>
      <div className={classes.contentWrapper}>
        <div className={classes.left}>
          <p className={classes.intro}>
            I'm a passionate React Front-End Developer specializing in crafting modern,
            <span className={classes.highlight}> high-performance web applications</span>. 
            With over 2 years of experience in the React ecosystem, I build responsive and scalable 
            solutions that drive business growth.
          </p>

          <div className={classes.skillsSection}>
            <h3 className={classes.sectionTitle}>Technical Expertise</h3>
            <ul className={classes.skillsList}>
              <li><span className={classes.skillBadge}>Next.js</span> - Production-grade SSR applications</li>
              <li><span className={classes.skillBadge}>Node.js & Express</span> - Backend API development</li>
              <li><span className={classes.skillBadge}>Angular</span> - Building dynamic web applications</li>
              <li><span className={classes.skillBadge}>MongoDB</span> - Database design & management</li>
              <li><span className={classes.skillBadge}>MERN Stack</span> - Certified from ITI</li>
            </ul>
          </div>

         
        </div>

        <div className={classes.right}>
          <div className={classes.imgContainer}>
            <div className={classes.imgWrapper}>
              <img
                src={hossam1}
                className={classes.img}
                alt="Hossam Shaban - Professional React Developer"
                loading="lazy"
              />
              <div className={classes.overlay}></div>
            </div>
            <div className={classes.certificationBadge}>
              <span>ITI Certified</span>
              <small>Frontend Cross-Platform & MERN Stack</small>
            </div>
          </div>
        </div>
      </div>
      <p className={classes.additionalInfo}>
            I hold certifications in <span className={classes.certHighlight}>Frontend Cross-Platform Development</span> 
            a <span style={{color:"white"}}>nd MERN Stack from ITI, 
            with hands-on experience in building</span> hybrid and full-stack applications. My development approach 
            e<span style={{color:"white"}}>mphasizes:</span>
            <ul className={classes.approachList}>
              <li>Clean architecture patterns</li>
              <li>Performance optimization</li>
              <li style={{color:"white"}}>Secure coding practices</li>
              <li style={{color:"white"}}>Cross-browser compatibility</li>
            </ul>
          </p>
    </div>
  );
};