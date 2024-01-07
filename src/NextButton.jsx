import React from 'react'
import './app.css'

export default function NextButton({ disPatch, index, numQuestion, answer }) {
    if (answer === null) return

    if (index < numQuestion - 1)
        return (
            <div className='nextbuttonbox'>
                <button className='btn' onClick={() => disPatch({ type: "nextButton" })}>Next</button>
            </div>
        )

    else
        return (
            <div className='nextbuttonbox'>
                <button className='btn' onClick={() => disPatch({ type: "finish" })}>finished</button>
            </div>
        )
}
