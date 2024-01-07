import React from 'react'
import './app.css'

export default function Options({ question, answer, disPatch }) {
    const isAnswered = answer !== null
    return (
        <div className='options'>
            {question.options.map((options, index) => <button className={`btn-option ${index === answer ? "answer" : ""} ${isAnswered ? index === question.correctOption ? "correct" : "wrong" : ""}`} key={index} disabled={isAnswered} onClick={() => disPatch({ type: "newAnswer", payload: index })}>{options}</button>)}
        </div>
    )
}
