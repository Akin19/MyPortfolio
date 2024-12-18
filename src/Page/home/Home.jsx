import { FaArrowRight } from "react-icons/fa";

import "./Home.css";
import profile from "../../assets/akin.jpg";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="home" className="home section grid flex">
      <img src={profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I am Asad Akin.</span> Web Designer & SEO expert
          </h1>
          <p className="home__description">
            I am a WEb Designer and SEO expert focused on crafting clean &
            user-friendly experiences, I am passionate about building excelent
            software that improves the lives of those around me.
          </p>

          {/* <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link> */}

          <a href="#about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </a>
        </div>
      </div>

      <div className="color__block "></div>
    </section>
  );
};

export default Home;
