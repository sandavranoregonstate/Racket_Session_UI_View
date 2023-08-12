import React, { useState, useEffect } from 'react';

import TheCardForFeedback from "../components/TheCardForFeedback"

function ListFeedback ( { feedbacks , onSelectFeedback }) {

    console.log(feedbacks) ;

    return (
        <div>
            <ul>
                {feedbacks.map(feedback => (

                    <ul>
                        <li >
                        Id Player A : { feedback.id_player_a }
                        </li>

                        <li >
                                Id Player B : { feedback.id_player_b }
                            </li>
                            <li >
                                Id Feedback : { feedback.id_match }
                            </li>
                            <li >
                                <button onClick={() => onSelectFeedback(feedback.id_feedback)}> Id Feedback : { feedback.id_feedback}</button>
                            </li>
                    </ul>


                ))}
            </ul>
        </div>
    );
}

export default ListFeedback ;
