import React from "react";
import { Route, Routes } from "react-router-dom";

import AddNewCompany from "./Components/Companies/All_Company/AddNewCompany";
import All_Companies from "./Components/Companies/All_Company/All_Companies";
import CreateNewInvoice from "./Components/Companies/Invoice/CreateNewInvoice";
import SubckriptionsCreateNewInvoice from "./Components/Companies/Subckriptions/SubckriptionsCreateNewInvoice";
import AddNewRoles from "./Components/Roles/AddNewRoles";
import All_CompaniesPage from "./Pages/All_CompaniesPage";
import AssetsPage from "./Pages/AssetsPage";
import CompaniesPage from "./Pages/CompaniesPage";
import InvoicePage from "./Pages/InvoicePage";
import RolesPage from "./Pages/RolesPage";
import SubckriptionsPage from "./Pages/SubckriptionsPage";
import UsersPage from "./Pages/UsersPage";
// import TruckPage from "./Pages/TruckPage";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/companies"
          element={<CompaniesPage /> && <All_Companies />}
        />
        <Route path="/all_companies" element={<All_CompaniesPage />} />
        <Route
          path="/all_companies:/addnewcompany"
          element={<AddNewCompany />}
        />
        <Route path="/subckribtions" element={<SubckriptionsPage />} />
        <Route
          path="/subckribtions:/subckriptionscreatenewinvoice"
          element={<SubckriptionsCreateNewInvoice />}
        />
        <Route path="/invoice" element={<InvoicePage />} />
        <Route
          path="/invoice:/createnewinvoicepage"
          element={<CreateNewInvoice />}
        />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/roles:/addnewroles" element={<AddNewRoles />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/assets" element={<AssetsPage />} />
        {/* <Route path="/truck" element={<TruckPage />} /> */}
      </Routes>
    </>
  );
};

export default MainRoutes;
