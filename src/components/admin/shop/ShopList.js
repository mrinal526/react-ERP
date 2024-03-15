import React from "react";
import "../../../style/admin.css";
import AnchorTag from "../../../components/Anchortag";
import Table from "../../../components/table/Table";

const ShopList = () => {
    const columnList = ["ID", "Name", "Owner", "Employee", "Status", "Action"];
    const tableData = [
        {"id": 1, "name": "Sixads Cor.", "owner": "hasan08sust@gmail.com", "employee": "50", "status": "Active"},
        {"id": 2, "name": "Digital IT", "owner": "farzana.26@gmail.com", "employee": "0", "status": "Active"},
    ];

    return (
        <div className="admin-content mx-auto">
            <div className="w-100 mb-5">
                <AnchorTag link="/admin/shop/shop-create" className="btn btn-warning float-right" itemValue="Create Shop"></AnchorTag>
                <h4>Shop List</h4>
            </div>
            <Table className="table table-striped" columnList={columnList} tableData={tableData} actionLinkPrefix=""></Table>
        </div>
    );
};

export default ShopList;
