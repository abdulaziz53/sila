import React from "react";
import Roles from "../Components/Roles/Roles";
import RolesTable from "../Components/Roles/RolesTable";

const tableHeaders = [
  "id",
  "Roles name",
  "Role description:",
  "Active users",
  "Role created by:",
  "Status",
  "Actions",
];

const RolesPage = () => {
  return (
    <div>
      <div>
        <Roles
          headers={tableHeaders}
          minCellWidth={120}
          tableContent={<RolesTable />}
        />
      </div>
    </div>
  );
};

export default RolesPage;
