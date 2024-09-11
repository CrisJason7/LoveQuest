import React, { useState } from "react";
import Category from "../pages/Category/Category";

const CategoryContainer: React.FC = () => {
  const [category, setCategory] = useState("");
  const [questionType, setQuestionType] = useState("");

  // Các danh mục chủ đề câu hỏi
  const categories = ["Tình yêu", "Gia đình", "Công việc", "Sở thích"];

  // Các loại câu hỏi
  const questionTypes = ["Nam", "Nữ", "Chung"];

  // Xử lý xác nhận
  const handleConfirm = () => {
    alert(`Danh mục: ${category}, Loại câu hỏi: ${questionType}`);
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
