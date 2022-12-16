import React from "react";
import { Box, Typography } from "@mui/material";

import "../Subckriptions/Subckriptions.css";

const add_btn = {
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

const all_input = {
  height: "53px",
  display: "flex",
  flexDirection: "column",
};

const inp_label = {
  color: "rgba(23, 23, 23, 0.76)",
  fontWeight: 600,
  fontSize: "10px",
  lineHeight: "12px",
  color: "#004665",
};

const input = {
  height: "30px",
  borderRadius: "5px",
  border: "3px solid #004665",
  color: "#004665",
};

function Confirm({ text, open, handleConfirm }) {
  return (
    <>
      <Box className={open ? "confirm show" : "confirm"}>
        <Box className="confirm-content">
          <Box
            sx={{
              width: "400px",
              height: "65px",
              display: "flex",
              alignItems: "center",
              borderBottom: "3px solid #004665",
            }}
          >
            <Typography
              sx={{
                width: "220px",
                height: "24px",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "24px",
                color: "#011A38",
                margin: "20px 0px 20px 33px",
              }}
            >
              Create new invoice
            </Typography>
          </Box>
          <Box
            sx={{
              width: "400px",
              height: "225px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "339px",
                height: "53px",
                marginBottom: "15px",
              }}
              style={all_input}
            >
              <label style={inp_label}>Choose company:</label>
              <input
                style={input}
                sx={{ with: "325px" }}
                type="text"
                placeholder="Venture Motor Freight LLC"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                widht: "160px",
                height: "55px",
                marginBottom: "15px",
              }}
            >
              <Box
                sx={{
                  width: "167px",
                  height: "53px",
                }}
                style={all_input}
              >
                <label style={inp_label}>from:</label>
                <input
                  style={input}
                  sx={{ with: "153px" }}
                  type="text"
                  placeholder="1"
                />
              </Box>
              <Box
                sx={{
                  width: "167",
                  height: "53px",
                }}
                style={all_input}
              >
                <label style={inp_label}>to:</label>
                <input
                  style={input}
                  sx={{ with: "153px" }}
                  type="text"
                  placeholder="2"
                />
              </Box>
            </Box>
            <Box
              sx={{
                width: "339px",
                height: "53px",
              }}
              style={all_input}
            >
              <label style={inp_label}>SUM:</label>
              <input
                style={input}
                sx={{ with: "325px" }}
                type="text"
                placeholder="2000.00$"
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "400px",
              height: "65px",
              borderTop: "3px solid #004665",
            }}
          >
            <button className="ok_btn" onClick={() => handleConfirm(false)}>
              Ok
            </button>
          </Box>
        </Box>
      </Box>
      <div className="overlay" onClick={() => handleConfirm(false)} />
    </>
  );
}

const SubckriptionsCreateNewInvoice = () => {
  const [open, setOpen] = React.useState(false);

  const handleConfirm = (result) => {
    if (result) {
      console.log("some action...");
    }

    setOpen(false);
  };

  return (
    <>
      <button style={add_btn} className="button" onClick={() => setOpen(true)}>
        <p
          style={{
            display: "flex",
            // alignItems: "center",
            // flexDirection: "row",
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

export default SubckriptionsCreateNewInvoice;
