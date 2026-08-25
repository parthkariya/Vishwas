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
        title: "Financial Reports 2022-23",
        docs: require("../../asset/Financial Reports 2022-23.pdf"),
      },
      {
        id: 2,
        title: "Financial Reports 2023-24",
        docs: require("../../asset/Financial Reports - 2024.pdf"),
      },
      {
        id: 3,
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
        title: "Annual Report 2022-23",
        docs: require("../../asset/Annual Report 2022-23.pdf"),
      },
      {
        id: 2,
        title: "Annual Report 2023-24",
        docs: require("../../asset/Annual Reports.pdf"),
      },
      {
        id: 3,
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
        title: "Familiarization Programme",
        docs: require("../../asset/Familiarisation_Programme.pdf"),
      },
      {
        id: 9,
        title: "Code of Fair Disclosure",
        docs: require("../../asset/Code of Fair Disclosure of Unpublished Price Sensitive Information.pdf"),
      },
      {
        id: 10,
        title: "Board Diversity Policy",
        docs: require("../../asset/Board Diversity Policy.pdf"),
      },
      {
        id: 11,
        title: "Vigil Mechanism",
        docs: require("../../asset/Vigil Mechanism & Whistle Blower Policy.pdf"),
      },
      {
        id: 12,
        title: "Risk Assessment & Management Policy",
        docs: require("../../asset/Risk Assessment and Management Policy.pdf"),
      },
      {
        id: 13,
        title: "Appointment of Independent Directors",
        docs: require("../../asset/Terms and Conditions of Appointment of Independent Directors.pdf"),
      },
      {
        id: 14,
        title: "Policy on Materiality events",
        docs: require("../../asset/Policy on_Materiality events.pdf"),
      },
      {
        id: 15,
        title: "Policy on Sexual Harassment",
        docs: require("../../asset/Policy on Sexual Harassment.pdf"),
      },
      {
        id: 16,
        title: "Insider Trading Policy",
        docs: require("../../asset/Insider Trading Policy.pdf"),
      },
      {
        id: 17,
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
        title: "Shareholding Pattern 31-03-2023",
        docs: require("../../asset/Shareholding Pattern 31-03-2023.pdf"),
      },
      {
        id: 2,
        title: "Shareholding Pattern 31-03-2024",
        docs: require("../../asset/Shareholding Pattern_31.03.2024.pdf"),
      },
      {
        id: 3,
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
    title: "Offer Documents",
    logo: images.Prospectus,
    child: [
      {
        id: 1,
        title: "DRHP",
        docs: require("../../asset/DRHP.pdf"),
      },
      {
        id: 2,
        title: "Draft Abridged Prospectus",
        docs: require("../../asset/Draft Abridged Prospectus.pdf"),
      },
    ],
  },
  {
    id: 9,
    title: "Corporate Governance",
    logo: images.corporategov,
    child: [
      {
        id: 1,
        title: "Corporate Governance",
        docs: require("../../asset/Corporate Governance.pdf"),
      },
    ],
  },
  {
    id: 10,
    title: "Annual Return",
    logo: images.transaction,
    child: [
      {
        id: 1,
        title: "Annual Return 2022-23",
        docs: require("../../asset/Annual Return 2022-23.pdf"),
      },
      {
        id: 2,
        title: "Annual Return 2023-24",
        docs: require("../../asset/Annual Return - 2024.pdf"),
      },
      {
        id: 3,
        title: "Annual Return 2024-25",
        docs: require("../../asset/Annual Return 2024-25.pdf"),
      },
    ],
  },
  {
    id: 11,
    title: "Board Committees",
    logo: images.committee,
    child: [
      {
        id: 1,
        title: "Board Committees",
        docs: require("../../asset/Board Committees.pdf"),
      },
    ],
  },
  {
    id: 12,
    title: "Board of Directors",
    logo: images.Board_of_Directors,
    child: [
      {
        id: 1,
        title: "Board of Directors",
        docs: require("../../asset/Board of Directors.pdf"),
      },
    ],
  },
  {
    id: 13,
    title: " Investor Grievance Redressal",
    logo: images.Investor_grievance,
    child: [
      {
        id: 1,
        title: "Investor Grievance Redressal",
        docs: require("../../asset/Investor Grievance Redressal.pdf"),
      },
    ],
  },
  {
    id: 14,
    title: "Industry Report",
    logo: images.industry_report,
    child: [
      {
        id: 1,
        title: "Industry Report",
        docs: require("../../asset/Industry Report.pdf"),
      },
    ],
  },
  {
    id: 15,
    title: "Material Creditors",
    logo: images.material_creditor,
    child: [
      {
        id: 1,
        title: " Material Creditors -March 2026",
        docs: require("../../asset/Material Creditors -March 2026.pdf"),
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
