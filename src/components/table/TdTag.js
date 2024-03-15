import React from "react";
import AnchorTag from "../Anchortag";


const TdTag = ({ isLinked, value, linkPrefix, handleDelete }) => {
    if (isLinked === "false") {
        return <td scope="col">{value}</td>;
    } else {
        
        return (
            <td scope="col">
                <AnchorTag link={`${linkPrefix}view/${value}`} className="" itemValue="View" /> 
                
            </td>
        );
    }
};

export default TdTag;
