import React from "react";
import "./MustardSinglePro.css";
import images from "../../constants/images";
import { AnimationOnScroll } from "react-animation-on-scroll";

const MustardSinglePro = () => {
  return (
    <div
      className="pro_sunflower pro_singlesunflower_responsive"
      style={{
        backgroundImage: `url(${images.bg_product})`,
        backgroundPosition: "initial",
        backdropFilter: "blur(2px)",
        backgroundSize: "initial",
        width: "100%",
        height: "34rem",
        display: "flex",
        alignItems: "center",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}>
      <div className="product_main">
        {/* <div style={{ position: "relative" }}> */}

        {/* <div className="pro_img_sunflower pro_img_sunflower_specific">
          <img 
            src={images.mustered_sing_pro_img}
            alt=""
            className="img_sunflower img_sunflower_specific"
            style={{ objectFit: "cover", }}
          />
        </div> */}

        <div className="pro_img_sunflower pro_img_cottonseed_main">
          <img
            src={images.mustered_sing_pro_img}
            alt=""
            style={{ objectFit: "contain", width: "90%", height: "90%" }}
            className="img_sunflower"
          />
        </div>

        <div className="pro_det_sunflower">
          <div className="product_head">
            <h1 style={{ fontSize: "30px" }}>Manufacturer of <br/> Filtered Mustard Oil Kachi Ghani</h1>
          </div>
          <div style={{ textAlign: "justify", lineHeight: "" }}>
            <p>
            Experience the rich, robust flavor of our Mustard Oil Kachi Ghani, a premium cold-pressed oil made from the finest mustard seeds. Traditionally extracted using the Kachi Ghani method, this oil preserves the natural nutrients and distinctive aroma, ensuring that every drop is packed with flavor and health benefits. Rich in omega-3 and omega-6 fatty acids, our mustard oil is not only a cooking staple but also a versatile ingredient for marinades, dressings, and frying. Its unique pungency enhances the taste of your dishes, making it ideal for regional Indian cuisines and beyond. In addition to its culinary uses, Mustard Oil Kachi Ghani is celebrated for its skin and hair benefits, making it a favorite in natural beauty routines. Whether you’re sautéing vegetables, making pickles, or nourishing your skin, our mustard oil is the perfect addition to your kitchen and beauty arsenal.
            </p>{" "}
          </div>
          <div>
          <h3 style={{ margin: "10px" }}>Available in</h3>
            <div className="icons_main">
              <div className="packing_info">
                <div>
                  <img src={images.bottle} alt="" className="packing_icons" />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>500ML</h5>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>1L</h5>
                </div>
              </div>
              {/* <div>
                <div>
                  <img src={images.pouch} alt="" className="packing_icons" />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>500ML</h5>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>1L</h5>
                </div>
              </div> */}
              <div>
                <div>
                  <img
                    src={images.can_small}
                    alt=""
                    className="packing_icons"
                  />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>5L</h5>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>2L</h5>
                </div>
              </div>
              <div>
                {/* <div>
                  <img src={images.tap_jar} alt="" className="packing_icons" />
                </div> */}
                {/* <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>5L</h5>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15L</h5>
                </div> */}
              </div>
              <div>
                <div>
                  <img src={images.container_15kg} alt="" className="packing_icons" />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15L</h5>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15KG</h5>
                </div>
              </div>
              {/* <div>
                <div>
                  <img src={images.tin} alt="" className="packing_icons" />
                </div>
                <div>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15L</h5>
                  <h5 style={{ margin: "4px", textAlign: "center" }}>15KG</h5>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <img src={images.flower} style={{ position: "absolute" }} alt="" /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default MustardSinglePro;
