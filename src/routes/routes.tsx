import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Products } from "../pages/Products/Products";
import { ProductManagement } from "../pages/ProductManagement/ProductManagement";
import { Cart } from "../pages/Cart/Cart";
import { About } from "../pages/About/About";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import WrappedCheckoutPage from "../pages/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/products",
    element: <Products></Products>,
  },
  {
    path: "/product-management",
    element: <ProductManagement></ProductManagement>,
  },
  {
    path: "/product-details/:id",
    element: <ProductDetails></ProductDetails>,
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
  {
    path: "/checkout",
    element: <WrappedCheckoutPage></WrappedCheckoutPage>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
]);
export default router;
