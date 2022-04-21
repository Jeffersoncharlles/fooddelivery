import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Orders } from "../pages/Orders";
import { Profile } from "../pages/Profile";
import { AuthPrivate } from './AuthPrivate'
import { RequireAuth } from "./RequireAuth";

export const Routers = () => {


    return (
        <Routes>
            <Route caseSensitive path="/" element={<Home />} />
            <Route caseSensitive path="/orders" element={<Orders />} />
            <Route caseSensitive path="/profile" element={
                <RequireAuth>
                    <Profile />
                </RequireAuth>
            } />
        </Routes>
    );
}