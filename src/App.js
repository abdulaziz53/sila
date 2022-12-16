// import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
// import Compananies from "./Components/Companies/Companies";
import Navbar from "./Components/Navbar/Navbar";
// import CompanyContextProvider from "./contexts/companyContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <MainRoutes />
        {/* <Compananies /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
