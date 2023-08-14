import React from "react";

function DetailFeedback({ feedback , go_prev }) {
    return (
        <div>
            <button onClick={() => go_prev()}> Go Prev </button>

            <ul>

                <li > Id Player A : { feedback.id_player_a.id_user } </li>
                <li > Id Player A : { feedback.id_player_a.name } </li>
                <li > Id Player A : { feedback.id_player_a.last_name } </li>
                <li > Id Player B : { feedback.id_player_b.id_user } </li>
                <li > Id Player A : { feedback.id_player_b.name } </li>
                <li > Id Player A : { feedback.id_player_b.last_name } </li>
                <li > Id Feedback : { feedback.id_match.id_match } </li>

            </ul>
        </div>
    );
}



export default  DetailFeedback ;