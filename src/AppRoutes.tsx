import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout showHero ><Home/></Layout>} />
            <Route path="*" element={<div><Home/></div>} />
            <Route path="/user-profile" element={<Layout><UserProfilePage /></Layout>} />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />

        </Routes>
    )
}
export default AppRoutes;