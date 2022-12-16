import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";

import "../Subckriptions/SubckriptionsTable.css";

const span = {
  borderRight: "1px solid #004665",
  height: "42px",
  display: "flex",
  alignItems: "center",
};

function Confirm({ openSubInf, handleConfirmSubInf }) {
  return (
    <>
      {/* ! Edit company start */}
      <Box
        className={
          openSubInf ? "confirm_sub-inf show_sub-inf" : "confirm_sub-inf"
        }
      >
        <Box className="sub-inf_confirm-content">
          <Box className="sub-inf-title">
            <Typography>Company subscription information</Typography>
          </Box>

          <Box className="sub-inf_main-block">
            <Box className="sub-inf_main-inf">
              {/* Left Box */}
              <Box className="sub-inf_left-cont">
                <label>Company name:</label>
                <Typography>Venture Motor Freight LLC</Typography>
                <label>Company address:</label>
                <Typography>Chicago IL</Typography>
                <label>Company phone number :</label>
                <Typography>6543219874</Typography>
                <label>Company email address :</label>
                <Typography>vmfsafety@gmail.com</Typography>
                <label>Company start date :</label>
                <Typography>23.02.2022</Typography>
              </Box>

              {/* Right Box */}
              <Box className="sub-inf_right-cont">
                <label>Company’s last subscription date:</label>
                <Typography>21.03.2022</Typography>
                <label>Company’s payment per driver:</label>
                <Typography>80$</Typography>
                <label>Company’s currennt active driver:</label>
                <Typography>125</Typography>
                <label>Company’s currennt status:</label>
                <Typography>active</Typography>
                <button>View company history</button>
              </Box>

              <Box className="sub_invoice-inf">
                <Typography>Unpaid invoices </Typography>
                <Box className="sub_unpaid-invoices">
                  <span>123456</span>
                  <span>2000.00</span>
                  <span>23.03.2022</span>
                  <Box className="sub_unpaid-invoices_btn">
                    <button>Paid</button>
                    <button>Post</button>
                  </Box>
                </Box>
              </Box>

              <Box className="sub-inf_inp">
                <label>SUM:</label>
                <input type="text" placeholder="2000.00$" />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "417px",
              height: "65px",
              borderTop: "3px solid #004665",
            }}
          >
            <button
              className="edit_cont_btn edit_close_btn"
              onClick={() => handleConfirmSubInf(false)}
            >
              Ok
            </button>
          </Box>
        </Box>
      </Box>
      <div
        className="overlay_sub-inf"
        onClick={() => handleConfirmSubInf(false)}
      />
    </>
  );
}

const SubckriptionsTable = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [openSubInf, setOpenSubInf] = React.useState(false);

  const handleConfirmSubInf = (result) => {
    if (result) {
      console.log("some action...");
    }

    setOpenSubInf(false);
  };
  return (
    <>
      <tbody>
        <tr>
          <td>
            <span style={span}>123456</span>
          </td>
          <td>
            <span style={span}>Venture Motor Freight</span>
          </td>
          <td>
            <span style={span}>666 6666 66666</span>
          </td>
          <td>
            <span style={span}>23.03.2022</span>
          </td>
          <td>
            <span style={span}>125</span>
          </td>
          <td>
            <span style={span}>90</span>
          </td>
          <td>
            <span style={span}>23.03.2022</span>
          </td>
          <td>
            <span style={span}>active</span>
          </td>
          <td style={{ display: "flex", alignItems: "center" }}>
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  class="fa-solid fa-file-lines"
                  onClick={() => setOpenSubInf(true)}
                ></i>
              </span>
            </Link>
            <br />
            <br />
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i class="fa-solid fa-toggle-off"></i>
              </span>
            </Link>
            <br />
            <br />
            <Link to="">
              <span style={{ color: "#004665" }}>
                <i class="fa-solid fa-file-arrow-down"></i>
              </span>
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <span style={span}>123456</span>
          </td>
          <td>
            <span style={span}>Venture Motor Freight</span>
          </td>
          <td>
            <span style={span}>666 6666 66666</span>
          </td>
          <td>
            <span style={span}>23.03.2022</span>
          </td>
          <td>
            <span style={span}>125</span>
          </td>
          <td>
            <span style={span}>90</span>
          </td>
          <td>
            <span style={span}>23.03.2022</span>
          </td>
          <td>
            <span style={span}>active</span>
          </td>
          <td style={{ display: "flex", alignItems: "center" }}>
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  class="fa-solid fa-file-lines"
                  onClick={() => setOpenSubInf(true)}
                ></i>
              </span>
            </Link>
            <br />
            <br />
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i class="fa-solid fa-toggle-off"></i>
              </span>
            </Link>
            <br />
            <br />
            <Link to="">
              <span style={{ color: "#004665" }}>
                <i class="fa-solid fa-file-arrow-down"></i>
              </span>
            </Link>
          </td>
        </tr>
      </tbody>
      <Confirm
        openSubInf={openSubInf}
        handleConfirmSubInf={handleConfirmSubInf}
      />
    </>
  );
};

export default SubckriptionsTable;
