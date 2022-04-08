import "./result.css"
import {FC, ReactElement, useContext} from "react"
import {QuizContext, allowedActions} from "../../../../contexts/QuizContext"

const ShowResult:FC = ():ReactElement => {
  
  const quizContext = useContext(QuizContext)
  const totalQuestions = quizContext?.state.questions.length
  const correctAnswers = quizContext?.state.assertedAnswersCount
  const score = quizContext?.state.score 
  const dispatch = quizContext?.dispatch
  
  const calcOfStars = (correctAnswers:number|null|undefined, totalQuestions:number|null|undefined):string => {
    const assertPercetage = correctAnswers && totalQuestions && (correctAnswers * 100) / totalQuestions
    let stars:string = 'No stars! 😓'
    stars = assertPercetage && assertPercetage > 0  ? '⭐' : stars
    stars = assertPercetage && assertPercetage > 49 ? '⭐⭐' : stars
    stars = assertPercetage && assertPercetage > 79 ? '⭐⭐⭐' : stars
    
    return stars
  }

  return (
    <>
      <div className="result-wrap">
        
        <div className="result-header">
          <p>Congratulations 👏👏👏</p>
        </div>
        
        <div className="result-body container">
          <small>{calcOfStars(correctAnswers, totalQuestions)}</small>
          <span>You've got {correctAnswers} of {totalQuestions} questions</span>
          <small>Score: {score}</small>
          
          <button 
            className="reset-btn"
            onClick={() => dispatch && dispatch({type:allowedActions.RESET_GAME, payload:null})}
          >
            Play Again
          </button>

        </div>
      </div>
    </>
  )
}

export default ShowResult
