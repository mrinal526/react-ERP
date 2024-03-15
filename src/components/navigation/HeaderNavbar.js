import React from "react";
import { Link } from "react-router-dom";
import NavLiTag from "../navigation/NavListTag";

const HeaderNavBar = () => {
    const navbarText = "Inventory Management"; // Static text assigned here

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand px-3" to="/">{navbarText}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <NavLiTag link="/" className="nav-link" itemValue="Home"></NavLiTag>
                </ul>
            </div>
        </nav>
    );
};

export default HeaderNavBar;
