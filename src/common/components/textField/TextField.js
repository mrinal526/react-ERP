import React from "react";
import PropTypes from "prop-types";

const TextField = ({ inputType = "text", id = "", className = "form-control", placeholder = "", value = "", onChange = () => {} }) => {
    return (
        <input 
            type={inputType} 
            onChange={onChange} 
            id={id} 
            className={className} 
            placeholder={placeholder} 
            value={value}
        />
    );
};

TextField.propTypes = {
    inputType: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default TextField;
