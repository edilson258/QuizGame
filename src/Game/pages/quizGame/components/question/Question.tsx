import './question.css';
import Answer from '../answer/Answer';
import {useContext} from "react";
import {FC, ReactElement} from "react";
import {QuizContext, allowedActions} from "../../../../contexts/QuizContext";

const Question:FC = ():ReactElement => {
  const quizContext = useContext(QuizContext);
  const currentQuestion = quizContext?.state.questions[quizContext.state.currentQuestionIndex]
  const answers = quizContext?.state.currentQuestionAnswers
  const dispatch = quizContext?.dispatch
  const selectedAnswer = quizContext?.state.selectedAnswer
  const correctAnswer = quizContext?.state.correctAnswer
  const helpChances = quizContext!.state.helpChances
  const askedHelp = quizContext?.state.askedHelp
  const helpDisabled = helpChances <= 0 
    ? "help-disabled disabled" 
    : null 

  return (
    <>

      <div className="question container">
        <p 
          className="question-text"
        >
          {currentQuestion?.question}
        </p>
        
        <div className="answers">
          { answers?.map((answer, index) => (
              <Answer 
                answer={answer} 
                key={index} 
                index={index} 
                onSelectAnswer={answer => dispatch && dispatch({type:allowedActions.SELECT_ANSWER, payload:answer})}
                selectedAnswer={selectedAnswer}
                correctAnswer={correctAnswer}
                askedHelp={askedHelp}
              />
            ))
          }
        </div>
        
        <div className="action-btns-wrap">
          <div
            className={`help-btn action-btn ${helpDisabled}`}
            onClick={() => dispatch && dispatch({type:allowedActions.ASK_HELP, payload:null})}
          >
            <span className="action-btn-text">Help</span>
            <span className="help-chances">{helpChances}</span>
          </div>

          <div 
            className="next-btn action-btn"
            onClick={() => dispatch && dispatch({type:allowedActions.NEXT_QUESTION, payload:null})}
          >
            <span className="action-btn-text">Next Question</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
