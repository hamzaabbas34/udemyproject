import React from 'react'

export default function Finished({ maxPossiblePoints, point, highScore, disPatch }) {
    const precentage = (point / maxPossiblePoints) * 100
    return (
        <div className='finish'>
            <div className=""> <p className='highscore'>Your Scoreded  {point} out {maxPossiblePoints} ({precentage.toFixed(1)}%)
            </p></div>
            <p>( HighScore {highScore} points )</p>
            <div className="btnbox">
                <button className='btn' onClick={() => disPatch({ type: "restQuiz" })}>Reset Quiz!</button>
            </div>
        </div>
    )
}
