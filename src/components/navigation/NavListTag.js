import React from "react";
import { Link } from "react-router-dom";

const NavLiTag = ({ className, link, itemValue }) => {
    return (
        <li className="nav-item active">
            <Link className={className} to={link}>{itemValue}</Link>
        </li>
    );
};

export default NavLiTag;
