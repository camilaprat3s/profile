import React from "react";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="div">
        <header className="header">
          <div className="overlap">
            <div className="header-background">
              <div className="ellipse" />
            </div>
            <div className="nav-bar">
              <div className="navigaiton-items">
                <div className="home-active">
                  <div className="text-wrapper">Home</div>
                  <img className="line" alt="Line" src="line-13.svg" />
                </div>
                <div className="text-wrapper-2">About me</div>
                <div className="text-wrapper-3">Contact</div>
              </div>
              <div className="portfolio-btn">
                <div className="overlap-group">
                  <div className="text-wrapper-4">Portfolio Here</div>
                </div>
              </div>
            </div>
            <div className="header-details">
              <div className="title">
                <p className="hey-i-m-camila">
                  <span className="span">
                    Hey!&nbsp;&nbsp;I’m
                    <br />
                  </span>
                  <span className="text-wrapper-5">
                    <br />
                  </span>
                  <span className="text-wrapper-6">Camila Prates</span>
                </p>
              </div>
              <div className="proffession">
                <div className="overlap-group-2">
                  <div className="text-wrapper-7">Full-Stack</div>
                  <div className="text-wrapper-8">Developer</div>
                  <div className="text-wrapper-9">To Be</div>
                </div>
              </div>
              <div className="description">
                <p className="learning-web">
                  Learning web development will be a thrilling journey, and now, I&#39;m crafting my first profile web
                  page. It&#39;s more than code; it&#39;s a digital expression of my skills and passions. Here&#39;s to
                  the exciting possibilities ahead! 💻🌐🚀
                </p>
              </div>
              <img className="social-links" alt="Social links" src="social-links.png" />
            </div>
            <div className="header-image-view">
              <div className="overlap-2">
                <img className="vector" alt="Vector" src="vector.svg" />
                <img className="img" alt="Vector" src="image.svg" />
                <img className="whatsapp-image" alt="Whatsapp image" src="whatsapp-image-2023-10-30-at-11-53-1.png" />
                <img className="overlay" alt="Overlay" src="overlay.svg" />
              </div>
            </div>
          </div>
        </header>
        <div className="overlap-3">
          <footer className="footer">
            <div className="contact-heading">
              <div className="text-wrapper-10">Contact.</div>
              <div className="text-wrapper-11">camilaprates1@gmail.com</div>
            </div>
          </footer>
          <div className="about-me">
            <div className="about-heading">
              <p className="p">
                <span className="text-wrapper-12">About me</span>
                <span className="text-wrapper-13">.</span>
              </p>
              <p className="i-am-a-brazilian-now">
                I am a Brazilian now embracing the Canadian way of life! With a passion for pets and a web development
                learner, I am weaving together Brazilian warmth and Canadian coolness in every line of code. 🇧🇷💻🇨🇦
                <br />
                <br />
                Web development in agriculture merges tradition with technology, streamlining farming practices and
                fostering community connections. It&#39;s where the past and the future unite for a more sustainable and
                efficient agricultural landscape. 🌾💻🚜
                <br />
                <br />
                Navigating the challenges as a woman in agriculture and technology demands determination and resilience.
                In these male-dominated fields, I see every obstacle as an opportunity to prove my capabilities and
                foster inclusivity, contributing to a more equitable future. 💪🚜💻
              </p>
            </div>
          </div>
          <div className="image-model">
            <img className="vector-2" alt="Vector" src="vector-1.svg" />
            <div className="hue-red" />
          </div>
        </div>
      </div>
    </div>
  );
};
