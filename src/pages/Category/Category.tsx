import React from "react";

interface CategoryProps {
  category: string;
  setCategory: (value: string) => void;
  questionType: string;
  setQuestionType: (value: string) => void;
  categories: string[];
  questionTypes: string[];
  handleConfirm: () => void;
}

const Category: React.FC<CategoryProps> = ({
  category,
  setCategory,
  questionType,
  setQuestionType,
  categories,
  questionTypes,
  handleConfirm
}) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Chọn chủ đề và loại câu hỏi
        </h1>

        {/* Chọn danh mục chủ đề */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Danh mục chủ đề:
          </label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Chọn danh mục --</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Chọn loại câu hỏi */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Loại câu hỏi:
          </label>
          <select
            value={questionType}
            onChange={e => setQuestionType(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Chọn loại câu hỏi --</option>
            {questionTypes.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Nút xác nhận */}
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
            onClick={handleConfirm}
            disabled={!category || !questionType} // Disable nút nếu chưa chọn đủ
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
