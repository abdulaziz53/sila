import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Companies/Style/Companies.css";

const Compananies = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="company_page">
        <div className="company_header">
          <div className="company_nav">
            <Link to="/all_companies">
              <div
                className={
                  pathname === "/all_companies"
                    ? "companyBox_active all_companies "
                    : "companyBox all_companies"
                }
              >
                <div className="con_btn">
                  <i className="all fa-solid fa-bars"></i>
                  <p>All Companies</p>
                </div>
              </div>
            </Link>
            {/* <!-- Subckribtions --> */}
            <Link to="/subckribtions">
              <div
                className={
                  pathname === "/subckribtions"
                    ? "companyBox_active subscription con"
                    : "companyBox subscription"
                }
              >
                <div className="con_btn">
                  <i className="fa-solid fa-dollar-sign"></i>

                  <p>Subscription</p>
                </div>
              </div>
            </Link>

            {/* <!-- Invoice --> */}
            <Link to="/invoice">
              <div
                className={
                  pathname === "/invoice"
                    ? "companyBox_active invoce con"
                    : "companyBox invoce"
                }
              >
                <div className="con_btn">
                  <i className="fa-regular fa-file-lines"></i>

                  <p>Invoice</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Compananies;
