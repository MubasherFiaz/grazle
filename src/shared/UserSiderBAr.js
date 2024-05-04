import React from "react";
import { Link, NavLink } from "react-router-dom";

const UserSiderBAr = () => {
  return (
    <div>
      <div class="card p-3 shadow " style={{ heigh: "100%" }}>
        <div class="users_account_details extra-dashboard-menu">
          <div class="ed_menu_list">
            <ul className="p-0">
              <li class="mb-2">
                <NavLink
                  class=" ps-3"
                  to="/user"
                  style={{ textDecoration: "none" }}
                >
                  Personal Information
                </NavLink>
              </li>
              <li class="mb-2">
                <NavLink
                  class=" ps-3"
                  style={{ textDecoration: "none" }}
                  to="/order "
                >
                  My Orders
                </NavLink>
              </li>
              <li class="mb-2">
                <NavLink
                  class=" ps-3"
                  style={{ textDecoration: "none" }}
                  to="/address "
                >
                  Manage Address
                </NavLink>
              </li>
              <li class="mb-2">
                <NavLink
                  class=" ps-3"
                  style={{ textDecoration: "none" }}
                  to="/payment"
                >
                  Payment Method
                </NavLink>
              </li>
              <li class="mb-2">
                <NavLink
                  class=" ps-3"
                  style={{ textDecoration: "none" }}
                  to="/password "
                >
                  Password Manager
                </NavLink>
              </li>
              <li class="mb-2">
                <NavLink class=" ps-3 text-decoration-none" to="/logout">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSiderBAr;
