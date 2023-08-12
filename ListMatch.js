import React, { useState, useEffect } from 'react';

function ListMatch( { matches, onSelectMatch }) {

    return (
        <div>
            <ul>
                {matches.map(match => (
                    <li >
                        Id Match : { match.id_match}
                        <button onClick={() => onSelectMatch(match.id_match)}> Id Match : { match.id_match}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
} 

export default ListMatch ;


