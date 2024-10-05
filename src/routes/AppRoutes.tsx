import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import MainLayout from "../layouts/MainLayout";
import CategoryContainer from "../containers/CategoryContainer";
import QuestionContainer from "../containers/QuestionContainer";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/category" element={<CategoryContainer />} />
          {/* Quiz dành cho chính mình */}
          <Route path="/quiz/self" element={<QuestionContainer />} />

          {/* Quiz dành cho người khác */}
          <Route path="/quiz/partner" element={<QuestionContainer />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
