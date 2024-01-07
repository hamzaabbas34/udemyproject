import React from 'react'

export default function Progress({ numQuestion, index, answer, point, maxPossiblePoints }) {
    return (
        <header className='prograss'>
            <progress max={numQuestion} value={index + Number(answer !== null)} />
            <div className="questionlength">
                <p>Questions <strong>{index + 1}</strong>/{numQuestion}</p>
                <p><strong>{point}</strong>/{maxPossiblePoints}</p>
            </div>

        </header>
    )
}
