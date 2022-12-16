import React from "react";

import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";

import Violation_white from "../../../Assets/Image/All_Company-img/Violation_white.png";

import "../All_Company/All_CompaniesTable.css";

const td = {
  // marginBottom: "15px",
};

const span = {
  borderRight: "1px solid #004665",
  height: "42px",
  display: "flex",
  alignItems: "center",
  // paddingTop: "5px",
  // paddingBottom: "5px",
};

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

function Confirm({
  open,
  openStatus,
  openDelete,
  handleConfirm,
  handleStatus,
  handleDelete,
}) {
  return (
    <>
      {/* ! Edit company start */}
      <Box className={open ? "confirm_edit show_edit" : "confirm_edit"}>
        <Box className="edit_confirm-content">
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
                width: "260px",
                height: "24px",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "24px",
                color: "#011A38",
                margin: "20px 0px 20px 33px",
              }}
            >
              Edit company information:
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
              className="edit_cont_btn edit_close_btn"
              onClick={() => handleConfirm(false)}
            >
              close
            </button>
            <button
              className="edit_cont_btn edit_save_btn"
              onClick={() => handleConfirm(true)}
            >
              save
            </button>
          </Box>
        </Box>
      </Box>
      <div className="overlay_edit" onClick={() => handleConfirm(false)} />

      {/* ! Edit company end */}

      {/* ! Status company start */}

      <Box
        className={openStatus ? "confirm_status show_status" : "confirm_status"}
      >
        <Box className={"status_confirm_content"}>
          <Box
            className="status_main_block"
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
                width: "260px",
                height: "24px",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "24px",
                color: "#011A38",
                margin: "20px 0px 20px 33px",
              }}
            >
              Change company status:
            </Typography>
          </Box>
          <Box
            className="status_content"
            sx={{
              width: "800px",
              height: "246px",
              display: "flex",
              alignItems: " center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box className="status_img" sx={{ marginBottom: "15px" }}>
              <img src={Violation_white} alt="" />
            </Box>
            <Box className="status_text" sx={{ marginBottom: "19px" }}>
              <p>Please enter password permission: </p>
            </Box>
            <Box
              className="status_input"
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>Password:</label>
              <input type="text" placeholder="Password12234 " />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "800px",
              height: "65px",
              borderTop: "3px solid #004665",
              margin: 0,
            }}
          >
            <button
              className="edit_cont_btn edit_close_btn"
              onClick={() => handleStatus(false)}
            >
              close
            </button>
            <button
              className="edit_cont_btn edit_save_btn"
              onClick={() => handleStatus(true)}
            >
              save
            </button>
          </Box>
        </Box>
      </Box>

      <div className={"overlay_status"} onClick={() => handleStatus(false)} />
      {/* ! Status company end */}

      {/* ! Delete Company start */}
      <Box
        className={openDelete ? "confirm_delete show_delete" : "confirm_delete"}
      >
        <Box className={"delete_confirm_content"}>
          <Box
            className="delete_main_block"
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
                width: "260px",
                height: "24px",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "24px",
                color: "#011A38",
                margin: "20px 0px 20px 33px",
              }}
            >
              Delete company:
            </Typography>
          </Box>
          <Box
            className="delete_content"
            sx={{
              width: "800px",
              height: "246px",
              display: "flex",
              alignItems: " center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box className="delete_img" sx={{ marginBottom: "15px" }}>
              <img src={Violation_white} alt="" />
            </Box>
            <Box className="delete_text" sx={{ marginBottom: "19px" }}>
              <p>Please enter password permission:</p>
            </Box>
            <Box
              className="delete_input"
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>Password:</label>
              <input type="text" placeholder="Password12234 " />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "800px",
              height: "65px",
              borderTop: "3px solid #004665",
              margin: 0,
            }}
          >
            <button
              className="edit_cont_btn edit_close_btn"
              onClick={() => handleDelete(false)}
            >
              close
            </button>
            <button
              className="edit_cont_btn edit_save_btn"
              onClick={() => handleDelete(true)}
            >
              save
            </button>
          </Box>
        </Box>
      </Box>

      <div className={"overlay_delete"} onClick={() => handleDelete(false)} />

      {/* ! Delete Company end */}
    </>
  );
}

const All_CompaniesTable = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [open, setOpen] = React.useState(false);

  const [openStatus, setOpenStatus] = React.useState(false);

  const [openDelete, setOpenDelete] = React.useState(false);

  const handleConfirm = (result) => {
    if (result) {
      console.log("some action...");
    }

    setOpen(false);
  };

  const handleStatus = (status) => {
    if (status) {
      console.log("some action...");
    }

    setOpenStatus(false);
  };

  const handleDelete = (result) => {
    if (result) {
      console.log("some action...");
    }

    setOpenDelete(false);
  };

  return (
    <>
      <tbody>
        <tr>
          <td style={td}>
            <span style={span}>1</span>
          </td>
          <td>
            <span style={span}>123456</span>
          </td>
          <td>
            <span style={span}>Venture Motor Freight</span>
          </td>
          <td>
            <span style={span}>Chicago IL</span>
          </td>
          <td>
            <span style={span}>665 555 555 555</span>
          </td>
          <td>
            <span style={span}>active</span>
          </td>
          <td>
            <span style={span}>198</span>
          </td>
          <td style={{ display: "flex", alignItems: "center" }}>
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  class="fa-solid fa-file-pen"
                  onClick={() => setOpen(true)}
                ></i>
              </span>
            </Link>
            <br />
            <br />
            <Link to="">
              <span style={{ color: "#004665", marginRight: "8px" }}>
                <i
                  class="fa-solid fa-toggle-off"
                  onClick={() => setOpenStatus(true)}
                ></i>
              </span>
            </Link>
            <br />
            <br />
            <Link to="">
              <span style={{ color: "#004665" }}>
                <i
                  class="fa-solid fa-trash"
                  onClick={() => setOpenDelete(true)}
                ></i>
              </span>
            </Link>
          </td>
        </tr>
      </tbody>
      <Confirm
        open={open}
        handleConfirm={handleConfirm}
        openStatus={openStatus}
        handleStatus={handleStatus}
        openDelete={openDelete}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default All_CompaniesTable;
