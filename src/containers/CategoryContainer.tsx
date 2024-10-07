import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Category from "../pages/Category/Category";

const CategoryContainer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { quizType } = location.state as { quizType: string };

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedGender, setSelectedGender] = useState<string>("");

  const handleCategoryChange = (id: number) => {
    setSelectedCategory(id);
  };

  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
  };

  const handleCategorySelection = () => {
    if (quizType === "self") {
      // TODO: Tương tác với API
      navigate("/quiz/self");
    } else if (quizType === "partner") {
      // TODO: Tương tác với API
      navigate("/quiz/partner");
    }
  };

  return (
    <Category
      selectedCategory={selectedCategory}
      selectedGender={selectedGender}
      handleCategoryChange={handleCategoryChange}
      handleGenderChange={handleGenderChange}
      handleCategorySelection={handleCategorySelection}
    />
  );
};

export default CategoryContainer;
