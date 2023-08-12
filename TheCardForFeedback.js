import React, { useState, useEffect } from 'react';

function TheCardForFeedback({ feedbackEntry }) {


    const [the_data, setTheData] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/new_schedule_and_match/matches/${feedbackEntry.id_match}`) // Replace with your API URL
            .then(response => response.json())
            .then(the_data => setTheData(the_data ));

    }, []);


    return (
        <div className="card">
            {/* Displaying all information of matchData. Adjust based on your data structure */}
            <h2>Match Details:</h2>
            <p><strong>ID:</strong> {the_data.Match.id_match}</p>
            <p><strong> Player 1 :</strong> {the_data.Match.id_player_a}</p>
            <p><strong> Player 2 :</strong> {the_data.Match.id_player_b}</p>
            <p><strong> Player 1 :</strong> {the_data.Match.location }</p>
            <p><strong> Type : </strong> {the_data.Match.type}</p>
            <p><strong> Start Time : </strong> {the_data.Match.start_time}</p>


            {/* Continue to display other properties of matchData */}
        </div>
    );
}

export default TheCardForFeedback;
