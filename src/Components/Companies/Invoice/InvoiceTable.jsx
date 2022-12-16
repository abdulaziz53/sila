import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";

import "../Invoice/InvoiceTable.css";

const span = {
  borderRight: "1px solid #004665",
  height: "42px",
  display: "flex",
  alignItems: "center",
};

function Confirm({ openSubInf, handleConfirmSubInf }) {
  return (
    <>
      <div></div>
    </>
  );
}

const InvoiceTable = () => {
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
            <span style={span}>1234567</span>
          </td>
          <td>
            <span style={span}>Venture Motor Freight</span>
          </td>
          <td>
            <span style={span}>66666666666</span>
          </td>
          <td>
            <span style={span}>safetyvmf@gmail.com</span>
          </td>
          <td>
            <span style={span}>2200.00$</span>
          </td>
          <td>
            <span style={span}>12.01.2022</span>
          </td>
          <td>
            <span style={span}>send</span>
          </td>
          <td style={{ display: "flex", alignItems: "center" }}>
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  class="fa-solid fa-file-pen"
                  //   onClick={() => setOpen(true)}
                ></i>
              </span>
            </Link>
            <br />
            <br />
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i class="fa-solid fa-file-arrow-down"></i>
              </span>
            </Link>
            <br />
            <br />
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i class="fa-regular fa-clock"></i>
              </span>
            </Link>
            <Link to="">
              <span style={{ color: "#004665" }}>
                <i class="fa-solid fa-square-check"></i>
              </span>
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <span style={span}>1234567</span>
          </td>
          <td>
            <span style={span}>Venture Motor Freight</span>
          </td>
          <td>
            <span style={span}>66666666666</span>
          </td>
          <td>
            <span style={span}>safetyvmf@gmail.com</span>
          </td>
          <td>
            <span style={span}>2200.00$</span>
          </td>
          <td>
            <span style={span}>12.01.2022</span>
          </td>
          <td>
            <span style={span}>send</span>
          </td>
          <td style={{ display: "flex", alignItems: "center" }}>
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  class="fa-solid fa-file-pen"
                  //   onClick={() => setOpen(true)}
                ></i>
              </span>
            </Link>
            <br />
            <br />
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i class="fa-solid fa-file-arrow-down"></i>
              </span>
            </Link>
            <br />
            <br />
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i class="fa-regular fa-clock"></i>
              </span>
            </Link>
            <Link to="">
              <span style={{ color: "#004665" }}>
                <i class="fa-solid fa-square-check"></i>
              </span>
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <span style={span}>1234567</span>
          </td>
          <td>
            <span style={span}>Venture Motor Freight</span>
          </td>
          <td>
            <span style={span}>66666666666</span>
          </td>
          <td>
            <span style={span}>safetyvmf@gmail.com</span>
          </td>
          <td>
            <span style={span}>2200.00$</span>
          </td>
          <td>
            <span style={span}>12.01.2022</span>
          </td>
          <td>
            <span style={span}>send</span>
          </td>
          <td style={{ display: "flex", alignItems: "center" }}>
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  class="fa-solid fa-file-pen"
                  //   onClick={() => setOpen(true)}
                ></i>
              </span>
            </Link>
            <br />
            <br />
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i class="fa-solid fa-file-arrow-down"></i>
              </span>
            </Link>
            <br />
            <br />
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i class="fa-regular fa-clock"></i>
              </span>
            </Link>
            <Link to="">
              <span style={{ color: "#004665" }}>
                <i class="fa-solid fa-square-check"></i>
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

export default InvoiceTable;
