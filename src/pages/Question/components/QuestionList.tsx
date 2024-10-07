import React from "react";
import colors from "../../../constants/colors";

interface QuestionListProps {
  questions: { id: number; text: string; options: string[] }[];
  questionIndex: number;
  answers: { questionId: number; answer: string }[];
  handleSelectQuestion: (index: number) => void;
}

const QuestionList: React.FC<QuestionListProps> = ({
  questions,
  questionIndex,
  answers,
  handleSelectQuestion
}) => {
  const getAnswerStatus = (index: number) => {
    const answer = answers.find(a => a.questionId === questions[index].id);
    if (index === questionIndex) return "current";
    if (answer) return "answered";
    return "not-answered";
  };

  return (
    <div className="flex justify-center space-x-4 mb-8">
      {questions.map((_, index) => {
        const status = getAnswerStatus(index);

        return (
          <button
            key={index}
            className={`w-12 h-12 flex items-center justify-center rounded-full font-bold transition-all duration-300 transform hover:scale-110 shadow-lg
              ${
                status === "current"
                  ? `bg-${colors.primary} text-white ring-4 ring-${colors.secondary} scale-110`
                  : status === "answered"
                  ? `bg-${colors.secondary} text-white border-2 border-${colors.primary}`
                  : `bg-gray-200 text-gray-500`
              }`}
            onClick={() => handleSelectQuestion(index)}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionList;
