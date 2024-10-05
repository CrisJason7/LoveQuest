// src/pages/QuestionPage.tsx
import React from "react";

interface QuestionPageProps {
  questionIndex: number;
  questions: {
    id: number;
    text: string;
    options: string[];
  }[];
  handleAnswer: (answer: string) => void;
  handleNext: () => void;
  handlePrev: () => void;
  handleSubmit: () => void;
  answers: { questionId: number; answer: string }[];
}

const QuestionPage: React.FC<QuestionPageProps> = ({
  questionIndex,
  questions,
  handleAnswer,
  handleNext,
  handlePrev,
  handleSubmit,
  answers
}) => {
  const currentQuestion = questions[questionIndex];
  const selectedAnswer = answers.find(
    a => a.questionId === currentQuestion.id
  )?.answer;

  const progressPercentage = ((questionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Progress Bar */}
      <div className="w-full max-w-xl mt-4">
        <div className="w-full bg-gray-300 rounded-full h-3">
          <div
            className="bg-blue-500 h-3 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-right text-sm text-gray-700 mt-2">
          Câu hỏi {questionIndex + 1} / {questions.length}
        </p>
      </div>

      {/* Question Section */}
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg mt-6 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {currentQuestion.text}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`py-3 px-4 rounded-lg text-lg font-medium border-2 
                ${
                  selectedAnswer === option
                    ? "border-blue-600 bg-blue-100 text-blue-600"
                    : "border-gray-300 text-gray-700 hover:bg-gray-200"
                }`}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6 w-full max-w-xl">
        <button
          onClick={handlePrev}
          className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
          disabled={questionIndex === 0}
        >
          Quay lại
        </button>
        <button
          onClick={handleNext}
          className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          disabled={questionIndex === questions.length - 1}
        >
          Tiếp tục
        </button>
      </div>

      {/* Submit Button */}
      {questionIndex === questions.length - 1 && (
        <div className="w-full max-w-xl mt-6">
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 text-lg font-semibold"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionPage;
