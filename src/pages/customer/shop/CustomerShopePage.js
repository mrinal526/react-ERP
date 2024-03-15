import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ShopView from "../../../components/customer/ShopView";
import ShopEdit from "../../../components/customer/ShopEdit";
import ProductCategoryList from "../../../components/customer/ProductCategoryList";
import ProductCategoryForm from "../../../components/customer/ProductCategoryForm";
import ProductCategoryView from "../../../components/customer/ProductCategoryView";
import ProductList from "../../../components/customer/ProductList";
import ProductForm from "../../../components/customer/ProductForm";
import ProductView from "../../../components/customer/ProductView";
import OrderList from "../../../components/customer/OrderList";
import InvoiceForm from "../../../components/customer/InvoiceForm";
import OrderView from "../../../components/customer/OrderView";

const CustomerShopPage = () => {
    let { path } = useRouteMatch();

    return (
        <div className="w-100">
            <Switch>
                <Route exact path={`${path}/view`} component={ShopView}/>
                <Route exact path={`${path}/edit`} component={ShopEdit}/>
                <Route exact path={`${path}/product-category/list`} component={ProductCategoryList}/>
                <Route exact path={`${path}/product-category/create`} component={ProductCategoryForm}/>
                <Route exact path={`${path}/product-category/view/:id`} component={ProductCategoryView}/>
                <Route exact path={`${path}/product/list`} component={ProductList}/>
                <Route exact path={`${path}/product/create`} component={ProductForm}/>
                <Route exact path={`${path}/product/view/:productId`} component={ProductView}/>
                <Route exact path={`${path}/invoice/list`} component={OrderList}/>
                <Route exact path={`${path}/invoice/create`} component={InvoiceForm}/>
                <Route exact path={`${path}/invoice/view/:orderId`} component={OrderView}/>
            </Switch>
        </div>
    );
};

export default CustomerShopPage;
