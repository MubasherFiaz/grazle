import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const DropDownMenu = ({ link, label }) => {
  return (
    <li className="p-2" id="dropDownMenuItem">
      <Link class="dropdown-item" to={link || `#`}>
        <i class="fas fa-home me-2"></i>
        {label}
      </Link>
    </li>
  );
};

export default DropDownMenu;
