import React, { useState, useEffect } from 'react';

function ListResult ( { results , onSelectResult }) {

    return (
        <div>
            <ul>
                {results.map(the_result => (
                    <li >
                        Id Schedule : { the_result.id_result }
                        <button onClick={() => onSelectResult(the_result.id_result)}> Id Match : { the_result.id_result}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListResult ;
