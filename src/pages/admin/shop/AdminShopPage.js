import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import "../../../style/admin.css";
import ShopList from "../../../components/admin/shop/ShopList";
import ShopForm from "../../../components/admin/shop/ShopForm";
import ShopView from "../../../components/admin/shop/ShopView";

const AdminShopPage = () => {
    let { path } = useRouteMatch();

    return (
        <div className="w-100">
            <Switch>
                <Route exact path={`${path}/shop-list`} component={ShopList}/>
                <Route exact path={`${path}/shop-create`} component={ShopForm}/>
                <Route exact path={`${path}/view/:shopdId`} component={ShopView}/>
            </Switch>
        </div>
    );
};

export default AdminShopPage;
