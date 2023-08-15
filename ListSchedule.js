import React, { useState, useEffect } from 'react';

function ListSchedule ( { schedules, onSelectSchedule }) {

    return (
        <div>
            <ul>
                {schedules.map(schedule => (
                    <li >

                        <ul>

                            <li> Id Schedule : { schedule.location } </li>
                            <li> Id Schedule : { schedule.date } </li>
                            <li> Id Schedule : { schedule.type } </li>
                            <li> Id Schedule : { schedule.start_time } </li>

                            <li>
                                <button onClick={() => onSelectSchedule(schedule.id_schedule)}> Id Match : { schedule.id_schedule}</button>
                            </li>

                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListSchedule ;
