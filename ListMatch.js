import React, { useState, useEffect } from 'react';

function ListMatch( { matches, onSelectMatch }) {

    return (
        <div>
            <ul>
                {matches.map(match => (
                    <li >

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

                            <li>
                                <button onClick={() => onSelectMatch(match.id_match)}> Id Match : { match.id_match}</button>
                            </li>

                        </ul>

                    </li>
                ))}
            </ul>
        </div>
    );
} 

export default ListMatch ;


