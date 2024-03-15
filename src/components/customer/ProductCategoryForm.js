import React from "react";
import AnchorTag from "../../components/Anchortag";
import InputFormGroup from "../input/InputFormGroup";
const ProductCategoryForm = () => {
    return (
        <div className="admin-content mx-auto">
            <div className="w-100 mb-5">
                <AnchorTag link="/app/shop/product-category/list" className="btn btn-primary float-right" itemValue="Back to Category List"></AnchorTag>
                <h4>Create Product Category</h4>
            </div>
            <div className="w-75">
                <form>
                    <div className="container-fluid">
                        <div className="row">
                                <div className="col-6">
                                    <InputFormGroup labelClassName="mb-2" label="Product Name" />
                                </div>
                                <div className="col-6">
                                    <InputFormGroup labelClassName="mb-2" label="Quantity" />
                                </div>
                            <div className="col-12 mt-3">
                                <div className="form-group">
                                    <AnchorTag className="btn btn-warning" itemValue="Back" link="/app/shop/product-category/list" />
                                    <input type="submit" className="btn btn-success ml-3" value="Submit" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductCategoryForm;
