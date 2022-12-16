import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";

// import "../Invoice/InvoiceTable.css";

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

const UsersTable = () => {
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
            <span style={span}>1</span>
          </td>
          <td>
            <span style={span}>Ilon</span>
          </td>
          <td>
            <span style={span}>musk</span>
          </td>
          <td>
            <span style={span}>ilonmusk</span>
          </td>
          <td>
            <span style={span}>Venture Motor Freight LLC</span>
          </td>
          <td>
            <span style={span}>monitoring manager</span>
          </td>
          <td>
            <span style={span}>Active</span>
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

export default UsersTable;
