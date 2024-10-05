import React, { useState } from "react";
import QuestionPage from "../pages/Question/Question";
import { useNavigate } from "react-router-dom";

interface Question {
  id: number;
  text: string;
  options: string[];
}

interface Answer {
  questionId: number;
  answer: string;
}

const QuestionContainer: React.FC = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const navigate = useNavigate();

  const questions: Question[] = [
    {
      id: 1,
      text: "Bạn thích màu gì?",
      options: ["Đỏ", "Xanh", "Vàng", "Tím"]
    },
    {
      id: 2,
      text: "Bạn thích đi du lịch ở đâu?",
      options: ["Núi", "Biển", "Thành phố", "Nông thôn"]
    },
    {
      id: 3,
      text: "Bạn thích loại nhạc gì?",
      options: ["Pop", "Rock", "Jazz", "Cổ điển"]
    }
  ];

  // Hàm lưu câu trả lời của người dùng
  const handleAnswer = (selectedAnswer: string) => {
    const currentQuestionId = questions[questionIndex].id;

    setAnswers(prevAnswers => {
      const updatedAnswers = prevAnswers.filter(
        a => a.questionId !== currentQuestionId
      );
      return [
        ...updatedAnswers,
        { questionId: currentQuestionId, answer: selectedAnswer }
      ];
    });
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

  // Hàm submit câu trả lời lên API
  const handleSubmit = async () => {
    // Gửi câu trả lời lên API
    try {
      const response = await fetch("https://api.example.com/submit-answers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ answers })
      });

      if (!response.ok) {
        throw new Error("Error submitting answers");
      }

      // Điều hướng tới trang kết quả
      navigate("/quiz/result");
    } catch (error) {
      console.error("Failed to submit answers:", error);
    }
  };
  return (
    <QuestionPage
      questionIndex={questionIndex}
      questions={questions}
      handleAnswer={handleAnswer}
      handleSubmit={handleSubmit}
      handleNext={handleNext}
      handlePrev={handlePrev}
      answers={answers}
    />
  );
};

export default QuestionContainer;
