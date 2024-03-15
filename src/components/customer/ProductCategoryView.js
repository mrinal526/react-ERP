import React from "react";
import AnchorTag from "../../components/Anchortag";

const ProductCategoryView = () => {
    const productDetails = "The USB 2.0 to SATA 7+15 Pin 2.5 Converter is a versatile adapter designed for individuals who need to connect a 2.5-inch SATA hard drive or solid-state drive (SSD) to a computer via a USB 2.0 port. It’s particularly useful for IT professionals, technicians, or anyone who requires easy access to data storage devices for file transfers, backups, or data recovery tasks. The converter facilitates high-speed data transmission with speeds up to 480 Mbps, ensuring efficient handling of large files.";

    return (
        <div className="admin-content mx-auto">
            <div className="w-100 mb-5">
                <h4>Product Category Details</h4>
            </div>
            <div className="w-75">
                <form>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label className="mb-2">Name</label>
                                    <input type="text" className="form-control" value="USB 2.0 to Sata 7+15 Pin 2.5 Converter .." readOnly/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label className="mb-2">Description</label>
                                    <textarea className="form-control" value={productDetails} rows="8" readOnly/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="mb-2">Category</label>
                                    <input type="text" className="form-control" value="Electronics and Accessories" readOnly/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="mb-2">Price</label>
                                    <input type="text" className="form-control" value="238" readOnly/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="mb-2">Total Products</label>
                                    <input type="text" className="form-control" value="12" readOnly/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="mb-2">Stock Amount</label>
                                    <input type="text" className="form-control" value="20" readOnly/>
                                </div>
                            </div>

                            <div className="col-12 mt-4">
                                <div className="form-group">
                                    <AnchorTag className="btn btn-warning" itemValue="Back to List" link="/app/shop/product-category/list"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </form>
            </div>
            
        </div>
    );
};

export default ProductCategoryView;
