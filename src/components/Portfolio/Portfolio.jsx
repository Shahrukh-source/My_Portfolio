import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{marginTop: "10px"}}>Logic Practice With Project</p>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
        <a href="https://razorpay-tailwind-project.vercel.app/">Razorpay_With_Tailwind </a>
        <a href="https://react-blog-site-with-contextapi.vercel.app/">React_BLOGSITE_CONTEXTAPI_Project </a>
        <a href="https://react-modern-login-signin-project.vercel.app/signup">React_Modern_Login_SigninForm_Project </a>
        <a href="https://react-card-second-project-with-props.vercel.app/">React Card Second Project</a>
        <a href="https://react-card-filter-project-with-props-toastify-f29g.vercel.app/">React Card First Project</a>
        <a href="https://tour-travels-miniproject-with-props-drilling.vercel.app/">React Plan with Love</a>
        <a href="https://props-drilling-and-lifting-state-up-mini-project.vercel.app/">React Mini Project</a>
        <a href="https://srkzone.netlify.app/">React Srk Zone</a>
        <a href="https://github.com/Shahrukh-source?tab=repositories">My GitHub Profile</a>

        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
