import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import AddNewUsers from "./AddNewUsers";

import "../Users/Users.css";

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

const createHeaders = (headers) => {
  return headers.map((item) => ({
    text: item,
    ref: useRef(),
  }));
};

const Users = ({ headers, minCellWidth, tableContent }) => {
  const [tableHeight, setTableHeight] = useState("auto");
  const [activeIndex, setActiveIndex] = useState(null);
  const tableElement = useRef(null);
  const columns = createHeaders(headers);

  useEffect(() => {
    setTableHeight(tableElement.current.offsetHeight);
  }, []);

  const mouseDown = (index) => {
    setActiveIndex(index);
  };

  const mouseMove = useCallback(
    (e) => {
      const gridColumns = columns.map((col, i) => {
        if (i === activeIndex) {
          const width = e.clientX - col.ref.current.offsetLeft;

          if (width >= minCellWidth) {
            return `${width}px`;
          }
        }
        return `${col.ref.current.offsetWidth}px`;
      });

      tableElement.current.style.gridTemplateColumns = `${gridColumns.join(
        " "
      )}`;
    },
    [activeIndex, columns, minCellWidth]
  );

  const removeListeners = useCallback(() => {
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("mouseup", removeListeners);
  }, [mouseMove]);

  const mouseUp = useCallback(() => {
    setActiveIndex(null);
    removeListeners();
  }, [setActiveIndex, removeListeners]);

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseup", mouseUp);
    }

    return () => {
      removeListeners();
    };
  }, [activeIndex, mouseMove, mouseUp, removeListeners]);
  return (
    <>
      <div
        style={{
          height: "100%",
          minWidth: "1400px",
          marginLeft: "96px",
          marginTop: "13px",
        }}
      >
        <Box
          className="users_filter"
          sx={{
            width: "1380px",
            height: "60px",
            borderRadius: "20px",
            marginBottom: "15px",
            padding: "0px 17px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box style={box_select} sx={{ width: "250px" }}>
            <select sx={{ width: "236px" }} style={select} name="" id="">
              <option value="">Mail Label</option>
            </select>
          </Box>
          {/*  */}
          <Box style={box_select} sx={{ width: "250px" }}>
            <select sx={{ width: "236px" }} style={select} name="" id="">
              <option value="">Mail Label</option>
            </select>
          </Box>
          {/*  */}
          <Box style={box_select} sx={{ width: "250px" }}>
            <select sx={{ width: "236px" }} style={select} name="" id="">
              <option value="">Mail Label</option>
            </select>
          </Box>
          {/*  */}
          <Box style={box_select} sx={{ width: "150px" }}>
            <select sx={{ width: "136px" }} style={select} name="" id="">
              <option value="">Mail Label</option>
            </select>
          </Box>
          {/* <Link to="">
            <button>Add new user +</button>
          </Link> */}
          <AddNewUsers />
        </Box>

        <div
          style={{
            height: "100%",
            minWidth: "1400px",
            // marginLeft: "96px",
            backgroundColor: "#FFFFFF",
            marginTop: "-4px",
          }}
        >
          <div className="container">
            <div className="table-wrapper">
              <table
                className="resizeable-table users_table"
                ref={tableElement}
              >
                <thead>
                  <tr>
                    {columns.map(({ ref, text }, i) => (
                      <th
                        style={{
                          backgroundColor: "rgba(146, 167, 199, 0.28)",
                        }}
                        ref={ref}
                        key={text}
                      >
                        <span>{text}</span>
                        <div
                          style={{
                            height: tableHeight,
                          }}
                          onMouseDown={() => mouseDown(i)}
                          className={`resize-handle ${
                            activeIndex === i ? "active" : "idle"
                          }`}
                        />
                      </th>
                    ))}
                  </tr>
                </thead>
                {tableContent}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
