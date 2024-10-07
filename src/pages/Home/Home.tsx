import React from "react";
import colors from "../../constants/colors";

interface HomeProps {
  handleQuizSelection: (quizType: string) => void;
}

const Home: React.FC<HomeProps> = ({ handleQuizSelection }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1
        className="text-4xl font-bold mb-8"
        style={{ color: colors.textPrimary }}
      >
        Từng câu hỏi, một hành trình kết nối tình yêu của bạn
      </h1>

      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-8">
        <Button
          label="Tự trả lời câu hỏi"
          color="secondary"
          onClick={() => handleQuizSelection("self")}
        />
        <Button
          label="Tạo câu hỏi cho người khác"
          color="tertiary"
          onClick={() => handleQuizSelection("partner")}
        />
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
  color: keyof typeof colors;
  onClick: () => void;
}) => (
  <button
    style={{ backgroundColor: colors[color] }}
    className="w-64 hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-lg shadow-lg text-xl transition-all duration-300 transform hover:scale-105"
    onClick={onClick}
  >
    {label}
  </button>
);
