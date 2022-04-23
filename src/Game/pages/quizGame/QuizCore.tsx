import { useContext } from "react"
import Header from "./components/header/Header"
import ShowResult from "./components/result/Result"
import Question from "./components/question/Question"
import { QuizContext } from "../../contexts/QuizContext"

const Quiz:React.FC = ():React.ReactElement => {
  
  const quizContext = useContext(QuizContext)
  const gameOver = quizContext?.state.gameOver
  
  return (
    <>
      {gameOver && (
        <ShowResult />
      )}
      
      {!gameOver && (
        <>
          <Header />
          <Question />
        </>
      )}
    </>
  )
}

export default Quiz
