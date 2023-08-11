import React from "react";

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



function DetailMatch({ match , go_prev , id_user }) {

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


    return (
        <div>

            <button onClick={() => go_prev()}> Go Prev </button>
            <h1>{match.Match.id_match}</h1>

            <button onClick={() => accept_handler()}> Accept Match </button>
            <button onClick={() => reject_handler()}> Reject Match </button>
            <button onClick={() => delete_handler()}> Delete Match </button>

        </div>
    );
}

export default  DetailMatch ;
