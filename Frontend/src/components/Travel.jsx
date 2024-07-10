import React from "react";
import "./trav.css";


const Travel = () => {
  return (
    <>
      <section className="showcase">
        <header>
          <h2 className="logo">NomadNx</h2>
          <div className="toggle"></div>
        </header>

        <video className="video-background" autoPlay loop controls playsInline>
          <source src="src/Assets/travel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay"></div>
        <div className="text">
          <h2>Never Stop</h2>
          <h3>Exploring The World</h3>
          <p>
            The world is a book, and those who do not travel read only one page.
          </p>
          <a href="#">Explore</a>
        </div>
        <ul className="social">
          <li>
            <a href="#">
              <img src="https://i.ibb.co/x7P24fL/facebook.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img href="" src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://i.ibb.co/ySwtH4B/github.png" alt="Instagram" />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Travel;
