import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

import Role from "../Roles/AddNewRoles.module.css";

function Confirm({ text, open, handleConfirm }) {
  return (
    <>
      <Box
        className={
          open
            ? `${Role.roles_confirm} ${Role.roles_show}`
            : `${Role.roles_confirm}`
        }
      >
        <Box className={Role.roles__confirm_content}>
          <Box className={Role.title}>
            <Typography
              sx={{
                color: "#011a38",
                marginLeft: "20px",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "24px",
              }}
            >
              Create new role
            </Typography>
          </Box>
          <Box className={Role.main_box}>
            <Box className={Role.top_input}>
              <label>Role name</label>
              <input
                className={Role.role_input}
                type="text"
                name=""
                id=""
                placeholder="Safety manager"
              />
            </Box>
            <Typography className={Role.role_acc}>Role Access:</Typography>

            <Box className={Role.roles_access}>
              <Box className={Role.table_top_first}>
                <p>Access description</p>
                <p>1-action</p>
                <p>2-action</p>
                <p>3-action</p>
                <p>4-action</p>
              </Box>
              {/* 1 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Companies</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input className={Role.inp_check} type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>delete</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 2 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Company Subscription</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>View</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Download</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 3 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Invoices</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Download</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 4 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Super roles</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>delete</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 5 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Simple roles</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Download</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 6 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Users</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Download</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 7 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Assets</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Download</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 8 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Drivers</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Delete</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 9 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Trucks</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Delete</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
              {/* 10 */}
              <Box className={Role.table_top_second}>
                <Box className={Role.table_top_second__cont}>
                  <p>Dashboard</p>
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Edit</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>change status</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>Delete</p>
                  <input id="" type="checkbox" />
                </Box>
                <Box className={Role.table_top_second__cont}>
                  <p>add</p>
                  <input id="" type="checkbox" />
                </Box>
              </Box>
            </Box>
          </Box>

          {/*  */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
              height: "65px",
              borderTop: "3px solid #004665",
            }}
          >
            <button
              className={Role.roles__ok_btn}
              onClick={() => handleConfirm(false)}
            >
              Ok
            </button>
          </Box>
        </Box>
      </Box>
      <div
        className={Role.roles_overlay}
        onClick={() => handleConfirm(false)}
      />
    </>
  );
}

const AddNewRoles = () => {
  const [open, setOpen] = React.useState(false);

  const handleConfirm = (result) => {
    if (result) {
      console.log("some action...");
    }

    setOpen(false);
  };
  return (
    <>
      <div className={Role.addNewRoles} onClick={() => setOpen(true)}>
        <Link to="">
          <button className={Role.btn}>
            <p>Add New Roles +</p>
          </button>
        </Link>
      </div>
      <Confirm open={open} handleConfirm={handleConfirm} />
    </>
  );
};

export default AddNewRoles;
