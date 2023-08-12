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
            <h1>{match.Match.id_match}</h1>

            { content }

        </div>
    );
}

export default  DetailMatch ;
