import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Orders } from "../pages/Orders";
import { Profile } from "../pages/Profile";
import { AuthPrivate } from './AuthPrivate'
import { RequireAuth } from "./RequireAuth";

export const Routers = () => {


    return (
        <Routes>
            <Route caseSensitive path="/fooddelivery/" element={<Home />} />
            <Route caseSensitive path="/fooddelivery/orders" element={<Orders />} />
            <Route caseSensitive path="/fooddelivery/profile" element={
                <RequireAuth>
                    <Profile />
                </RequireAuth>
            } />
        </Routes>
    );
}