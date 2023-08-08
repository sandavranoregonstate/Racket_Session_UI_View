import React, { useState, useEffect } from 'react';

function ListFeedback ( { feedbacks , onSelectFeedback }) {

    return (
        <div>
            <ul>
                {feedbacks.map(feedback => (
                    <li >
                        Id Schedule : { feedback.id_feedback }
                        <button onClick={() => onSelectFeedback(feedback.id_feedback)}> Id Match : { feedback.id_feedback}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListFeedback ;
