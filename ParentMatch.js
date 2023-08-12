import React, { useState, useEffect } from 'react';
import Link from '../components/Link.js'
import ListMatch from '../components/ListMatch.js'
import DetailMatch from "../components/DetailMatch.js"

function ParentMatch() {
    const [selectedMatch, setSelectedMatch] = useState(null);
    const [data, setData] = useState([]);
    const [ id_user, setIdUser ] = useState( 1 );
    const [ type_match, setTypeMatch ] = useState( "is_session" );

    useEffect(() => {

        // if type_match is equal to is_session
        if ( type_match == "is_session" ) {
            fetch(`http://127.0.0.1:8000/new_schedule_and_match/matches/?id_user=${id_user}&type=is_session`) // Replace with your API URL
                .then(response => response.json())
                .then(data => setData(data));
        }

        // if type_match is equal to pending
        else if ( type_match == "pending" ) {
            fetch(`http://127.0.0.1:8000/new_schedule_and_match/matches/?id_user=${id_user}&type=pending`) // Replace with your API URL
                .then(response => response.json())
                .then(data => setData(data));
        }

        // if type_match is equal to accepted
        else if ( type_match == "accepted" ) {
            fetch(`http://127.0.0.1:8000/new_schedule_and_match/matches/?id_user=${id_user}&type=accepted`) // Replace with your API URL
                .then(response => response.json())
                .then(data => setData(data));
        }

        // if type_match is equal to rejected
        else if ( type_match == "rejected" ) {
            fetch(`http://127.0.0.1:8000/new_schedule_and_match/matches/?id_user=${id_user}&type=rejected`) // Replace with your API URL
                .then(response => response.json())
                .then(data => setData(data));
        }

    }, [id_user , type_match]);

    const handleSelectMatch = (matchId) => {
        // Fetch details for the selected match.
        fetch(`http://127.0.0.1:8000/new_schedule_and_match/matches/${matchId}`).then(single_match => single_match.json())
            .then(data => setSelectedMatch(data));

    };

    const go_back = () => {
        setSelectedMatch(null)
    };

    let content ;

    if ( selectedMatch ) {
        content = (
            <>
                <DetailMatch match={selectedMatch} type_match = { type_match } go_prev={go_back}  id_user = { id_user } />
            </>
        )
    }
    else {
        content = (
            <>
                <div>

                    <button onClick={() => setTypeMatch("is_session")}>  Is Session </button>
                    <button onClick={() => setTypeMatch("pending")}> Pending </button>
                    <button onClick={() => setTypeMatch("accepted")}> Accepted </button>
                    <button onClick={() => setTypeMatch("rejected")}> Rejected </button>

                    <ListMatch matches={data} onSelectMatch={handleSelectMatch} />
                    <div>
                        <input  type="number"  placeholder="id_user" value={id_user} onChange={e => setIdUser(e.target.value)} />
                    </div>
                </div>
            </>
        )
    }
    
    return ( 
        <div>
            <Link/>
            <div>
                { content }
            </div>
        </div>
    );
}

export default ParentMatch ;
