import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import HomPage from "../pages/HomPage";
import RootLayout from "../pages/Layout";

const Router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<HomPage />}>
        </Route>
    </Route>
))
export default Router;