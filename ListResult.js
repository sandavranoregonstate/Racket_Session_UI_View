import React, { useState, useEffect } from 'react';

function ListResult ( { results , onSelectResult }) {

    return (
        <div>
            <ul>
                {results.map(the_result => (

                    <ul>
                        <li > Id Player A : { the_result.id_match.id_player_a.id_user } </li>
                        <li > Id Player A : { the_result.id_match.id_player_a.name } </li>
                        <li > Id Player A : { the_result.id_match.id_player_a.last_name } </li>

                        <li > Id Player B : { the_result.id_match.id_player_b.id_user } </li>
                        <li > Id Player B : { the_result.id_match.id_player_b.name } </li>
                        <li > Id Player B : { the_result.id_match.id_player_b.last_name } </li>

                        <li > Id Result : { the_result.id_match.id_match } </li>
                        <li>
                            <button onClick={() => onSelectResult(the_result.id_result)}> Id Match : { the_result.id_result}</button>
                        </li>
                    </ul>
                ))}
            </ul>
        </div>
    );
}

export default ListResult ;
