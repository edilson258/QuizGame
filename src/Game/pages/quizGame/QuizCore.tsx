import './quiz.module.css'
import {useContext} from "react";
import Header from './components/header/Header'
import ShowResult from './components/result/Result'
import Question from './components/question/Question'
import {QuizContext} from '../../contexts/QuizContext'

const Quiz:React.FC = ():React.ReactElement => {
  const quizContext = useContext(QuizContext)
  const showResult = quizContext?.state.showResult
  
  return (
    <>
      {showResult && (
        <ShowResult />
      )}
      
      {!showResult && (
        <>
          <Header />
          <Question />
        </>
      )}
    </>
  )
}

export default Quiz
