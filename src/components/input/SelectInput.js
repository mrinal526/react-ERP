import React from "react";

const SelectInput = ({ className, id, selectData }) => {
    return (
        <select className={className} id={id}>
            <option>Choose...</option>
            {selectData.map((data, index) => (
                <option value={data.id} key={index}>{data.name}</option>
            ))}
        </select>
    );
};

SelectInput.defaultProps = {
    selectData: []
};

export default SelectInput;
