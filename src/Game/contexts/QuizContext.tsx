import {data as questions} from '../randomdata'
import shuffleAnswers from "../helpers/suffleAnswers";
import {createContext, ReactNode, useReducer} from 'react'

export enum allowedActions {
  NEXT_QUESTION,
  SELECT_ANSWER,
  RESET_GAME,
  ASK_HELP,
}
export type Action = {
  type:allowedActions,
  payload:string|null
}
export type Dispatch = (action:Action) => void
export const QuizContext = 
  createContext<
    {
      state:StateInterface; 
      dispatch:Dispatch
    } | null 
>(null)

interface StateInterface {
  questions:Array<any>;
  currentQuestionIndex:number;
  currentQuestionAnswers:Array<string>;
  correctAnswer:string|undefined;
  selectedAnswer:string|null;
  assertedAnswersCount:number;
  helpChances:number;
  askedHelp:boolean;
  life:number;
  score:number;
  showResult:boolean;
}

const initialState:StateInterface = {
  questions,
  currentQuestionIndex: 0,
  currentQuestionAnswers: shuffleAnswers([...questions.at(0)!.wrongAnswer, questions.at(0)!.correctAnswer]),
  correctAnswer: questions.at(0)?.correctAnswer, 
  selectedAnswer: null,
  assertedAnswersCount: 0,
  helpChances: 3,
  askedHelp: false,
  life: 3,
  score: 0,
  showResult: false,
};

function  QuizReducer(state:StateInterface, action:Action) {
  switch (action.type) {
    case allowedActions.NEXT_QUESTION: {
      const showResult = (
        state.questions.length - 1)
          === 
        state.currentQuestionIndex 
        ? true : false

      const currentQuestionIndex = showResult 
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1
      
      const currentQuestionAnswers = showResult 
        ? [] 
        : shuffleAnswers([...state.questions.at(state.currentQuestionIndex + 1)?.wrongAnswer, state.questions.at(state.currentQuestionIndex + 1)?.correctAnswer])

      const correctAnswer = 
        state.questions
        .at(state.currentQuestionIndex + 1)
        ?.correctAnswer
      
      const askedHelp = false

      return {
        ...state,
        currentQuestionAnswers,
        currentQuestionIndex,
        correctAnswer,
        selectedAnswer: null,
        askedHelp,
        showResult,
      }
    }

    case allowedActions.SELECT_ANSWER: {
      const selectedAnswer = action.payload
      
      const assertedAnswers = 
        state.questions.at(state.currentQuestionIndex)?.correctAnswer 
          === 
        selectedAnswer
        ? state.assertedAnswersCount + 1 
        : state.assertedAnswersCount 
      
      const score = 
        state.questions.at(state.currentQuestionIndex)?.correctAnswer 
          === 
        selectedAnswer
        ? state.score + 100
        : state.score
      
      const life = 
        state.questions.at(state.currentQuestionIndex)?.correctAnswer 
          !== 
        selectedAnswer
        ? state.life - 1
        : state.life

      const showResult =
        life <= 0 ? true : state.showResult

      const askedHelp = false

      return {
        ...state,
        selectedAnswer,
        assertedAnswers,
        askedHelp,
        score,
        life,
        showResult
      }
    }

    case allowedActions.ASK_HELP: {
      const helpChances = 
        state.helpChances 
          && 
        !state.askedHelp 
          && 
        !state.selectedAnswer
          &&
        state.helpChances > 0
        ? state.helpChances - 1
        : state.helpChances

      const askedHelp = true

      return {
        ...state,
        helpChances,
        askedHelp
      }
    }

    case allowedActions.RESET_GAME: return initialState

    default: return state
  }
}

export const QuizProvider = ({children}:{children:ReactNode}) => {
  const [state, dispatch] = useReducer(QuizReducer, initialState)
  
  return(
    <QuizContext.Provider value={{state, dispatch}}>
      {children}
    </QuizContext.Provider>
  )
}
