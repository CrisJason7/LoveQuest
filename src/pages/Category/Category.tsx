import React from "react";
import GeneralButton from "../../components/Button/GeneralButton";

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
    <div className="min-h-screen flex flex-col items-center p-8">
      <h2 className="text-4xl font-extrabold text-white mb-10">
        Hãy chọn danh mục!
      </h2>

      {/* Chọn danh mục câu hỏi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
        {questionCategories.map(category => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`relative py-8 px-12 rounded-full shadow-2xl text-white font-bold text-2xl transition-all duration-300 transform hover:scale-110 ${
              selectedCategory === category.id
                ? "bg-yellow-300 text-red-600 border-4 border-red-600"
                : "bg-green-400 hover:bg-green-500"
            }`}
            style={{
              borderRadius: "50%"
            }}
          >
            <span className="absolute -top-8 -right-8 text-6xl">
              {category.icon}
            </span>
            {category.name}
            {selectedCategory === category.id && (
              <span className="absolute top-2 right-2 text-3xl text-green-700 animate-bounce">
                ✔
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Chọn loại câu hỏi */}
      {selectedCategory && (
        <div className="mt-8 text-center">
          <h3 className="text-3xl font-semibold text-white mb-8">
            Bạn muốn chọn loại câu hỏi nào?
          </h3>
          <div className="flex justify-center space-x-10">
            <button
              onClick={() => handleGenderChange("male")}
              className={`py-4 px-8 rounded-lg shadow-lg text-white font-bold text-xl transition-all duration-300 transform hover:scale-110 ${
                selectedGender === "male"
                  ? "bg-blue-600 text-white animate-pulse"
                  : "bg-blue-400 hover:bg-blue-600"
              }`}
            >
              Nam
            </button>
            <button
              onClick={() => handleGenderChange("female")}
              className={`py-4 px-8 rounded-lg shadow-lg text-white font-bold text-xl transition-all duration-300 transform hover:scale-110 ${
                selectedGender === "female"
                  ? "bg-pink-600 text-white animate-pulse"
                  : "bg-pink-400 hover:bg-pink-600"
              }`}
            >
              Nữ
            </button>
            <button
              onClick={() => handleGenderChange("both")}
              className={`py-4 px-8 rounded-lg shadow-lg text-white font-bold text-xl transition-all duration-300 transform hover:scale-110 ${
                selectedGender === "both"
                  ? "bg-purple-600 text-white animate-pulse"
                  : "bg-purple-400 hover:bg-purple-600"
              }`}
            >
              Cả hai
            </button>
          </div>
        </div>
      )}

      {/* Hiển thị lựa chọn */}
      {selectedCategory && selectedGender && (
        <div className="mt-10">
          <GeneralButton onClick={handleCategorySelection}>
            Tiếp tục
          </GeneralButton>
        </div>
      )}
    </div>
  );
};

export default Category;
