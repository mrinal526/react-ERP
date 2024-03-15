import React from "react";
import SearchTableHead from "./SearchTableHead";
import TdTag from "./TdTag";
import SearchActionTd from "../table/SearchTableActionTd";

const SearchDataTable = ({ className, columnList, tableData, actionLinkPrefix }) => {
    return (
        <table className={className}>
            <SearchTableHead columnList={columnList} />
            <tbody>
                {tableData.map((data, index) => (
                    <tr key={index}>
                        {Object.keys(data).map((key, index) => (
                            <TdTag key={index} value={data[key]} isLinked={false} />
                        ))}
                        <SearchActionTd value={data["id"]} isLinked={true} linkPrefix={actionLinkPrefix} />
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SearchDataTable;
