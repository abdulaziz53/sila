import { Box } from "@mui/material";
import React from "react";

import "../Invoice/CreateNewInvoice.css";

import Architect_invoice from "../../../Assets/Image/Architect_invoice.png";

const in_btn = {
  cursor: "pointer",
  position: "absolute",
  width: "151px",
  height: "30px",
  left: "1349px",
  top: "98px",
  border: "3px solid #FFFFFF",
  borderRadius: "3px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column-reverse",
  background: "none",
  padding: 0,
};

function Confirm({ text, open, handleConfirm }) {
  return (
    <>
      <Box className={open ? "in_confirm in_show" : "in_confirm"}>
        <Box className="in_confirm-content">
          <Box>
            <img className="inv_img" src={Architect_invoice} alt="" />
          </Box>
        </Box>
      </Box>
      <div className="in_overlay" onClick={() => handleConfirm(false)} />
    </>
  );
}

const CreateNewInvoice = () => {
  const [open, setOpen] = React.useState(false);

  const handleConfirm = (result) => {
    if (result) {
      console.log("some action...");
    }

    setOpen(false);
  };

  return (
    <>
      <button style={in_btn} onClick={() => setOpen(true)}>
        <p
          style={{
            display: "flex",
            width: "120px",
            height: "15px",
            color: "#fff",
            fontWeight: 600,
            fontSize: "12px",
            lineHeight: "15px",
            margin: 0,
          }}
        >
          Create new invoice +
        </p>
      </button>
      <Confirm open={open} handleConfirm={handleConfirm} />
    </>
  );
};

export default CreateNewInvoice;
