import React from "react";

function TheCompletedDetailResult({ the_result , go_prev }) {
    return (
        <div>
            <button onClick={() => go_prev()}> Go Prev </button>

            <ul>

                <li > Id Player A : { the_result.id_match.id_player_a.id_user } </li>
                <li > Id Player A : { the_result.id_match.id_player_a.name } </li>
                <li > Id Player A : { the_result.id_match.id_player_a.last_name } </li>
                <li > Id Player B : { the_result.id_match.id_player_b.id_user } </li>
                <li > Id Player A : { the_result.id_match.id_player_b.name } </li>
                <li > Id Player A : { the_result.id_match.id_player_b.last_name } </li>
                <li > Id Feedback : { the_result.id_match.id_match } </li>

                <li > The Victory : { the_result.id_player_victory.name } { the_result.id_player_victory.last_name } </li>

            </ul>
        </div>
    );
}

export default  TheCompletedDetailResult ;