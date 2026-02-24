import React, { useEffect } from "react";
import "./InvestorDesk.css";
import images from "../../constants/images";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Data = [
  {
    id: 1,
    title: "About Management & Committees",
    logo: images.management,
    child: [],
  },
  {
    id: 2,
    title: "Financial Reports",
    logo: images.financialreport,
    child: [
      {
        id: 1,
        title: "Financial Reports 2023-24",
        docs: require("../../asset/Financial Reports - 2024.pdf"),
      },
      {
        id: 2,
        title: "Financial Reports 2024-25",
        docs: require("../../asset/Financial Report_2024-25.pdf"),
      },
    ],
  },
  {
    id: 3,
    title: "Listing Compliances",
    logo: images.listing,
    child: [],
  },
  {
    id: 4,
    title: "Annual Reports",
    logo: images.annualreport,
    child: [
      {
        id: 1,
        title: "Annual Report 2023-24",
        docs: require("../../asset/Annual Reports.pdf"),
      },
      {
        id: 2,
        title: "Annual Report 2024-25",
        docs: require("../../asset/Annual Report  2024-25.pdf"),
      },
    ],
  },
  {
    id: 5,
    title: "Policies",
    logo: images.policy,
    child: [
      {
        id: 1,
        title: "Preservation Of Documents",
        docs: require("../../asset/Policy On Preservation Of Documents.pdf"),
      },
      {
        id: 2,
        title: "Related Party Transactions",
        docs: require("../../asset/Policy On Related Party Transactions.pdf"),
      },
      {
        id: 3,
        title: "Archival Policy",
        docs: require("../../asset/Archival Policy.pdf"),
      },
      {
        id: 4,
        title: "Nomination & Remuneration",
        docs: require("../../asset/Nomination and Remuneration Policy.pdf"),
      },
      {
        id: 5,
        title: "Policy & Procedures for Inquiry",
        docs: require("../../asset/Procedures for Inquiry in Case of Leak or Suspected Leak of UPSI.pdf"),
      },
      {
        id: 6,
        title: "Policy on Materiality",
        docs: require("../../asset/Materiality Policies under ICDR Regulations 2018_group company, Creditors, Litigation.pdf"),
      },
      {
        id: 7,
        title: "Code of Conduct",
        docs: require("../../asset/Code of Conduct.pdf"),
      },
      {
        id: 8,
        title: "Corporate Governance",
        docs: require("../../asset/Corporate Governance.pdf"),
      },
      {
        id: 9,
        title: "Familiarization Programme",
        docs: require("../../asset/Familiarisation_Programme.pdf"),
      },
      {
        id: 10,
        title: "Code of Fair Disclosure",
        docs: require("../../asset/Code of Fair Disclosure of Unpublished Price Sensitive Information.pdf"),
      },
      {
        id: 11,
        title: "Board Diversity Policy",
        docs: require("../../asset/Board Diversity Policy.pdf"),
      },
      {
        id: 12,
        title: "Vigil Mechanism",
        docs: require("../../asset/Vigil Mechanism & Whistle Blower Policy.pdf"),
      },
      {
        id: 13,
        title: "Risk Assessment & Management Policy",
        docs: require("../../asset/Risk Assessment and Management Policy.pdf"),
      },
      {
        id: 14,
        title: "Appointment of Independent Directors",
        docs: require("../../asset/Terms and Conditions of Appointment of Independent Directors.pdf"),
      },
      {
        id: 15,
        title: "Policy on Materiality events",
        docs: require("../../asset/Policy on_Materiality events.pdf"),
      },
      {
        id: 16,
        title: "Policy on Sexual Harassment",
        docs: require("../../asset/Policy on Sexual Harassment.pdf"),
      },
      {
        id: 17,
        title: "Insider Trading Policy",
        docs: require("../../asset/Insider Trading Policy.pdf"),
      },
      {
        id: 18,
        title: "Dealing with Related Party Transactions",
        docs: require("../../asset/Policy on Dealing with Related Party Transactions.pdf"),
      },
    ],
  },
  {
    id: 6,
    title: "Shareholding Pattern",
    logo: images.shareholding,
    child: [
      {
        id: 1,
        title: "Shareholding Pattern 31-03-2024",
        docs: require("../../asset/Shareholding Pattern_31.03.2024.pdf"),
      },
      {
        id: 2,
        title: "Shareholding Pattern 31-03-2025",
        docs: require("../../asset/Shareholding Pattern 31-03-2025.pdf"),
      },
    ],
  },
  {
    id: 7,
    title: "Notices & Announcement",
    logo: images.announcement,
    child: [],
  },
  {
    id: 8,
    title: "Prospectus",
    logo: images.Prospectus,
    child: [],
  },
  {
    id: 9,
    title: "Corporate Governance",
    logo: images.corporategov,
    child: [],
  },
  {
    id: 10,
    title: "Annual Return",
    logo: images.transaction,
    child: [
      {
        id: 1,
        title: "Annual Return 2023-24",
        docs: require("../../asset/Annual Return - 2024.pdf"),
      },
    ],
  },
];

const InvestorDesk = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Vishwas Refoils | Investor Desk</title>
      </Helmet>
      <div className="InvestorDesk_main">
        <div>
          <h1 className="red_heading" style={{ paddingTop: "1rem" }}>
            Investor Desk
          </h1>
          {/* <h1 style={{ textAlign: "center" }}>We Are Comming Soon.</h1> */}
        </div>

        <div className="boxes_main">
          {Data.map((item, index) => {
            return (
              <div className="boxes_inner">
                <Link
                  to={`/Investordesk/${item.id}`}
                  state={{ item }}
                  className="linkOpen"
                >
                  <div>
                    <img
                      style={{ height: "64px", width: "64px" }}
                      src={item.logo}
                      alt="logo"
                    />
                  </div>
                  <div>
                    <h3 style={{ textAlign: "center" }}>{item.title}</h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InvestorDesk;
