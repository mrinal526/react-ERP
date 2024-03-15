import React from "react";
import AnchorTag from "../../components/Anchortag";
import SelectFormGroup from "../../components/input/SelectFormGroup";

const OrderView = () => {
    const productDetails = "The USB 2.0 to SATA 7+15 Pin 2.5 Converter is a versatile adapter designed for individuals who need to connect a 2.5-inch SATA hard drive or solid-state drive (SSD) to a computer via a USB 2.0 port. It’s particularly useful for IT professionals, technicians, or anyone who requires easy access to data storage devices for file transfers, backups, or data recovery tasks. The converter facilitates high-speed data transmission with speeds up to 480 Mbps, ensuring efficient handling of large files.";
    const selectData = [
        { "id": 1, "name": "Paid" },
        { "id": 2, "name": "Not paid" },
    ];

    return (
        <div className="admin-content mx-auto">
            <div className="w-100 mb-5">
                <h4>Order Details</h4>
            </div>
            <div className="w-75">
                <form>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label className="mb-2"> Customer Name</label>
                                    <input type="text" className="form-control" value="Mrinal Sawarn" readOnly />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="mb-2">Product Category</label>
                                    <input type="text" className="form-control" value="Electronics and Accessories" readOnly />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="mb-2">Total</label>
                                    <input type="text" className="form-control" value="238" readOnly />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="mb-2">Order Id</label>
                                    <input type="text" className="form-control" value="201256" readOnly />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="col-6">
                                    <label className="mb-2">Status</label>
                                    <SelectFormGroup labelClassName="mb-4" label="" selectClassName="custom-select custom-select-sm" selectData={selectData} />
                                </div>
                            </div>

                            <div className="col-12 mt-4">
                                <div className="form-group">
                                    <AnchorTag className="btn btn-warning" itemValue="Back to List" link="/app/shop/invoice/list" />
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default OrderView;
