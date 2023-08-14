import React from "react";

function TheCompletedDetailFeedback({ feedback , go_prev }) {
    return (
        <div>
            <button onClick={() => go_prev()}> Go Prev </button>

            <ul>

                <li > Serve Feedback : { feedback.serve_feedback } </li>
                <li > Receive Feedback : { feedback.receive_feedback } </li>
                <li > Forehand Loop Feedback : { feedback.forehand_loop_feedback } </li>
                <li > Backhand Loop Feedback : { feedback.backhand_loop_feedback } </li>
                <li > Forehand Block Feedback : { feedback.forehand_block_feedback } </li>
                <li > Backhand Block Feedback : { feedback.backhand_block_feedback } </li>
                <li > Personal Feedback : { feedback.personal_feedback } </li>
            </ul>
        </div>
    );
}



export default TheCompletedDetailFeedback ;