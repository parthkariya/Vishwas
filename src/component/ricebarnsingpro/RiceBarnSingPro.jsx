import React from 'react'
import images from "../../constants/images";
import "./RiceBarnSingPro.css"
import { AnimationOnScroll } from "react-animation-on-scroll";

const RiceBarnSingPro = () => {
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
          src={images.rice_barn_singpro1}
          alt=""
          style={{ objectFit: "contain", width: "50%", height: "50%" }}
          className="img_sunflower"
        />
        <img
          src={images.rice_barn_singpro2}
          alt=""
          style={{ objectFit: "contain", width: "50%", height: "50%" }}
          className="img_sunflower"
        />
      </div>

      <div className="pro_det_sunflower">
        <div className="product_head">
          <h1 style={{ fontSize: "30px" }}>Refined Rice Bran Oil</h1>
        </div>
        <div style={{ textAlign: "justify", lineHeight: "" }}>
          <p>
          Refined Rice Bran Oil is extracted from the outer layer (bran) of rice and undergoes a purification process to remove impurities while retaining essential nutrients like Oryzanol, Vitamin E, and healthy fats. It is a heart-healthy oil that helps lower bad cholesterol (LDL) and increase good cholesterol (HDL), making it ideal for daily cooking. With a high smoke point (~232°C), it is perfect for deep frying, stir-frying, and Indian cooking, as it absorbs less oil, keeping food light and healthy. Rich in antioxidants, it boosts immunity, supports skin and hair health, and aids digestion. The oil contains approximately 45% MUFA, 35% PUFA, and 20% saturated fats, along with 1000+ mg of Oryzanol and 4-6 mg of Vitamin E per 100ml, making it a balanced choice for a healthy lifestyle. Additionally, it is widely used in salad dressings, skincare, and pharmaceutical applications.
          </p>{" "}
        </div>
        <div>
        <h3 style={{ margin: "10px" }}>Available in</h3>
          <div className="icons_main">
            <div className="packing_info">
              {/* <div>
                <img src={images.bottle} alt="" className="packing_icons" />
              </div> */}
              {/* <div>
                <h5 style={{ margin: "4px", textAlign: "center" }}>500ML</h5>
                <h5 style={{ margin: "4px", textAlign: "center" }}>1L</h5>
              </div> */}
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
            {/* <div>
              <div>
                <img
                  src={images.can_small}
                  alt=""
                  className="packing_icons"
                />
              </div>
              <div>
                <h5 style={{ margin: "4px", textAlign: "center" }}>5L</h5>
              </div>
            </div> */}
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

export default RiceBarnSingPro