import React from "react";

async function CallDeleteFeedback( id_feedback ) {
    const response = await fetch(`http://127.0.0.1:8000/new_schedule_and_match/completed_feedbacks/${ id_feedback }/` , {
        method: 'POST',
        body: JSON.stringify({
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })

    const responseBody = await response.json()
    console.log("== response body:", responseBody)

}

function DeleteFeedback({ feedback , go_prev }) {


    const handleCallDeleteFeedback = ( the_feedback_id_feedback ) => {
        CallDeleteFeedback( the_feedback_id_feedback ) ;

        console.log(the_feedback_id_feedback) ;
        go_prev() ;
    };

    return (
        <div>
            <button onClick={() => handleCallDeleteFeedback( feedback.id_feedback )}> Delete Feedback </button>
        </div>
    );
}

export default  DeleteFeedback ;