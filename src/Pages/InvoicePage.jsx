import React from "react";
import Invoice from "../Components/Companies/Invoice/Invoice";
import InvoiceTable from "../Components/Companies/Invoice/InvoiceTable";

const tableHeaders = [
  "Invoice number",
  "Company name",
  "Company number",
  "email",
  "SUM",
  "Invoice send date",
  "Status",
  "Actions",
];

const InvoicePage = () => {
  return (
    <div>
      <div>
        <Invoice
          headers={tableHeaders}
          minCellWidth={120}
          tableContent={<InvoiceTable />}
        />
      </div>
    </div>
  );
};

export default InvoicePage;
