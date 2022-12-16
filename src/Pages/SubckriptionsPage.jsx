import React from "react";
import Subckribtions from "../Components/Companies/Subckriptions/Subckribtions";
import SubckriptionsTable from "../Components/Companies/Subckriptions/SubckriptionsTable";

const tableHeaders = [
  "US DOT #",
  "Company name",
  "Phone number",
  "Start date",
  "Current active drivers",
  "Payment per driver",
  "Invoice date",
  "Status",
  "Actions",
];

const SubckriptionsPage = () => {
  return (
    <div>
      <div>
        <Subckribtions
          headers={tableHeaders}
          minCellWidth={120}
          tableContent={<SubckriptionsTable />}
        />
      </div>
    </div>
  );
};

export default SubckriptionsPage;
