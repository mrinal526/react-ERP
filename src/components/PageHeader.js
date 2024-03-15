import React from "react";

const PageHeader = ({ headerText }) => {
    return (
        <div className="w-100 mb-5">
            <h4>{headerText}</h4>
        </div>
    );
};

export default PageHeader;
