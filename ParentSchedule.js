import React, { useState, useEffect } from 'react';
import Link from '../components/Link.js'
import ListSchedule from "../components/ListSchedule.js"
import DetailSchedule from "../components/DetailSchedule";

async function sendPost( id_user, location, date , start_time , type ) {
    const response = await fetch('http://127.0.0.1:8000/new_schedule_and_match/schedules/', {
        method: 'POST',
        body: JSON.stringify({
            id_user: id_user,
            type : type ,
            location: location,
            date: date,
            start_time : start_time
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })

    const responseBody = await response.json()
    console.log("== response body:", responseBody)
}

async function DeleteSchedule( id_schedule ) {
    const response = await fetch(`http://127.0.0.1:8000/new_schedule_and_match/schedules/${id_schedule}` , {
        method: 'DELETE',
        body: JSON.stringify({
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })

    const responseBody = await response.json()
    console.log("== response body:", responseBody)
}

function ParentSchedule () {
    const [selectedSchedule, setSelectedSchedule] = useState(null);
    const [data, setData] = useState([]);

    const [ id_user, setIdUser ] = useState( 1 );
    const [ location, setLocation ] = useState("");
    const [ date, setDate ] = useState() ;
    const [ start_time, setStartTime ] = useState() ;
    const [ type, setType ] = useState() ;

    const [ please_refresh, setPleaseRefresh ] = useState( 1 ) ;
    const [ list_type , setListType ] = useState([ "training" , "competitive" ] )
    const [ list_location , setListLocation ] = useState([ "SPTTC" ] )

    const [ list_start_time , setListStartTime ] = useState([ 6 , 7 , 8 , 9 , 10 , 11 , 12 ,13 ,14 ,15 , 16 , 17 , 18 , 19 , 20  ] )


    useEffect(() => {
        fetch(`http://127.0.0.1:8000/new_schedule_and_match/schedules/?id_user=${id_user}`) // Replace with your API URL
            .then(response => response.json())
            .then(data => setData(data));

    }, [id_user , please_refresh ]);

    const handleSelectSchedule = (scheduleId) => {
        // Fetch details for the selected match.
        fetch(`http://127.0.0.1:8000/new_schedule_and_match/schedules/${scheduleId}`).then(single_schedule => single_schedule.json())
            .then(data => setSelectedSchedule(data));

    };

    const go_back = () => {
        setSelectedSchedule(null)
    };

    const this_delete = (id_schedule) => {
        DeleteSchedule(id_schedule)
        setSelectedSchedule(null)
    };



    return (
        <div>

            <Link/>
            {selectedSchedule ? (
                <DetailSchedule schedule={selectedSchedule} go_prev={go_back} this_delete = { this_delete } />
            ) : (
                <div>
                    <ListSchedule schedules={data} onSelectSchedule={handleSelectSchedule} />
                    <form onSubmit={e => {
                        e.preventDefault() ;

                        sendPost( id_user, location , date , start_time , type ) ;

                        if ( please_refresh === 1 ) {
                            console.log(1 )
                            setPleaseRefresh( 2 ) ;
                            //
                        }
                        else {

                            console.log( 2  )
                            setPleaseRefresh( 1 ) ;
                            //
                        }

                    }}>

                        <select value={location} onChange={e => setLocation(e.target.value)}>
                            <option value="" >Select a Location</option>

                            {
                                list_location.map((given_location, index) => (
                                    <option key={given_location} value={given_location}>
                                        {given_location}
                                    </option>
                                ))}
                        </select>

                        <div>
                            <input  type="number"  placeholder="id_user" value={id_user} onChange={e => setIdUser(e.target.value)} />
                        </div>
                        <div>
                            <input type = "date" placeholder="date" value={date} onChange={e => setDate(e.target.value)} />
                        </div>

                        <select value={type} onChange={e => setType(e.target.value)}>
                        <option value="" >Select a Type</option>

                        {
                            list_type.map((the_type, index) => (
                                <option key={the_type} value={the_type}>
                                    {the_type}
                                </option>
                            ))}
                        </select>

                        <select value={start_time} onChange={e => setStartTime(e.target.value)}>
                            <option value="" >Select a Start </option>

                            {
                                list_start_time.map((start_block, index) => (
                                    <option key={start_block} value={start_block}>
                                        {start_block}
                                    </option>
                                ))}
                        </select>

                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            )}


        </div>

    );
}

export default ParentSchedule ;
