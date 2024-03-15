import React from "react";
import TableHead from "./TableHead";
import TdTag from "./TdTag";

const Table = ({ className, columnList, tableData, allowAction = true, actionLinkPrefix, handleDelete }) => {
    const renderAction = (data) => {
        if (allowAction) {
            return <TdTag value={data["id"]} isLinked="true" linkPrefix={actionLinkPrefix}></TdTag>;
        }
    };

    return (
        <table className={className}>
            <TableHead columnList={columnList} />
            <tbody>
                {tableData.map((data, index) => (
                    <tr key={index}>
                        {Object.keys(data).map((key, index) => (
                            <TdTag key={index} value={data[key]} isLinked="false" />
                        ))}
                        {renderAction(data)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
