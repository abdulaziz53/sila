import React from "react";
import All_Companies from "../Components/Companies/All_Company/All_Companies";
import All_CompaniesTable from "../Components/Companies/All_Company/All_CompaniesTable";

const tableHeaders = [
  "id",
  "US DOT #",
  "Company name",
  "Company address",
  "Phone number",
  "Status",
  "Active drivers",
  "Actions",
];

const All_CompaniesPage = () => {
  return (
    <div>
      <div>
        <All_Companies
          headers={tableHeaders}
          minCellWidth={120}
          tableContent={<All_CompaniesTable />}
        />
      </div>
    </div>
  );
};

export default All_CompaniesPage;
