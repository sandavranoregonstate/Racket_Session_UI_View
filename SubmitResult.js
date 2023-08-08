import React, { useState } from 'react';

async function CallSubmitResult( id_result, id_user,  id_player_victory ) {
    const response = await fetch(`http://127.0.0.1:8000/new_schedule_and_match/pending_results/${ id_result}/` , {
        method: 'PATCH',
        body: JSON.stringify({
            id_result: id_result,
            id_user: id_user,
            id_player_victory: id_player_victory
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })

    const responseBody = await response.json()
    console.log("== response body:", responseBody)

}

function SubmitResult( { the_result }) {
    const [id_user, setIdUser] = useState('');
    const [id_player_victory, setIdPlayerVictory] = useState(null);


    return (
        <form onSubmit={e => {
            e.preventDefault();
            CallSubmitResult(
                the_result.id_result ,
                id_user,
                id_player_victory

            );
        }}>

            <div>
                <input type="number" placeholder="id_user" value={id_user} onChange={e => setIdUser(e.target.value)} required />
            </div>

            <div>
                <input type="number" placeholder="id_player_victory" value={id_player_victory} onChange={e => setIdPlayerVictory(e.target.value)} required />
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default SubmitResult;
