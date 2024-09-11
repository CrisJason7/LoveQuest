import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import MainLayout from "../layouts/MainLayout";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeContainer />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
