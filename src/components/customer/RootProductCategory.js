// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ProductCategoryList from "./ProductCategoryList";
// import ProductCategoryView from "./ProductCategoryView";

// const categoryList = [
//   { "id": 1, "name": "Electronic Accessories", "total_products": "12" },
//   { "id": 2, "name": "Clothing", "total_products": "30" },
//   { "id": 3, "name": "Health & Beauty", "total_products": "30" },
//   { "id": 4, "name": "Home & Lifestyle", "total_products": "30" }
// ];

// const RootProductCategory = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/app/shop/product-category/list">
//           <ProductCategoryList categoryList={categoryList} />
//         </Route>
//         <Route path="/app/shop/product-category/view/:categoryId">
//           <ProductCategoryView categoryList={categoryList} />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default RootProductCategory;