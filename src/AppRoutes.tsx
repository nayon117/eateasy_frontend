import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><Home/></Layout>} />
            <Route path="*" element={<div><Home/></div>} />
            <Route path="user-profile" element={<div>user Profile</div>} />

        </Routes>
    )
}
export default AppRoutes;