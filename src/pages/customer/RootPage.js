import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import '../../style/admin.css';
import HeaderNavBar from '../../components/navigation/HeaderNavbar';
import AnchorTag from '../../components/Anchortag';
import DashboardPage from '../../pages/customer/Dashboard';
import CustomerShopPage from '../customer/shop/CustomerShopePage';

const CustomerRootPage = () => {
    const match = useRouteMatch();
    const userRole = 'owner'; 

    return (
        <div>
            <HeaderNavBar />
            <div className="admin-page mx-auto mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <div className="list-group side-navigation">
                                <AnchorTag link={`${match.path}/dashboard`} liClassName="" className="list-group-item list-group-item-action" itemValue="Dashboard" />
                                <AnchorTag link={`${match.path}/shop/view`} liClassName="" className="list-group-item list-group-item-action" itemValue="Shop" />
                                <AnchorTag link={`${match.path}/shop/product-category/list`} liClassName="" className="list-group-item list-group-item-action" itemValue="Product Category" />
                                <AnchorTag link={`${match.path}/shop/product/list`} className="list-group-item list-group-item-action" itemValue="Product" />
                                <AnchorTag link={`${match.path}/shop/invoice/list`} className="list-group-item list-group-item-action" itemValue="Order" />
                            </div>
                        </div>
                        <div className="col-10">
                            <Switch>
                                <Route path={`${match.path}/dashboard`} component={DashboardPage} />
                                <Route path={`${match.path}/shop`} component={CustomerShopPage} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerRootPage;