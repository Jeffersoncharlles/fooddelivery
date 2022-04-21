import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export const Routers = () => {

    return (
        <Routes>
            <Route caseSensitive path="/" element={<Home />} />
        </Routes>
    );
}