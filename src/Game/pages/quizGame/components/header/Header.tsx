import "./header.css"
import { QuizContext } from "../../../../contexts/QuizContext"
import { FC, ReactElement, useContext } from "react"
import { getLifeIcons } from "../../../../helpers/getIcons"

const Header:FC = (): ReactElement => {
  
  const quizContext = useContext(QuizContext)
  
  const score = quizContext?.state.score
  const totalQuestions = quizContext?.state.questions.length 
  const currentQuestionIndex = quizContext?.state.currentQuestionIndex
  const currentQuestionIndexShow = currentQuestionIndex! + 1 
  const life = quizContext!.state.life

  return (
    <>
      <div className="header">
        <span className="score">Pontos: {score}</span>
        <span className="index">Questão {currentQuestionIndexShow} de {totalQuestions}</span>
        <span className="score" style={{marginTop: ".5rem"}}>{getLifeIcons(life)}</span>
      </div>
    </>
  )
}

export default Header
