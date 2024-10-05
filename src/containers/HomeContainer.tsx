import React from "react";
import Home from "../pages/Home/Home"; // Import component trình bày
import { useNavigate } from "react-router-dom";

const HomeContainer: React.FC = () => {
  const navigate = useNavigate();

  const handleQuizSelection = (quizType: string) => {
    // Điều hướng đến trang category và lưu trạng thái quizType (self/partner)
    navigate("/category", { state: { quizType } });
  };

  return <Home handleQuizSelection={handleQuizSelection} />;
};

export default HomeContainer;
