import React from "react";

function DetailResult({ the_result , go_prev }) {
    return (
        <div>
            <button onClick={() => go_prev()}> Go Prev </button>

            <h1>{the_result.id_result}</h1>
        </div>
    );
}

export default  DetailResult ;