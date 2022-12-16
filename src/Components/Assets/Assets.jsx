import { Box } from "@mui/system";
import React from "react";

const box_select = {
  height: "50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
};

const select = {
  height: "30px",
  border: "3px solid #FFFFFF",
  borderRadius: "5px",
  background: "none",
  fontWeight: 600,
  fontSize: "10px",
  lineHeight: "15px",
  color: "#FFFFFF",
};

const label = {
  fontWeight: 600,
  fontSize: "10px",
  lineHeight: "12px",
  color: "#FFFFFF",
};

const Assets = () => {
  return (
    <div>
      <Box
        sx={{
          width: "1404px",
          height: "620px",
          margin: "13px 96px 0",
          padding: "0",
        }}
      >
        <Box
          sx={{
            width: "1380px",
            height: "60px",
            backgroundColor: "rgba(146, 167, 199, 0.28)",
            borderRadius: "20px",
            marginBottom: "15px",
            padding: "0px 17px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box style={box_select} sx={{ width: "250px" }}>
            <label style={label} for="Company name:">
              Company name:
            </label>

            <select sx={{ width: "236px" }} style={select} name="" id="">
              <option value="">Mail Label</option>
            </select>
          </Box>
          {/*  */}
          <Box style={box_select} sx={{ width: "250px" }}>
            <label style={label} for="Driver name:">
              Driver name:
            </label>

            <select sx={{ width: "236px" }} style={select} name="" id="">
              <option value="">Mail Label</option>
            </select>
          </Box>
          {/*  */}
          <Box style={box_select} sx={{ width: "150px" }}>
            <label style={label} for="Truck number:">
              Truck number:
            </label>

            <select sx={{ width: "136px" }} style={select} name="" id="">
              <option value="">Mail Label</option>
            </select>
          </Box>
          {/*  */}
          <Box style={box_select} sx={{ width: "200px" }}>
            <label style={label} for="VIN">
              VIN
            </label>

            <select sx={{ width: "186px" }} style={select} name="" id="">
              <option value="">Mail Label</option>
            </select>
          </Box>
          {/*  */}
          <Box style={box_select} sx={{ width: "150px" }}>
            <label style={label} for="status">
              Status
            </label>

            <select sx={{ width: "136px" }} style={select} name="" id="">
              <option value="">Mail Label</option>
            </select>
          </Box>
          {/*  */}
          <Box style={box_select} sx={{ width: "150px" }}>
            <label style={label} for="load status">
              Load status
            </label>

            <select sx={{ width: "136px" }} style={select} name="" id="">
              <option value="">Mail Label</option>
            </select>
          </Box>
          {/*  */}
          <Box style={box_select} sx={{ width: "150px" }}>
            <label style={label} for="Last hours">
              Last hours
            </label>

            <select sx={{ width: "136px" }} style={select} name="" id="">
              <option value="">10</option>
            </select>
          </Box>
        </Box>
        <Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12130.073411312022!2d72.7924497!3d40.5301358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sru!2skg!4v1670213553207!5m2!1sru!2skg"
            width="1404px"
            height="530"
            style={{
              borderRadius: "30px",
              padding: "0",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </div>
  );
};

export default Assets;
