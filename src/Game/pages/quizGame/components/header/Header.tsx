import "./header.css"
import {QuizContext} from "../../../../contexts/QuizContext"
import {FC, ReactElement, useContext} from "react"

const Header:FC = ():ReactElement => {
  
  const quizContext = useContext(QuizContext)
  const score = quizContext?.state.score
  const totalQuestions = quizContext?.state.questions.length 
  const currentQuestionIndex = quizContext?.state.currentQuestionIndex
  const currentQuestionIndexShow = currentQuestionIndex! + 1 
  const life = quizContext?.state.life

  const calcOfLife = (life:number|undefined):string => {
    switch (life) {
      case 3: return "❤️❤️❤️"
      case 2: return "❤️❤️"
      case 1: return "❤️"
      default: return ""
    }
  }

  return (
    <>
      <div className="header">
        <span className="score">Score: <span className="score-amount">{score}</span></span>
        <span className="index">Question {currentQuestionIndexShow} of {totalQuestions}</span>
        <span className="score" style={{marginTop: ".5rem"}}>{calcOfLife(life)}</span>
      </div>
    </>
  )
}

export default Header
