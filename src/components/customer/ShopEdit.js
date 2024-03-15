import React, { useState } from "react";
import AnchorTag from "../../components/Anchortag";
import InputFormGroup from "../input/InputFormGroup";
import TextFormGroup from "../../common/components/textFormGroup";
import Banner from "../../common/banner/banner";

const ShopEdit = () => {
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const [shopName, setShopName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleShopUpdate = () => {
        setSuccessMessage("Shop info updated!");
        setShowSuccessMsg(true);
    };

    const handleOnChange = (e) => {
        setShopName(e.target.value);
    };

    const SuccessBanner = () => {
        return (
            <div className="col-12">
                <Banner
                    type="info"
                    message={successMessage}
                    onClose={() => setShowSuccessMsg(false)}
                />
            </div>
        );
    };

    return (
        <div className="admin-content mx-auto">
            <div className="w-100 mb-5">
                <h4>Shop Details</h4>
            </div>
            <div className="w-75">
                <div className="container-fluid">
                    <div className="row">
                        {showSuccessMsg && <SuccessBanner />}

                        <div className="col-12 mt-3">
                            <p>
                                <b>Shop Information</b>
                            </p>
                        </div>
                        <div className="col-6">
                            <TextFormGroup
                                labelClassName="mb-2"
                                onChange={handleOnChange}
                                inputClassName="form-control"
                                label="Shop Name"
                                value={shopName}
                            />
                        </div>

                        <div className="col-12 mt-4">
                            <div className="form-group">
                                <AnchorTag
                                    className="btn btn-sm btn-warning mr-3"
                                    itemValue="View Shop"
                                    link="/app/shop/view"
                                />
                                <input
                                    type="submit"
                                    className="btn btn-sm btn-primary"
                                    value="Update"
                                    onClick={handleShopUpdate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopEdit;
