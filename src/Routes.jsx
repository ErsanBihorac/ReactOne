import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { DashboardPage } from "./pages/dashboardPage";
import { RegisterPage } from "./pages/registerPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}