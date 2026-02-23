import React from "react";
import "./HeroSlider.css";
import images from "../../constants/images";
import Slider from "react-slick";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const HeroSlider = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <div className="HeroSlider_main">
      <Carousel autoPlay={true}       // Enable autoplay
        interval={3000}       // Set autoplay interval to 1 second (1000 ms)
        infiniteLoop={true}   // Loop carousel infinitely
        showThumbs={false}    // Optional: Hide thumbnail navigation
        showStatus={false}    // Optional: Hide the status (e.g., 1/3)
        showArrows={true}     // Optional: Show left/right arrows
        stopOnHover={false}
        showIndicators={false} // Hide the dots (indicators)

      >
        <div>
          <div
            className="pro_sunflower"
            style={{
              backgroundImage: `url(${images.sunflower_hero_bg})`,
              backgroundPosition: "inherit",
              backdropFilter: "blur(2px)",
              backgroundSize: "cover",
              width: "100%",
              height: "85vh",
              display: "flex",
              alignItems: "center",
            }}>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,.403)",
                width: "100%",
                height: "100%",
              }}>
              <div className="hero_content_main">
                <div className="product_heading">
                  <h1>Refined Sunflower Oil</h1>
                </div>
                <div className="product_image_main">
                  <img
                    src={images.sunflower_hero_big}
                    className="product_image sunflowerimgherobig"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="pro_sunflower"
            style={{
              backgroundImage: `url(${images.groundnut_hero_bg})`,
              backgroundPosition: "inherit",
              backdropFilter: "blur(2px)",
              backgroundSize: "cover",
              width: "100%",
              height: "85vh",
              display: "flex",
              alignItems: "center",
            }}>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,.403)",
                width: "100%",
                height: "100%",
              }}>
              <div className="hero_content_main">
                <div className="product_heading product_heading_groundnut">
                  <h1>Double Filtered Groundnut Oil</h1>
                </div>
                <div className="product_image_main">
                  <img
                    src={images.groundnut_hero_big}
                    className="product_groundnutimage"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="pro_sunflower"
            style={{
              backgroundImage: `url(${images.cotton_hero_bg})`,
              backgroundPosition: "inherit",
              backdropFilter: "blur(2px)",
              backgroundSize: "cover",
              width: "100%",
              height: "85vh",
              display: "flex",
              alignItems: "center",
            }}>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,.403)",
                width: "100%",
                height: "100%",
              }}>
              <div className="hero_content_main">
                <div className="product_heading">
                  <h1>Refined Cottonseed Oil</h1>
                </div>
                <div className="product_image_main">
                  <img
                    src={images.cotton_hero_big}
                    className="product_image"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="pro_sunflower"
            style={{
              backgroundImage: `url(${images.corn_hero_bg})`,
              backgroundPosition: "inherit",
              backdropFilter: "blur(2px)",
              backgroundSize: "cover",
              width: "100%",
              height: "85vh",
              display: "flex",
              alignItems: "center",
            }}>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,.403)",
                width: "100%",
                height: "100%",
              }}>
              <div className="hero_content_main">
                <div className="product_heading">
                  <h1>Refined Corn Oil</h1>
                </div>
                <div className="product_image_main">
                  <img
                    src={images.corn_hero_big}
                    className="product_cornoilimage"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="pro_sunflower"
            style={{
              backgroundImage: `url(${images.palmolean_hero_bg})`,
              backgroundPosition: "inherit",
              backdropFilter: "blur(2px)",
              backgroundSize: "cover",
              width: "100%",
              height: "85vh",
              display: "flex",
              alignItems: "center",
            }}>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,.403)",
                width: "100%",
                height: "100%",
              }}>
              <div className="hero_content_main">
                <div className="product_heading">
                  <h1>Refined Palmolein Oil</h1>
                </div>
                {/* <AnimationOnScroll
                  animateIn="fadeInRight"
                  animateOut="animate__bounceOutLeft"> */}
                <div className="product_image_main">
                  <img
                    src={images.palmolean_hero_change_big}
                    className="product_image"
                    alt=""
                  />
                </div>
                {/* </AnimationOnScroll> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="pro_sunflower"
            style={{
              backgroundImage: `url(${images.soy_hero_bg})`,
              backgroundPosition: "inherit",
              backdropFilter: "blur(2px)",
              backgroundSize: "cover",
              width: "100%",
              height: "85vh",
              display: "flex",
              alignItems: "center",
            }}>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,.403)",
                width: "100%",
                height: "100%",
              }}>
              <div className="hero_content_main">
                <div className="product_heading">
                  <h1>Refined Soyabean Oil</h1>
                </div>
                <div className="product_image_main">
                  <img
                    src={images.soya_hero_big}
                    className="product_image"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="pro_sunflower"
            style={{
              backgroundImage: `url(${images.Mustard_hero})`,
              backgroundPosition: "inherit",
              backdropFilter: "blur(2px)",
              backgroundSize: "cover",
              width: "100%",
              height: "85vh",
              display: "flex",
              alignItems: "center",
            }}>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,.403)",
                width: "100%",
                height: "100%",
              }}>
              <div className="hero_content_main">
                <div className="product_heading">
                  <h1>Filtered Mustard Oil Kachi Ghani </h1>
                </div>
                <div className="product_image_main">
                  <img
                    src={images.mustered_hero_img_inner}
                    className="product_image"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="pro_sunflower"
            style={{
              backgroundImage: `url(${images.mustered_mild_bg})`,
              backgroundPosition: "inherit",
              backdropFilter: "blur(2px)",
              backgroundSize: "cover",
              width: "100%",
              height: "85vh",
              display: "flex",
              alignItems: "center",
            }}>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,.403)",
                width: "100%",
                height: "100%",
              }}>
              <div className="hero_content_main">
                <div className="product_heading">
                  <h1>Filtered Mild Mustard Oil </h1>
                </div>
                <div className="product_image_main">
                  <img
                    src={images.mustard_mild_oil}
                    className="product_image"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div>
          <div
            className="pro_sunflower"
            style={{
              backgroundImage: `url(${images.mustered_mild_bg})`,
              backgroundPosition: "inherit",
              backdropFilter: "blur(2px)",
              backgroundSize: "cover",
              width: "100%",
              height: "85vh",
              display: "flex",
              alignItems: "center",
            }}>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,.403)",
                width: "100%",
                height: "100%",
              }}>
              <div className="hero_content_main">
                <div className="product_heading">
                  <h1>Filtered Mild Mustard Oil </h1>
                </div>
                <div className="product_image_main">
                  <img
                    src={images.mustard_mild_oil}
                    className="product_image"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div>
          <div
            className="pro_sunflower"
            style={{
              backgroundImage: `url(${images.rice_bran_hero_bgg})`,
              backgroundPosition: "inherit",
              backdropFilter: "blur(2px)",
              backgroundSize: "cover",
              width: "100%",
              height: "85vh",
              display: "flex",
              alignItems: "center",
            }}>
            <div
              style={{
                backgroundColor: "rgba(0,0,0,.403)",
                width: "100%",
                height: "100%",
              }}>
              <div className="hero_content_main">
                <div className="product_heading">
                  <h1>Refined Rice Barn Oil</h1>
                </div>
                <div className="product_image_main">
                  <img
                    src={images.rice_bran_hero_bg}
                    className="product_image"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSlider;
