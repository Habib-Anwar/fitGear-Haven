import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./routes/routes";
import { store } from "./redux/store";
import { CartProvider } from "./pages/Cart/CartContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </CartProvider>
  </React.StrictMode>
);
