import { Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage/HomePage";
import NewsPage from "../pages/NewsPage/NewsPage";
import NewsContentPage from "../pages/NewsContentPage/NewsContentPage";

export const RouteNav = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <HomePage/>
                }
            />
            <Route
                path="/news"
                element={
                    <NewsPage/>
                }
            />
            <Route
                path="/news/:id"
                element={
                    <NewsContentPage/>
                }
            />
        </Routes>
    );
};