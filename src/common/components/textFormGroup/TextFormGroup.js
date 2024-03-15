import React from "react";
import PropTypes from "prop-types";
import TextField from "../textField";

const TextFormGroup = ({ inputType = "text", id = "", inputClassName = "form-control", placeholder = "", value = "", onChange = () => {}, label = "", labelClassName = "" }) => {
    return (
        <div className="form-group">
            {label && <label className={labelClassName}>{label}</label>}
            <TextField inputType={inputType} id={id} className={inputClassName} onChange={onChange} placeholder={placeholder} value={value}/>
        </div>
    );
};

TextFormGroup.propTypes = {
    inputType: PropTypes.string,
    id: PropTypes.string,
    inputClassName: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    labelClassName: PropTypes.string
};

TextFormGroup.defaultProps = {
    inputType: "text",
    id: "",
    inputClassName: "form-control",
    placeholder: "",
    value: "",
    onChange: () => {},
    label: "",
    labelClassName: ""
};

export default TextFormGroup;
