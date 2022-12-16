import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, TextField } from "@mui/material";

const columns = [
  { id: "A", label: "A", width: 90 },
  { id: "USDOT", label: "USDOT", width: 136 },
  { id: "CompanyName", label: "Company name ", width: 178 },
  { id: "CompanyAddress", label: "Company address", width: 196 },
  { id: "PhoneNumber", label: "Phone number", width: 172 },
  { id: "Status", label: "Status", width: 116 },
  { id: "ActiveDrivers", label: "Active drivers", width: 168 },
  { id: "Actions", label: "Actions", width: 124 },
];

function createData(
  A,
  USDOT,
  CompanyName,
  CompanyAddress,
  PhoneNumber,
  Status,
  ActiveDrivers,
  Actions
) {
  return {
    A,
    USDOT,
    CompanyName,
    CompanyAddress,
    PhoneNumber,
    Status,
    ActiveDrivers,
    Actions,
  };
}

const rows = [
  createData(
    "1",
    "123456",
    "Venture Motor Freight",
    "Chicago IL ",
    "665 555 555 555",
    "active ",
    "198",
    "1"
  ),
  createData(
    "2",
    "123456",
    "Venture Motor Freight",
    "Chicago IL ",
    "665 555 555 555",
    "active ",
    "198",
    "1"
  ),
  createData(
    "3",
    "123456",
    "Venture Motor Freight",
    "Chicago IL ",
    "665 555 555 555",
    "active ",
    "198",
    "1"
  ),
  createData(
    "4",
    "123456",
    "Venture Motor Freight",
    "Chicago IL ",
    "665 555 555 555",
    "active ",
    "198",
    "1"
  ),
  createData(
    "5",
    "123456",
    "Venture Motor Freight",
    "Chicago IL ",
    "665 555 555 555",
    "active ",
    "198",
    "1"
  ),
  createData(
    "6",
    "123456",
    "Venture Motor Freight",
    "Chicago IL ",
    "665 555 555 555",
    "active ",
    "198",
    "1"
  ),
  createData(
    "7",
    "123456",
    "Venture Motor Freight",
    "Chicago IL ",
    "665 555 555 555",
    "active ",
    "198",
    "1"
  ),
  createData(
    "8",
    "123456",
    "Venture Motor Freight",
    "Chicago IL ",
    "665 555 555 555",
    "active ",
    "198",
    "1"
  ),
  createData(
    "9",
    "123456",
    "Venture Motor Freight",
    "Chicago IL ",
    "665 555 555 555",
    "active ",
    "198",
    "1"
  ),
  createData(
    "10",
    "123456",
    "Venture Motor Freight",
    "Chicago IL ",
    "665 555 555 555",
    "active ",
    "198",
    "1"
  ),
  createData(
    "11",
    "123456",
    "Venture Motor Freight",
    "Chicago IL ",
    "665 555 555 555",
    "active ",
    "198",
    "1"
  ),
];

export default function Truck() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {/*  sx={{
                        width: "1366px",
                        height: "42px",
                        backgroundColor: "rgba(146, 167, 199, 0.28",
                        borderRadius: "15px",
                      }} */}
      <Paper
        sx={{
          width: 1366,
          height: 590,
          marginLeft: 12,
          marginTop: 3,
          backgroundColor: "#fff",
          borderRadius: "30px",
          //     width: 1400,
          //     marginLeft: 12,
          //     marginTop: 3,
          //     backgroundColor: "#fff",
          //     borderRadius: "30px",
          //     // borderRadius: 0px 30px 0px 0px,
          //     // borderRadius: 30,
        }}
      >
        <Box
          sx={{
            width: 1366,
            height: 53,
            // marginLeft: 12,
            // marginTop: 3,
            backgroundColor: "#FFFFFF",
            borderRadius: "30px",
          }}
        >
          <Box
            style={{
              width: "1366px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              //   justifyContent: "space-between",
            }}
          >
            <Box>
              <TextField
                colSpan={1}
                margin="normal"
                size="small"
                // colSpan={1}
                sx={{ width: 132, height: 30, marginBottom: 3 }}
                id=" "
                // label="Uncontrolled"
                defaultValue="USDOT"
              />
            </Box>
            <Box>
              <TextField
                margin="normal"
                size="small"
                sx={{ width: 228, height: 30, marginBottom: 3 }}
                id="outlined-uncontrolled"
                // label="Uncontrolled"
                defaultValue="Company name"
              />
            </Box>
            <Box>
              <TextField
                colSpan={1}
                margin="normal"
                size="small"
                sx={{ width: 228, height: 30, marginBottom: 3 }}
                id="outlined-uncontrolled"
                // label="Uncontrolled"
                defaultValue="Address:"
              />
            </Box>
            <Box>
              <TextField
                colSpan={1}
                margin="normal"
                size="small"
                sx={{ width: 228, height: 30, marginBottom: 3 }}
                id="outlined-uncontrolled"
                // label="Uncontrolled"
                defaultValue="Phone number:"
              />
            </Box>
          </Box>
        </Box>
        <TableHead>
          <TableRow
          // sx={{
          //   width: "1366px",
          //   height: "42px",
          //   backgroundColor: "rgba(146, 167, 199, 0.28",
          //   borderRadius: "15px",
          // }}
          >
            {columns.map((column) => (
              //   <Box
              //     sx={{
              //       width: "1366px",
              //       height: "42px",
              //       backgroundColor: "rgba(146, 167, 199, 0.28",
              //       borderRadius: "15px",
              //     }}
              //   >
              <TableCell
                key={column.id}
                align={column.align}
                style={{
                  top: 80,
                  minWidth: column.minWidth,
                }}
              >
                {column.label}
              </TableCell>
              //   </Box>
            ))}
          </TableRow>
        </TableHead>
        <TableContainer
          sx={{
            height: 430,
            width: "1366px",
          }}
        >
          <Table
            stickyHeader
            aria-label="sticky table"
            style={{ borderRadius: "15px" }}
          >
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ display: "flex", justifyContent: "center" }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
