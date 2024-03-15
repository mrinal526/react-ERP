import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import HeaderNavBar from "../../components/navigation/HeaderNavbar";
import AnchorTag from "../../components/Anchortag";
import AdminShopPage from "../../pages/admin/shop/AdminShopPage";

const AdminRootPage = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <HeaderNavBar />
            <div className="admin-page mx-auto mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <div className="list-group side-navigation">
                                <AnchorTag link={`${path}/`} liClassName="" className="list-group-item list-group-item-action" itemValue="Dashboard"></AnchorTag>
                                <AnchorTag link={`${path}/shop/shop-list`} liClassName="" className="list-group-item list-group-item-action" itemValue="Shop"></AnchorTag>
                                <AnchorTag link={`${path}/settings/role-list`} liClassName="" className="list-group-item list-group-item-action" itemValue="Role"></AnchorTag>
                            </div>
                        </div>
                        <div className="col-10">
                            <Switch>
                                <Route path={`${path}/shop`} component={AdminShopPage}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminRootPage;
