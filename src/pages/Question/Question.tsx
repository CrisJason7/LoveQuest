import React from "react";
import colors from "../../constants/colors";
import QuestionList from "./components/QuestionList";

interface QuestionPageProps {
  questionIndex: number;
  questions: {
    id: number;
    text: string;
    options: string[];
  }[];
  answers: { questionId: number; answer: string }[];
  handleAnswer: (answer: string) => void;
  handlePrev: () => void;
  handleNext: () => void;
  handleSelectQuestion: (index: number) => void;
  handleSubmit: () => void;
  allAnswered: boolean;
}

const QuestionPage: React.FC<QuestionPageProps> = ({
  questionIndex,
  questions,
  answers,
  handleAnswer,
  handlePrev,
  handleNext,
  handleSelectQuestion,
  handleSubmit,
  allAnswered // Nhận trạng thái tất cả đã trả lời
}) => {
  const currentQuestion = questions[questionIndex];

  return (
    <div className="min-h-screen p-4" style={{ paddingTop: "5rem" }}>
      {/* Hiển thị danh sách các câu hỏi */}
      <QuestionList
        questions={questions}
        questionIndex={questionIndex}
        answers={answers}
        handleSelectQuestion={handleSelectQuestion}
      />

      {/* Question Section */}
      <div className="w-full max-w-xl mx-auto mt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {currentQuestion.text}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`py-3 px-4 rounded-lg text-lg font-medium border-2 transition-all duration-300 transform hover:scale-105
                ${
                  answers.find(a => a.questionId === currentQuestion.id)
                    ?.answer === option
                    ? `border-${colors.primary} bg-${colors.primary} bg-opacity-30 text-white shadow-lg`
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6 w-full max-w-xl mx-auto">
        <button
          onClick={handlePrev}
          className="py-2 px-4 rounded-lg text-white transition-all duration-300 hover:opacity-90 shadow-lg transform hover:scale-105"
          disabled={questionIndex === 0}
          style={{
            backgroundColor: questionIndex === 0 ? "#BDBDBD" : colors.secondary
          }}
        >
          Quay lại
        </button>
        <button
          onClick={handleNext}
          className="py-2 px-4 rounded-lg text-white transition-all duration-300 hover:opacity-90 shadow-lg transform hover:scale-105"
          disabled={questionIndex === questions.length - 1}
          style={{
            backgroundColor: colors.primary
          }}
        >
          Tiếp tục
        </button>
      </div>

      {allAnswered && (
        <div className="w-full max-w-xl mx-auto mt-6">
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-lg text-white transition-all duration-300 hover:opacity-90 shadow-lg transform hover:scale-105 text-lg font-semibold"
            style={{
              backgroundColor: colors.tertiary
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionPage;
