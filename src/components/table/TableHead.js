import React from "react";
import ThTag from "./ThTag";

const TableHead = ({ columnList }) => {
    return (
        <thead>
            <tr>
                {columnList.map((value, index) => (
                    <ThTag value={value} key={index} />
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
