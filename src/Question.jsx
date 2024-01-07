import React from 'react'
import './app.css'
import Options from './Options'

export default function Question({ question, disPatch, answer }) {
    return (
        <div className="questions">
            <h3 className=''>
                {question.question}
            </h3>
            <Options question={question} answer={answer} disPatch={disPatch} />
        </div>
    )
}
