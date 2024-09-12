import { useState } from "react";
import questions from "./question";

const Container = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (iscorrect) => {
        if (iscorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const next =()=>{
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion)
        if (nextQuestion === 10) {
            setShowScore(true)
        }
    }

    return (
        <div className="cont">
            {showScore ? (
                <div className="score-section">
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <div className="question-section">
                    
                    <div className="question-count">
                        <span>
                            Question {currentQuestion + 1}/{questions.length}
                        </span>
                    </div>
                    <div className="question-text">
                        {questions[currentQuestion].questionText}
                    </div>
                        <div className="answer-section"> 
                            {questions[currentQuestion].answerOptions.map((answerOption)=>(
                                <button
                                    onClick={()=> handleAnswerOptionClick(answerOption.isCorrect)}
                                >{answerOption.answerText}</button>
                            ))}
                        </div>
                    <button className="nextQ"
                    onClick={()=>next()}
                    >
                        SkipQuestion
                    </button>
                </div>
            
            )}
        </div>
    );
};

export default Container;