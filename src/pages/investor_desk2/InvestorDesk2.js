import React, { useEffect } from "react";
import "./InvestorDesk2.css";
import { useLocation } from "react-router-dom";

const InvestorDesk2 = () => {
  const location = useLocation();
  const { item } = location.state || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="InvestorDesk_main">
      <div>
        <h1 className="red_heading" style={{ paddingTop: "1rem" }}>
          {item?.title}
        </h1>
      </div>

      {item.child.length == 0 ? (
        <div className="datanotavailable">
          Documents Not Available At This Moment
        </div>
      ) : (
        <div className="areyaar">
          <div className="boxes_main">
            {item.child.map((itm, indx) => {
              return (
                <div className="boxes_inner" key={indx}>
                  <a href={itm?.docs} target="_blank" className="linkOpen">
                    <div>
                      <img
                        style={{ height: "64px", width: "64px" }}
                        src={item.logo}
                        alt="logo"
                      />
                    </div>
                    <div>
                      <h3>{itm.title}</h3>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestorDesk2;
