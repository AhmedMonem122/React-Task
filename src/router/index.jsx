import { Fragment } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../components/Layout";
import Home from "../pages/Home/Home";
import CategoriesPage from "../pages/Categories/CategoriesPage";
import CategoryProducts from "../components/CategoryProducts/CategoryProducts";
import ContactPage from "../pages/Contact/ContactPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="categoryProducts/:id" element={<CategoryProducts />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Fragment>
  )
);

export default router;
