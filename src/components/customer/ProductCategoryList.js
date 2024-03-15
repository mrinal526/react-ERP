import React from "react";
import { Link } from "react-router-dom";
import Table from "../table/Table";
import AnchorTag from "../../components/Anchortag";
import InputFormGroup from "../../components/input/InputFormGroup";
import SelectFormGroup from "../../components/input/SelectFormGroup";

const ProductCategoryList = () => {
    const columnList = ["ID", "Name", "Total Product", "Action"];
    const tableData = [
        { "id": 1, "name": "Electronic Accessories", "total_products": "12" },
        { "id": 2, "name": "Clothing", "total_products": "30" },
        { "id": 3, "name": "Health & Beauty", "total_products": "30" },
        { "id": 4, "name": "Home & Lifestyle", "total_products": "30" }
    ];

    // Function to generate the action link for each row
    const generateActionLink = (id) => `/app/shop/product-category/view/${id}`;

    return (
        <div className="admin-content mx-auto">
            <div className="w-100 mb-5">
                <Link to="/app/shop/product-category/create" className="btn btn-warning float-right">Create Category</Link>
                <h4>Product Category List</h4>
            </div>
            <Table
                className="table table-striped"
                columnList={columnList}
                tableData={tableData}
                actionLinkPrefix=""
                generateActionLink={generateActionLink}
            />
        </div>
    );
};

export default ProductCategoryList;
