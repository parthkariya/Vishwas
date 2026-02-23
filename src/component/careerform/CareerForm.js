import React, { useEffect, useState } from "react";
import "./CareerForm.css";
import axios from "axios";
import { ACCEPT_HEADERS, formurl, positions } from "../../utils/Constant";
import { useDropzone } from "react-dropzone";
import createNotification from "../../utils/Notification";
import { Oval } from "react-loader-spinner";

const CareerForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [pos, setpos] = useState("");
  const [loading, setLoading] = useState(false);

  const email_validation =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const onDrop = (acceptedFiles) => {
    // Store the selected file
    setSelectedFile(acceptedFiles[0]); // Assuming you want to handle a single file
  };
  const clearSelection = () => {
    setSelectedFile(null);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onFileDialogCancel: clearSelection,
  });

  const GetPositions = () => {
    axios
      .get(positions, {
        headers: {
          Accept: ACCEPT_HEADERS,
        },
      })
      .then((res) => {
        setPosition(res.data.data);
        console.log("ress", res.data.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  useEffect(() => {
    GetPositions();
  }, []);
  const HandleSubmit = async () => {
    if (!name) {
      createNotification("error", "Error!", "Please Enter Your Full Name");
    } else if (!number) {
      createNotification("error", "Error!", "Please Enter Your Mobile Number");
    } else if (number.length < 10) {
      createNotification("error", "Error!", "Please Enter Valid Number");
    } else if (!email) {
      createNotification("error", "Error!", "Please Enter Your Email");
    } else if (email_validation.test(email) === false) {
      createNotification("error", "Error!", "Please Enter Valid Email");
    } else if (!pos || pos == "") {
      createNotification("error", "Error", "Please Select Position");
    } else if (!selectedFile || selectedFile == null) {
      createNotification("error", "Error", "Please Select Your Document");
    } else {
      const formdata = new FormData();
      await formdata.append("full_name", name);
      await formdata.append("contact_no", number);
      await formdata.append("email", email);
      await formdata.append("message", message);
      await formdata.append("position_to_apply", pos);
      await formdata.append("cv", selectedFile);

      setLoading(true);

      axios
        .post(formurl, formdata, {
          headers: {
            Accept: ACCEPT_HEADERS,
          },
        })
        .then((res) => {
          if (res.data.success === 1) {
            createNotification("success", "Success!", res.data.message);
            console.log("datooo", res);
            setLoading(false);
            setEmail("");
            setName("");
            setNumber("");
            setpos("");
            setSelectedFile(null);
            setMessage("");
          } else if (res.data.success === 0) {
            createNotification("error", "Error!", res.data.message);
            setLoading(false);
            setName(""); // Clear name
            setNumber(""); // Clear number
            setEmail(""); // Clear email
            setpos(""); // Clear position
            setSelectedFile(null); // Clear selected file
            setMessage(""); // Clear message
          } else return;
        })
        .catch((err) => {
          console.log("ERROR in formsubmit api", err);
          createNotification("error", "Error", err.message);
          setLoading(false);
        });
    }
  };

  return (
    <div className="CareerForm_main">
      <div className="form_head_career">
        <h1
          className="red_heading"
          style={{ marginTop: "0px", paddingTop: "21.44px" }}
        >
          Form
        </h1>
      </div>
      <div>
        <div>
          <div className="formline1_career">
            <div>
              <input
                className="textbox_career"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="textbox_career"
                type="text"
                placeholder="Enter your contact number"
                value={number}
                maxLength={10}
                onChange={(e) => setNumber(e.target.value)}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </div>
          </div>
          <div className="formline2_career">
            <div>
              <input
                className="textbox_career"
                type="email"
                id="email"
                placeholder="Enter your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="" action="#">
              <select
                className="dropdown_career"
                name="position"
                id="lang"
                value={pos}
                onChange={(e) => {
                  setpos(e.target.value); // Update pos state with selected value
                  console.log("Selected Position:", e.target.value); // Log the selected value
                }}
              >
                <option value="">Select Position</option>{" "}
                {/* Default placeholder option */}
                {position.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>
                      {item.position_name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="textarea_career">
            <textarea
              id=""
              name=""
              rows="4"
              cols="50"
              placeholder="Your message to hiring manager."
              className="textarea_career_inner"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="upload_career">
            <h3>Upload your CV : &nbsp;</h3>
            <div
              {...getRootProps({
                className: "dropzone",
                style: {
                  borderWidth: "1px",
                  borderStyle: "dashed",
                  borderColor: "black",
                  padding: "0px 20px",
                  cursor: "pointer",
                },
              })}
            >
              <input {...getInputProps()} />
              {selectedFile ? (
                <p>{selectedFile.name}</p>
              ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
            </div>
          </div>
          <div className="submitbtn_career_form_main">
            <button
              className="red_button shop_now_btn"
              onClick={() => HandleSubmit()}
            >
              {loading ? (
                <Oval
                  visible={true}
                  height="30"
                  width="30"
                  color="#fff"
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
