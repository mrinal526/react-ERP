import React from "react";
import SelectInput from "./SelectInput";

const SelectFormGroup = ({ label, labelClassName, selectClassName, selectData }) => {
    const renderLabel = () => {
        if (label === "" || label === null) {
            return null;
        } else {
            return <label className={labelClassName}>{label}</label>;
        }
    };

    return (
        <div className="form-group">
            {renderLabel()}
            <SelectInput className={selectClassName} id="" selectData={selectData} />
        </div>
    );
};

export default SelectFormGroup;
