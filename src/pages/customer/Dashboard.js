import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";

const DashboardPage = () => {
    const [userRole] = useState("owner");

    return (
        <div className="admin-content mx-auto">
            <PageHeader headerText="Welcome to Dashboard"/>
            <div className="w-75">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <div className="dash-summary-cell">
                                <p><b>Total Products</b></p>
                                <p>1100</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="dash-summary-cell">
                                <p><b>Total Orders</b></p>
                                <p>4200</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="dash-summary-cell">
                                <p><b>Total Sell Today</b></p>
                                <p>112500</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
