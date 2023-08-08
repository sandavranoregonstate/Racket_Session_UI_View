import React from "react";

function DetailSchedule({ schedule , go_prev , this_delete }) {
    return (
        <div>
            <button onClick={() => go_prev()}> Go Prev </button>
            <button onClick={() => this_delete( schedule.Schedule.id_schedule )}> Delete </button>

            <h1>{schedule.Schedule.id_schedule}</h1>
        </div>
    );
}

export default  DetailSchedule ;
