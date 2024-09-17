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

    const startOver = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    };


    return (
        <div className="cont">
            {showScore ? (  
                <div className="score-section">
               <h2>{score <= 5 && " OOPS!"} {score >= 6 && " Awesome!"} </h2> 
                   <h4> You scored {score} out of {questions.length}</h4>
                    <div className="btn-restart">
                        <button className="startOver" onClick={startOver}>Start Over</button>
                    </div>
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