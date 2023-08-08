import React from "react";

function DetailMatch({ match , go_prev }) {
    return (
        <div>
            <button onClick={() => go_prev()}> Go Prev </button>

            <h1>{match.Match.id_match}</h1>
        </div>
    );
}

export default  DetailMatch ;
