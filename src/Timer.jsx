import React, { useEffect } from 'react'

import './app.css'

export default function Timer({ disPatch, secondRemaining }) {
    useEffect(function () {
        const id = setInterval(function () {
            disPatch({ type: "tick" })
        }, 1000);

        return () => clearInterval(id)
    }

        , [disPatch])
    const mins = Math.floor(secondRemaining / 60);
    const sec = secondRemaining % 60;

    return (
        <div className='timerbox'>
            <p>{mins < 10 && "0"}{mins}:{sec < 10 && "0"}{sec}</p>
        </div>
    )
}
