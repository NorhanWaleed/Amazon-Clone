import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "../Pages/Layout";
import HomPage from "../Pages/HomPage";

const Router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<HomPage />}>
        </Route>
    </Route>
))
export default Router;