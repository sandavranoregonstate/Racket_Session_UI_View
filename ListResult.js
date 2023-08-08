import React, { useState, useEffect } from 'react';
import Link from '../components/Link.js'

function ListResult() {
    const [data, setData] = useState([]);
    const [ id_user, setIdUser ] = useState();

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/new_schedule_and_match/pending_results/?id_user=${id_user}`) // Replace with your API URL
            .then(response => response.json())
            .then(data => setData(data));

    }, [id_user]);

    return (
        <div>
            <Link/>

            {data.map((item, index) => (
                <div key={index} className="card">
                    <p> Id Result : {item.id_result}</p>
                    <p> Id Match : {item.id_match}</p>
                    <p> Status : {item.status}</p>
                    <p> Id Player Victory : {item.id_player_victory}</p>

                </div>
            ))}

            <div>
                <input  type="number"  placeholder="id_user" value={id_user} onChange={e => setIdUser(e.target.value)} />
            </div>
        </div>

    );
}

export default ListResult ;
