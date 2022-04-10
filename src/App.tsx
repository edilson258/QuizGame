import "./Game/pages/global.css"
import type {FC, ReactElement} from "react"
import QuizCore from "./Game/pages/quizGame/index"
import ChooseTopic from "./Game/pages/chooseTopic/index"
import {QuizProvider} from "./Game/contexts/QuizContext"
import {UniversalProvider} from "./Game/contexts/UniversalContext"
import {
  Route,
  Routes
} from "react-router-dom";

const App:FC = ():ReactElement => {
  return (
    <>
      <UniversalProvider>
        <Routes>
          <Route
            path="/"
            element={<ChooseTopic />}
          >
          </Route>
            <Route
              path="/play"
              element={
                <QuizProvider>
                  <QuizCore />
                </QuizProvider>
              }
            >
            </Route>
        </Routes>
      </UniversalProvider>
    </>
  );
}

export default App;
