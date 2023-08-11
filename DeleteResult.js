import React from "react";

async function CallDeleteResult( id_result ) {
    const response = await fetch(`http://127.0.0.1:8000/new_schedule_and_match/completed_results/${ id_result }/` , {
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

function DeleteResult({ the_result , go_prev }) {

    const handleCallDeleteResult = ( the_result_id_result) => {
        CallDeleteResult( the_result_id_result ) ;
        go_prev() ;
    };
    return (
        <div>
            <button onClick={() => CallDeleteResult( the_result.id_result )}> Delete Feedback </button>
        </div>
    );
}

export default  DeleteResult ;