import React from "react";
import InputText from "./InputText";

const InputFormGroup = ({
    label,
    labelClassName,
    inputClassName,
    placeholder,
    value,
    isReadOnly,
    onChange,
    ref
}) => {
    const renderLabel = () => {
        if (label === "" || label === null) {
            return null;
        } else {
            return <label className={labelClassName}>{label}</label>;
        }
    };

    const renderInputText = () => {
        if (isReadOnly) {
            return (
                <input
                    type="text"
                    className={inputClassName}
                    placeholder={placeholder}
                    defaultValue={value}
                    readOnly
                />
            );
        } else {
            return (
                <InputText
                    className={inputClassName}
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                    ref={ref}
                />
            );
        }
    };

    return (
        <div className="form-group">
            {renderLabel()}
            {renderInputText()}
        </div>
    );
};

InputFormGroup.defaultProps = {
    inputClassName: "form-control",
    placeholder: "",
    label: "",
    value: "",
    isReadOnly: false
};

export default InputFormGroup;
