import React, { useState } from "react";
import Category from "../pages/Category/Category";
import { useLocation, useNavigate } from "react-router-dom";

const CategoryContainer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [questionType, setQuestionType] = useState("");

  const { quizType } = location.state as { quizType: string };

  // Các danh mục chủ đề câu hỏi
  const categories = ["Tình yêu", "Gia đình", "Công việc", "Sở thích"];

  // Các loại câu hỏi
  const questionTypes = ["Nam", "Nữ", "Chung"];

  // Xử lý xác nhận
  const handleConfirm = () => {
    alert(`Danh mục: ${category}, Loại câu hỏi: ${questionType}`);
  };

  const handleCategorySelection = (category: string) => {
    if (quizType === "self") {
      // TODO: Tương tác với API
      navigate("/quiz/self", { state: { category } });
    } else if (quizType === "partner") {
      // TODO: Tương tác với API
      navigate("/quiz/partner", { state: { category } });
    }
  };

  return (
    <Category
      category={category}
      setCategory={setCategory}
      questionType={questionType}
      setQuestionType={setQuestionType}
      categories={categories}
      questionTypes={questionTypes}
      handleConfirm={handleConfirm}
    />
  );
};

export default CategoryContainer;
