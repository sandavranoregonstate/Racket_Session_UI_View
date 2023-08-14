import React, {useEffect, useState} from 'react';

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

function SubmitResult( { the_result , go_prev , please_refresh_the_call , id_user }) {
    const [id_player_victory, setIdPlayerVictory] = useState(null);


    // the_result.id_match = Match Entry

    const [id_player_a, setIdPlayerA] = useState(1 ) ;
    const [id_player_b, setIdPlayerB] = useState(2 ) ;

    const [ id_match , setIdMatch ] = useState(null);

    const handleChange = (data) => {
        // Fetch details for the selected match.
        console.log(id_match )
        setIdPlayerA( data.id_player_a.id_user )
        setIdPlayerB( data.id_player_b.id_user )

    };

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/new_schedule_and_match/matches/${the_result.id_match.id_match }`) // Replace with your API URL
            .then(response => response.json())
            .then(data => handleChange(data));


    }, [ id_player_a , id_player_b ]);

    return (
        <form onSubmit={e => {
            e.preventDefault();
            CallSubmitResult(
                the_result.id_result ,
                id_user,
                id_player_victory

            );

            go_prev() ;
            please_refresh_the_call() ;

        }}>

            <select value={id_player_victory} onChange={e => setIdPlayerVictory(e.target.value)}>

                <option value="" >Select a Start </option>

                <option key={id_player_a} value={id_player_a}>
                    {id_player_a}
                </option>
                <option key={id_player_b} value={id_player_b}>
                    {id_player_b}
                </option>

            </select>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default SubmitResult;
