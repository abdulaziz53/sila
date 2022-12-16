import * as React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
import { Box } from "@mui/system";

import Compananies from "../Companies";
import SubckriptionsCreateNewInvoice from "./SubckriptionsCreateNewInvoice";

import "../All_Company/All_companies.css";

const all_input = {
  height: "53px",
  display: "flex",
  flexDirection: "column",
};

const input = {
  height: "30px",
  border: " 3px solid #004665",
  borderRadius: "5px",
  color: "#004665",
};

const inp_label = {
  color: "rgba(23, 23, 23, 0.76)",
  fontWeight: 600,
  fontSize: "10px",
  lineHeight: "12px",
  color: "#004665",
};

//

const box_select = {
  height: "50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
};

const select = {
  height: "30px",
  border: " 3px solid #004665",
  borderRadius: "5px",
  background: "none",
  fontWeight: 600,
  fontSize: "10px",
  lineHeight: "15px",
  color: "#004665",
};

const label = {
  fontWeight: 600,
  fontSize: "10px",
  lineHeight: "12px",
  color: "#004665",
};

const createHeaders = (headers) => {
  return headers.map((item) => ({
    text: item,
    ref: useRef(),
  }));
};

const Subckribtions = ({ headers, minCellWidth, tableContent }) => {
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
      <Compananies />

      <SubckriptionsCreateNewInvoice />
      <div style={{ minWidth: "1400px", height: "100%" }}>
        <Box
          sx={{
            height: "100%",
            minWidth: "1400px",
            marginLeft: "96px",
            backgroundColor: "#FFFFFF",
            marginTop: "-4px",
          }}
        >
          <Box
            sx={{
              minWidth: "1366px",
              height: "53px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px 17px 15px 17px",
            }}
          >
            <Box
              sx={{
                width: "146px",
              }}
              style={all_input}
            >
              <label style={inp_label}> US DOT #</label>
              <input
                style={input}
                sx={{ with: "132px" }}
                type="text"
                placeholder="123456"
              />
            </Box>
            {/*  */}
            <Box
              sx={{
                width: "242px",
              }}
              style={all_input}
            >
              <label style={inp_label}>Company name:</label>
              <input
                style={input}
                sx={{ with: "228px" }}
                type="text"
                placeholder="123456"
              />
            </Box>
            {/*  */}
            <Box
              sx={{
                width: "242px",
              }}
              style={all_input}
            >
              <label style={inp_label}>Address:</label>
              <input
                style={input}
                sx={{ with: "228px" }}
                type="text"
                placeholder="Chicago IL"
              />
            </Box>
            {/*  */}
            <Box sx={{ width: "242px" }} style={all_input}>
              <label style={inp_label}>Phone number:</label>
              <input
                style={input}
                sx={{ with: "228px" }}
                type="text"
                placeholder="Chicago IL"
              />
            </Box>
            {/*  */}
            <Box style={box_select} sx={{ width: "171px" }}>
              <label style={label} for="status">
                Status
              </label>

              <select sx={{ width: "157px" }} style={select} name="" id="">
                <option value="">active</option>
              </select>
            </Box>
          </Box>
          {/*  */}
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
                  className="resizeable-table sub_table"
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
              {/* <button onClick={resetTableCells}>Reset</button> */}
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Subckribtions;
