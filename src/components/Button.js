import React from "react";

const Button = ({ className, dataTarget, dataToggle, text }) => {
    return (
        <button className={className} data-target={dataTarget} data-toggle={dataToggle}>
            {text}
        </button>
    );
};

Button.defaultProps = {
    dataToggle: "",
    dataTarget: ""
};

export default Button;
