import React from "react";
import DetailSchedule from "./DetailSchedule";

async function AcceptMatch( id_match , id_user ) {
    const response = await fetch(`http://127.0.0.1:8000/new_schedule_and_match/matches/${ id_match }/accept` , {
        method: 'POST',
        body: JSON.stringify({
            id_user : id_user
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })

    const responseBody = await response.json()
    console.log("== response body:", responseBody)

}

async function RejectMatch( id_match , id_user ) {
    const response = await fetch(`http://127.0.0.1:8000/new_schedule_and_match/matches/${ id_match }/reject` , {
        method: 'POST',
        body: JSON.stringify({
            id_user : id_user

        }),
        headers: {
            'Content-type': 'application/json',
        },
    })

    const responseBody = await response.json()
    console.log("== response body:", responseBody)

}

async function DeleteMatch( id_match , id_user ) {
    const response = await fetch(`http://127.0.0.1:8000/new_schedule_and_match/matches/${ id_match }/delete` , {
        method: 'POST',
        body: JSON.stringify({
            id_user : id_user
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })

    const responseBody = await response.json()
    console.log("== response body:", responseBody)

}



function DetailMatch({ match , type_match , go_prev , id_user }) {

    const accept_handler = () => {
        AcceptMatch( match.Match.id_match , id_user ) ;
        go_prev() ;
    };

    const reject_handler = () => {
        RejectMatch( match.Match.id_match , id_user ) ;
        go_prev() ;
    };

    const delete_handler = () => {
        DeleteMatch( match.Match.id_match , id_user ) ;
        go_prev() ;
    };



    let content ;

    if ( type_match == "is_session" ) {
        content = (
            <>
                <button onClick={() => delete_handler()}> Delete Match </button>
            </>
        )
    }
    else if ( type_match == "pending" ) {
        content = (
            <>
                <button onClick={() => accept_handler()}> Accept Match </button>
                <button onClick={() => reject_handler()}> Reject Match </button>
            </>
        )
    }

    else if ( type_match == "accepted" ) {
        content = (
            <>
                <button onClick={() => reject_handler()}> Reject Match </button>

            </>
        )
    }

    else if ( type_match == "rejected" ) {
        content = (
            <>
                <button onClick={() => accept_handler()}> Accept Match </button>
            </>
        )
    }




    return (
        <div>

            <button onClick={() => go_prev()}> Go Prev </button>

            <ul>

                <li>Id Match : { match.id_match}</li>
                <li> The Current Status A : { match.the_current_status_a}</li>
                <li> The Current Status B: { match.the_current_status_b}</li>
                <li> Date : { match.date}</li>
                <li> Type: { match.type}</li>
                <li> Start Time: { match.start_time}</li>
                <li> Id User A : { match.id_player_a.id_user}</li>
                <li> Name : { match.id_player_a.name }</li>
                <li> Last Name : { match.id_player_a.last_name }</li>
                <li> Forehand Rubber Type : { match.id_player_a.forehand_rubber_type }</li>
                <li> Backhand Rubber Type : { match.id_player_a.backhand_rubber_type }</li>
                <li> The Competition Rating : { match.id_player_a.competition_rating}</li>
                <li> The Real World Rating : { match.id_player_a.real_world_rating}</li>

                <li> Id User B : { match.id_player_b.id_user}</li>
                <li> Name : { match.id_player_b.name }</li>
                <li> Last Name : { match.id_player_b.last_name }</li>
                <li> Forehand Rubber Type : { match.id_player_b.forehand_rubber_type }</li>
                <li> Backhand Rubber Type : { match.id_player_b.backhand_rubber_type }</li>
                <li> The Competition Rating : { match.id_player_b.competition_rating}</li>
                <li> The Real World Rating : { match.id_player_b.real_world_rating}</li>

            </ul>


            { content }

        </div>
    );
}

export default  DetailMatch ;
