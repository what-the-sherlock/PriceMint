import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import './AboutUs.css';
import logo from '../../assets/logo.png';

const AboutUs = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={logo} alt="PriceMint logo" className="about-us-logo" />
        <h1 className="about-title">
          <Typewriter
            words={['About PriceMint']}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      </motion.div>

      <motion.div
        className="about-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
      >
        <h3>Track. Analyze. Stay Ahead.</h3>
        <p>
          Welcome to <span className="highlight">PriceMint</span>, your all-in-one platform to track real-time cryptocurrency prices, trends, and market data with clarity and ease.
        </p>
        <p>
        In a fast-moving crypto world, staying informed is key. That’s why we built PriceMint — to help enthusiasts, traders, and long-term investors monitor market performance, understand patterns, and make smarter decisions with real-time insights.
        </p>
        <p className="signature">Let’s make finance feel effortless—together.</p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
