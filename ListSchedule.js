import React, { useState, useEffect } from 'react';

function ListSchedule ( { schedules, onSelectSchedule }) {

    return (
        <div>
            <ul>
                {schedules.map(schedule => (
                    <li >
                        Id Schedule : { schedule.id_schedule }
                        <button onClick={() => onSelectSchedule(schedule.id_schedule)}> Id Match : { schedule.id_schedule}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListSchedule ;
