import type {FC, ReactElement} from "react"
import QuizCore from "./Game/pages/quizGame/QuizCore"
import {QuizProvider} from "./Game/contexts/QuizContext"

const App:FC = ():ReactElement => {
  return (
    <>
      <QuizProvider>
        <QuizCore />
      </QuizProvider>
    </>
  );
}

export default App;
