import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import "../All_Company/AddNewCompany.css";

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

const inputStyle = {
  display: "flex",
  marginBottom: "15px",
  width: "323px",
  height: "30px",
  border: "3px solid #004665",
  borderRadius: "5px",
};

function Confirm({ text, open, handleConfirm }) {
  return (
    <>
      <Box className={open ? "confirm_all show_all" : "confirm_all"}>
        <Box className="all_confirm-content">
          <Box
            sx={{
              width: "800px",
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

          <Container
            container
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              width: "800px",
              height: "450px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "nowrap",
                alignItems: "center",
                width: "383px",
                height: "335px",
              }}
            >
              <div>
                <Container>
                  <label>Organization name:</label>
                  <input
                    style={inputStyle}
                    type="text"
                    name="check"
                    required="required"
                    placeholder="check"
                    // onChange={handleAddFormChange}
                  />
                </Container>
                <Container>
                  <label>#12345</label>
                  <input
                    style={inputStyle}
                    type="text"
                    name="USDOT"
                    required="required"
                    placeholder="USDOT"
                    // onChange={handleAddFormChange}
                  />
                </Container>
                <Container>
                  <label>Company address:</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Chicago IL "
                  />
                </Container>
                <Container>
                  <label>Authority #:</label>
                  <input style={inputStyle} type="text" placeholder="123456" />
                </Container>
                <Container>
                  <label>MC #:</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="4376473643 "
                  />
                </Container>
              </div>
            </Box>
            <Grid>
              <div>
                <Container>
                  <label>Country:</label>
                  <input
                    style={inputStyle}
                    type="text"
                    name="CompanyAddress"
                    required="required"
                    placeholder="CompanyAddress"
                    // onChange={handleAddFormChange}
                  />
                </Container>
                <Container>
                  <label>State:</label>
                  <input
                    style={inputStyle}
                    type="text"
                    name="PhoneNumber"
                    required="required"
                    placeholder="PhoneNumber"
                    // onChange={handleAddFormChange}
                  />
                </Container>
                <Container>
                  <label>City:</label>
                  <input
                    style={inputStyle}
                    type="text"
                    name="Status"
                    required="required"
                    placeholder="Status"
                    // onChange={handleAddFormChange}
                  />
                </Container>
                <Container>
                  <label>Postal Code:</label>
                  <input
                    style={inputStyle}
                    type="text"
                    name="ActiveDrivers"
                    required="required"
                    placeholder="ActiveDrivers"
                    // onChange={handleAddFormChange}
                  />
                </Container>
                <Container>
                  <label>Home Terminal Zone:</label>
                  <input
                    style={inputStyle}
                    type="text"
                    name="Actions"
                    required="required"
                    placeholder="Actions"
                    // onChange={handleAddFormChange}
                  />
                </Container>
              </div>
            </Grid>
          </Container>

          {/* <button type="submit">add</button> */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "800px",
              height: "65px",
              borderTop: "3px solid #004665",
            }}
          >
            <button
              className="all_cont_btn all_close_btn"
              onClick={() => handleConfirm(false)}
            >
              close
            </button>
            <button
              className="all_cont_btn all_save_btn"
              onClick={() => handleConfirm(true)}
            >
              save
            </button>
          </Box>
        </Box>
      </Box>
      <div className="overlay_all" onClick={() => handleConfirm(false)} />
    </>
  );
}

const AddNewCompany = () => {
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
            width: "120px",
            height: "15px",
            color: "#fff",
            fontWeight: 600,
            fontSize: "12px",
            lineHeight: "15px",
            margin: 0,
          }}
        >
          Add new company +
        </p>
      </button>
      <Confirm open={open} handleConfirm={handleConfirm} />
    </>
  );
};

export default AddNewCompany;
