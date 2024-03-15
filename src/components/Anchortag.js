import React from "react";
import { Link } from "react-router-dom";

const AnchorTag = ({ className, link, itemValue }) => {
    return (
        <Link className={className} to={link}>
            {itemValue}
        </Link>
    );
};

export default AnchorTag;
