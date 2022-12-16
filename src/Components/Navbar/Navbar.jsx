import * as React from "react";
import { Link } from "react-router-dom";

import "../Navbar/Navbar.css";

import Sila_eld from "../../Assets/Image/Navbar-img/Sila_eld.png";
import notification from "../../Assets/Image/Navbar-img/notification.png";

import Company from "../../Assets/Image/Icons/Company.png";
import Roles from "../../Assets/Image/Icons/Roles.png";
import Users from "../../Assets/Image/Icons/Users.png";
import Assets from "../../Assets/Image/Icons/Assets.png";
import Trucks from "../../Assets/Image/Icons/Trucks.png";
import Drivers from "../../Assets/Image/Icons/Drivers.png";
import Loads from "../../Assets/Image/Icons/Loads.png";
import LOGS from "../../Assets/Image/Icons/LOGS.png";
import IFTA_reports from "../../Assets/Image/Icons/IFTA_reports.png";
import Settings from "../../Assets/Image/Icons/Settings.png";
import Notifications from "../../Assets/Image/Icons/Notifications.png";
import Transactions from "../../Assets/Image/Icons/Transactions.png";
import Avatar from "../../Assets/Image/Icons/Avatar.png";
import Log_out from "../../Assets/Image/Icons/Log_out.png";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <nav className="navigate_top">
          <div className="logo_sila">
            <Link to="/">
              <img src={Sila_eld} alt="photo" />
            </Link>
          </div>
          <div className="navigate_top_right">
            <div className="search">
              <input type="text" placeholder="Main label" />
              <Link to="">
                <i className="search-icon fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
            <div className="notification_icon">
              <Link to="">
                <img src={notification} alt="photo" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="navigate_main_bottom">
          <div className="navigate_bottom">
            <div className="nav-components">
              <Link to="/all_companies">
                <img title="Company" src={Company} alt="" />
              </Link>
              <Link to="/roles">
                <img title="Roles" src={Roles} alt="" />
              </Link>
              <Link to="/users">
                <img title="Users" src={Users} alt="" />
              </Link>
              <Link to="/assets">
                <img title="Assets" src={Assets} alt="" />
              </Link>
              <Link to="/truck">
                <img title="Trucks" src={Trucks} alt="" />
              </Link>
              <Link to="">
                <img title="Drivers" src={Drivers} alt="" />
              </Link>
              <Link to="">
                <img title="Loads" src={Loads} alt="" />
              </Link>
              <Link to="">
                <img title="LOGS" src={LOGS} alt="" />
              </Link>
              <Link to="">
                <img title="IFTA_reports" src={IFTA_reports} alt="" />
              </Link>
              <Link to="">
                <img title="Settings" src={Settings} alt="" />
              </Link>
              <Link to="">
                <img title="Notifications" src={Notifications} alt="" />
              </Link>
              <Link to="">
                <img title="Transactions" src={Transactions} alt="" />
              </Link>
              <Link to="">
                <img title="Avatar" src={Avatar} alt="" />
              </Link>
              <Link to="">
                <img title="Log_out" src={Log_out} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
