import React, { useState, useEffect } from 'react';
import Link from '../components/Link.js'
import ListMatch from '../components/ListMatch.js'
import DetailMatch from "../components/DetailMatch.js"


function ParentMatch() {
    const [selectedMatch, setSelectedMatch] = useState(null);
    const [data, setData] = useState([]);
    const [ id_user, setIdUser ] = useState();

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/new_schedule_and_match/matches/?id_user=${id_user}`) // Replace with your API URL
            .then(response => response.json())
            .then(data => setData(data));

    }, [id_user]);

    const handleSelectMatch = (matchId) => {
        // Fetch details for the selected match.
        fetch(`http://127.0.0.1:8000/new_schedule_and_match/matches/${matchId}`).then(single_match => single_match.json())
            .then(data => setSelectedMatch(data));

    };

    const go_back = () => {
        setSelectedMatch(null)
    };
    
    return ( 
        <div>

            <Link/>
            {selectedMatch ? (
                <DetailMatch match={selectedMatch} go_prev={go_back} />
            ) : (
                <ListMatch matches={data} onSelectMatch={handleSelectMatch} />
            )}

            <div>
                <input  type="number"  placeholder="id_user" value={id_user} onChange={e => setIdUser(e.target.value)} />
            </div>

        </div>

    );
}

export default ParentMatch ;
