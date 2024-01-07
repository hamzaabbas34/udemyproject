import { useEffect, useReducer } from "react";
import './app.css';
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import Finished from "./Finished";
import Timer from "./Timer";

const initialState = {
  questions: [],
  status: "isLoading",
  index: 0,
  answer: null,
  point: 0,
  highScore: 0,
  secondRemaining: null,
}

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready"
      }
    case "dataFailed":
      return {
        ...state,
        status: 'Error'
      }
    case "start":
      return {
        ...state,
        status: 'active',
        secondRemaining: state.questions.length * 30
      }

    case "nextButton":
      return {
        ...state, index: state.index + 1, answer: null
      }
    case "newAnswer":
      const question = state.questions.at(state.index)
      return {
        ...state,
        answer: action.payload,
        point: action.payload === question.correctOption
          ? state.point + question.point : state.point
      }

    case "finish":
      return {
        ...state, status: "finished", highScore: state.point > state.highScore ? state.point : state.highScore
      }
    case "tick":
      return {
        ...state, secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? "finished" :
          state.status
      }
    case "restQuiz":
      return {
        ...initialState, questions: state.questions, status: "ready"
      }


    default:
      throw new Error("Action Unknow")
  }

}
function App() {
  const [{ status, secondRemaining, questions, index, answer, point, highScore }, disPatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch('http://localhost:3000/questions')
      .then((res) => res.json())
      .then((data) => disPatch({ type: 'dataReceived', payload: data }))
      .catch((err) => disPatch({ type: 'dataFailed' }))
  }, []);
  const numQuestion = questions.length;

  const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.point, 0);


  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'isLoading' && <Loader />}
        {status === 'Error' && <Error />}
        {status === 'ready' && <StartScreen numQuestion={numQuestion} disPatch={disPatch} />}
        {status === 'active' && <> <Progress numQuestion={numQuestion} answer={answer} point={point} index={index} maxPossiblePoints={maxPossiblePoints} /> <Question question={questions[index]} answer={answer} disPatch={disPatch} /> <div className="timer-next"><Timer secondRemaining={secondRemaining} disPatch={disPatch} />
          <NextButton answer={answer} disPatch={disPatch} numQuestion={numQuestion} index={index} /></div></>}
        {status === "finished" && <Finished highScore={highScore} maxPossiblePoints={maxPossiblePoints} point={point} disPatch={disPatch} />}
      </Main>
    </div >
  );
}

function Header() {
  return (
    <div className="title">
      <h1>React Quiz</h1>
    </div>
  );
}

export default App;
