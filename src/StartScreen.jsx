import React from 'react'
import './app.css'

export default function StartScreen({ numQuestion, disPatch }) {
    return (
        <div className='mainstart'>
            <div className="start">
                <h2>Wellcome to the React Quiz!</h2>
                <p>{numQuestion} Question in Your React Quiz</p>
                <button className='btn' onClick={() => disPatch({ type: 'start' })}>Let's Start</button>
            </div>
        </div>
    )
}
