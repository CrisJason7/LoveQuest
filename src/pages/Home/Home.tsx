import React from "react";

interface HomeProps {
  handleQuizSelection: (quizType: string) => void;
}

const Home: React.FC<HomeProps> = ({ handleQuizSelection }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Phần 1: Gồm 2 button lớn */}
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg text-xl transition-all duration-300"
          onClick={() => handleQuizSelection("self")}
        >
          Tự trả lời câu hỏi
        </button>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg text-xl transition-all duration-300"
          onClick={() => handleQuizSelection("partner")}
        >
          Tạo câu hỏi cho người khác
        </button>
      </div>

      {/* Phần 2: Bạn có thể thêm nội dung khác ở đây */}
      <div className="mt-12">
        <p className="text-gray-700 text-lg">Phần 2 của trang Home</p>
      </div>
    </div>
  );
};

export default Home;
