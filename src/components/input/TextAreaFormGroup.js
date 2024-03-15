import React from "react";
import TextArea from "./TextArea";

const TextAreaFormGroup = ({ labelClassName, label, inputClassName, rows, cols }) => {
    return (
        <div className="form-group">
            <label className={labelClassName}>{label}</label>
            <TextArea className={inputClassName} rows={rows} cols={cols} />
        </div>
    );
};

TextAreaFormGroup.defaultProps = {
    rows: 3,
    cols: 10,
    className: "form-control"
};

export default TextAreaFormGroup;
