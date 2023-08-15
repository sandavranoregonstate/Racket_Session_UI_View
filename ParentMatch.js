import React, { useState, useEffect } from 'react';
import Link from '../components/Link.js'
import ListMatch from '../components/ListMatch.js'
import DetailMatch from "../components/DetailMatch.js"

function ParentMatch() {
    const [selectedMatch, setSelectedMatch] = useState(null);
    const [data, setData] = useState([]);
    const [ id_user, setIdUser ] = useState( null );
    const [ type_match, setTypeMatch ] = useState( "is_session" );

    const [ toc, setToc ] = useState( "training" );
    const [ ur, setUr ] = useState( 1650 );
    const [ ie, setIe ] = useState( "past" );

    useEffect(() => {

        fetch(`http://127.0.0.1:8000/new_schedule_and_match/matches/?id_user=${id_user}&type=${type_match}&toc=${toc}&ur=${ ur }&ie=${ ie}`) // Replace with your API URL
            .then(response => response.json())
            .then(data => setData(data));

    }, [id_user , type_match , toc , ur , ie ]);

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
                <DetailMatch match={selectedMatch} type_match = { type_match } ie = { ie } go_prev={go_back}  id_user = { id_user } />
            </>
        )
    }
    else {
        content = (
            <>
                <div>

                    <div>

                        <p> Type Match : { type_match } </p>
                        <button onClick={() => setTypeMatch("is_session")}>  Is Session </button>
                        <button onClick={() => setTypeMatch("pending")}> Pending </button>
                        <button onClick={() => setTypeMatch("accepted")}> Accepted </button>
                        <button onClick={() => setTypeMatch("rejected")}> Rejected </button>
                    </div>

                    <div>
                        <p> Past or Future : { ie } </p>
                        <button onClick={() => setIe("past")}>  Past </button>
                        <button onClick={() => setIe("future")}> Future </button>
                    </div>
                    <div>
                        <p> Training or Competitive : { toc } </p>

                        <button onClick={() => setToc("training")}> Training </button>
                        <button onClick={() => setToc("competitive")}> Competitive </button>
                    </div>
                    <div>
                        <p>USATT Rating   : { ur } </p>

                        <button onClick={() => setUr(250)}>  250 </button>
                        <button onClick={() => setUr(500)}> 500 </button>
                        <button onClick={() => setUr(750)}> 750 </button>
                        <button onClick={() => setUr(1000)}> 1000 </button>
                        <button onClick={() => setUr(1250)}>  1250 </button>
                        <button onClick={() => setUr(1500)}> 1500 </button>
                        <button onClick={() => setUr(1750)}> 1750 </button>
                        <button onClick={() => setUr(2000)}> 2000 </button>

                    </div>



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
