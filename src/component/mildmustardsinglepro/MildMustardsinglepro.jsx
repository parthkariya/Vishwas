import React from 'react'
import images from "../../constants/images";
import "./MildMustardsinglepro.css"
import { AnimationOnScroll } from "react-animation-on-scroll";

const MildMustardsinglepro = () => {
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

      <div className="pro_img_sunflower pro_img_cottonseed_main mild_mustard_single_pro_img_main">
        <img
          src={images.mustard_mild_all_single_pro}
          alt=""
          style={{ objectFit: "contain", width: "90%", height: "90%" }}
          className="img_sunflower"
        />
      </div>

      <div className="pro_det_sunflower">
        <div className="product_head">
          <h1 style={{ fontSize: "30px" }}>Manufacturer of <br/> Filtered Mild Mustard Oil</h1>
        </div>
        <div style={{ textAlign: "justify", lineHeight: "" }}>
          <p>
          Mild mustard oil is a versatile cooking oil extracted from mustard seeds, known for its gentle, nutty flavor that enhances a variety of dishes without being overpowering. Characterized by its light yellow to golden hue, this oil is particularly popular in Indian and Bangladeshi cuisines, where it is used for sautéing, frying, and as a base for marinades and dressings. Rich in omega-3 and omega-6 fatty acids, mild mustard oil not only contributes to heart health but also possesses natural antimicrobial properties, making it beneficial for food preservation. Its subtle aroma and unique taste make it an essential ingredient in many traditional recipes, while its nutritional profile offers a healthy alternative to more common cooking oils.
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
                {/* <h5 style={{ margin: "4px", textAlign: "center" }}>15L</h5> */}
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
  )
}

export default MildMustardsinglepro