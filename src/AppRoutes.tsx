import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import AuthCallbackPage from "./pages/AuthCallbackPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><Home/></Layout>} />
            <Route path="*" element={<div><Home/></div>} />
            <Route path="/user-profile" element={<div>user Profile</div>} />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />

        </Routes>
    )
}
export default AppRoutes;