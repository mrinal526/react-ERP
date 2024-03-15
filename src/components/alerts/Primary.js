import React from "react";

const PrimaryAlert = ({ className, alertMessage }) => {
    return (
        <div className={className} role="alert">{alertMessage}</div>
    );
};

export default PrimaryAlert;
