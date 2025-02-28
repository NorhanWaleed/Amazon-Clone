import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import HomPage from "../pages/HomPage";
import RootLayout from "../pages/Layout";
import SignupPage from "../Pages/SignupPage";
import LoginPage from "../Pages/LoginPage";
import ProductsList from "../Pages/ProductsList";

const Router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/signup" element={<SignupPage />}/>
    <Route path="/signin" element={<LoginPage />}/>
    <Route path="/" element={<RootLayout />}>
        <Route path="/products" element={<ProductsList />}/>
        <Route index element={<HomPage />}/>
    </Route>
    </>
))
export default Router;