import React from "react";
import resumeSvg from "../../assets/undraw_resume.svg";
import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import Body from "../Body/Body"


function Header() {
  return (
    <div>
    <Nav/>
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div> 
    <Body />
    </div>
  );
}

export default Header;