import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="*" element={<div>Home</div>} />
            <Route path="user-profile" element={<div>user Profile</div>} />

        </Routes>
    )
}
export default AppRoutes;