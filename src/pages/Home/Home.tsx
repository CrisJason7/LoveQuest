import React from "react";

interface HomeProps {
  handleQuizSelection: (quizType: string) => void;
}

const Home: React.FC<HomeProps> = ({ handleQuizSelection }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Phần 1: Gồm 2 button lớn */}
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-8">
        <Button
          label="Tự trả lời câu hỏi"
          color="blue"
          onClick={() => handleQuizSelection("self")}
        />
        <Button
          label="Tạo câu hỏi cho người khác"
          color="green"
          onClick={() => handleQuizSelection("partner")}
        />
      </div>

      {/* Phần 2: Bạn có thể thêm nội dung khác ở đây */}
      <div className="mt-12">
        <p className="text-gray-700 text-lg">Phần 2 của trang Home</p>
      </div>
    </div>
  );
};

export default Home;

const Button = ({
  label,
  color,
  onClick
}: {
  label: string;
  color: string;
  onClick: () => void;
}) => (
  <button
    className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg text-xl transition-all duration-300`}
    onClick={onClick}
  >
    {label}
  </button>
);
