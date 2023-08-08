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

function DeleteFeedback({ the_feedback }) {
    return (
        <div>
            <button onClick={() => CallDeleteFeedback( the_feedback.id_feedback )}> Delete Feedback </button>
        </div>
    );
}

export default  DeleteFeedback ;