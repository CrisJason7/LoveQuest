import React, { useState } from "react";
import QuestionPage from "../pages/Question/Question";

const QuestionContainer: React.FC = () => {
  // Sample data (có thể lấy từ props hoặc API)
  const questions = [
    {
      id: 1,
      text: "Bạn thích ăn gì?",
      options: ["Pizza", "Bún", "Phở", "Cơm"]
    },
    {
      id: 2,
      text: "Màu yêu thích của bạn?",
      options: ["Xanh", "Đỏ", "Vàng", "Tím"]
    },
    {
      id: 3,
      text: "Bạn thích đi du lịch ở đâu?",
      options: ["Biển", "Núi", "Rừng", "Thành phố"]
    },
    {
      id: 4,
      text: "Môn thể thao yêu thích của bạn?",
      options: ["Bóng đá", "Cầu lông", "Tennis", "Bóng rổ"]
    }
  ];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<
    { questionId: number; answer: string }[]
  >([]);

  const handleAnswer = (answer: string) => {
    const currentQuestionId = questions[questionIndex].id;
    const updatedAnswers = answers.filter(
      a => a.questionId !== currentQuestionId
    );
    setAnswers([...updatedAnswers, { questionId: currentQuestionId, answer }]);
  };

  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const handleSelectQuestion = (index: number) => {
    setQuestionIndex(index);
  };

  const handleSubmit = () => {
    console.log("Submitted answers:", answers);
  };

  // Kiểm tra xem tất cả các câu hỏi đã được trả lời chưa
  const allAnswered = answers.length === questions.length;

  return (
    <QuestionPage
      questionIndex={questionIndex}
      questions={questions}
      answers={answers}
      handleAnswer={handleAnswer}
      handleNext={handleNext}
      handlePrev={handlePrev}
      handleSelectQuestion={handleSelectQuestion}
      handleSubmit={handleSubmit}
      allAnswered={allAnswered}
    />
  );
};

export default QuestionContainer;
