import React from "react";

function DetailFeedback({ feedback , go_prev }) {
    return (
        <div>
            <button onClick={() => go_prev()}> Go Prev </button>

            <h1>{feedback.id_feedback}</h1>
        </div>
    );
}

export default  DetailFeedback ;