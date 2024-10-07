import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMale,
  faFemale,
  faVenusMars
} from "@fortawesome/free-solid-svg-icons";
import GeneralButton from "../../components/Button/GeneralButton";
import colors from "../../constants/colors"; // Import màu từ file colors.ts

interface CategoryProps {
  selectedCategory: number | null;
  selectedGender: string;
  handleCategoryChange: (id: number) => void;
  handleGenderChange: (gender: string) => void;
  handleCategorySelection: () => void;
}

const questionCategories = [
  { id: 1, name: "Tình yêu", icon: "💖" },
  { id: 2, name: "Công việc", icon: "💼" },
  { id: 3, name: "Sở thích", icon: "🎨" },
  { id: 4, name: "Gia đình", icon: "🏠" }
];

const Category: React.FC<CategoryProps> = ({
  selectedCategory,
  selectedGender,
  handleCategoryChange,
  handleGenderChange,
  handleCategorySelection
}) => {
  return (
    <div
      className="min-h-screen flex flex-col items-center p-8 text-white"
      style={{ paddingTop: "5rem" }}
    >
      <h2 className="text-4xl font-extrabold mb-10">Hãy chọn danh mục!</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
        {questionCategories.map(category => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`relative py-6 px-10 rounded-full shadow-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
            style={{
              backgroundColor:
                selectedCategory === category.id
                  ? colors.tertiary
                  : colors.primary,
              color: selectedCategory === category.id ? "#ffffff" : "#ffffff"
            }}
          >
            <span className="absolute -top-6 -right-6 text-4xl">
              {category.icon}
            </span>
            {category.name}
            {selectedCategory === category.id && (
              <span className="absolute top-2 right-2 text-2xl text-green-700 animate-bounce">
                ✔
              </span>
            )}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="mt-8 text-center">
          <h3 className="text-3xl font-semibold mb-8">
            Bạn muốn chọn loại câu hỏi nào?
          </h3>
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => handleGenderChange("male")}
              className="py-4 px-6 rounded-lg shadow-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-4"
              style={{
                backgroundColor:
                  selectedGender === "male" ? "#005F73" : "#89CFF0",
                color: "#ffffff"
              }}
            >
              <FontAwesomeIcon icon={faMale} className="w-6 h-6" />
              <span>Nam</span>
            </button>

            <button
              onClick={() => handleGenderChange("female")}
              className="py-4 px-6 rounded-lg shadow-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-4"
              style={{
                backgroundColor:
                  selectedGender === "female" ? "#D96C75" : "#FFB6C1",
                color: "#ffffff"
              }}
            >
              <FontAwesomeIcon icon={faFemale} className="w-6 h-6" />
              <span>Nữ</span>
            </button>

            <button
              onClick={() => handleGenderChange("both")}
              className="py-4 px-6 rounded-lg shadow-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-4"
              style={{
                backgroundColor:
                  selectedGender === "both" ? "#9370DB" : "#D8BFD8",
                color: "#ffffff"
              }}
            >
              <FontAwesomeIcon icon={faVenusMars} className="w-6 h-6" />
              <span>Cả hai</span>
            </button>
          </div>
        </div>
      )}

      {selectedCategory && selectedGender && (
        <div className="mt-12">
          <GeneralButton onClick={handleCategorySelection}>
            Tiếp tục
          </GeneralButton>
        </div>
      )}
    </div>
  );
};

export default Category;
