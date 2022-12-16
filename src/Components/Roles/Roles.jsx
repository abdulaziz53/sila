import * as React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
import { Box } from "@mui/system";

import "../Roles/Roles.css";
import AddNewRoles from "./AddNewRoles";

const createHeaders = (headers) => {
  return headers.map((item) => ({
    text: item,
    ref: useRef(),
  }));
};

const Roles = ({ headers, minCellWidth, tableContent }) => {
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
      <AddNewRoles />
      <div style={{ minWidth: "1400px", height: "100%", marginTop: "13px" }}>
        <Box
          sx={{
            height: "100%",
            minWidth: "1400px",
            marginLeft: "96px",
            backgroundColor: "#FFFFFF",
            // marginTop: "24px",
          }}
        >
          {/* <Box
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
      
            <Box sx={{ width: "242px" }} style={all_input}>
              <label style={inp_label}>Phone number:</label>
              <input
                style={input}
                sx={{ with: "228px" }}
                type="text"
                placeholder="Chicago IL"
              />
            </Box>
          
            <Box style={box_select} sx={{ width: "171px" }}>
              <label style={label} for="status">
                Status
              </label>

              <select sx={{ width: "157px" }} style={select} name="" id="">
                <option value="">active</option>
              </select>
            </Box>
          </Box> */}
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
                  className="resizeable-table roles_table"
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

export default Roles;
