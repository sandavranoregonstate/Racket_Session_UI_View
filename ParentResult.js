import React, { useState, useEffect } from 'react';
import Link from '../components/Link.js'
import ListResult from "../components/ListResult";
import DetailResult from "../components/DetailResult";
import DetailFeedback from "../components/DetailFeedback";
import SubmitResult from "../components/SubmitResult";
import DeleteResult from "../components/DeleteResult";


function ParentFeedback() {
    const [ id_user, setIdUser ] = useState( 1 );
    const [ type_result, setTypeResult ] = useState( "pending" ) ;

    const [ list_pending_results, setListPendingResults ] = useState( [] ) ;
    const [ list_completed_results, setListCompletedResults ] = useState( []) ;

    const [selectedResult, setSelectedResult ] = useState(null);


    useEffect(() => {

        var the_url = "" ;

        the_url = `http://127.0.0.1:8000/new_schedule_and_match/completed_results/?id_user=${id_user}` ;
        fetch(the_url) // Replace with your API URL
            .then(response => response.json())
            .then(data => setListCompletedResults(data));

        the_url = `http://127.0.0.1:8000/new_schedule_and_match/pending_results/?id_user=${id_user}` ;
        fetch(the_url) // Replace with your API URL
            .then(response => response.json())
            .then(data => setListPendingResults(data));

    }, [ type_result , id_user ]);

    const go_back = () => {
        setSelectedResult(null)
    };

    const handleSelectResult = (the_result_id) => {
        // Fetch details for the selected match.

        if ( type_result === "pending" ) {
            fetch(`http://127.0.0.1:8000/new_schedule_and_match/pending_results/${the_result_id}`).then(single_schedule => single_schedule.json())
                .then(data => setSelectedResult(data));
            //
        }

        else {
            fetch(`http://127.0.0.1:8000/new_schedule_and_match/completed_results/${the_result_id}`).then(single_schedule => single_schedule.json())
                .then(data => setSelectedResult(data));
            //
        }

        console.log(selectedResult) ;

    };

    let content ;
    if( selectedResult) {
        if ( type_result == "pending" ) {

            content = (
                <>
                    <DetailResult the_result ={ selectedResult } go_prev = {go_back}  /> ;
                    <SubmitResult the_result ={ selectedResult } /> ;

                </>
            )

        }

        else {

            content = (

                <>
                    <DetailResult the_result ={ selectedResult } go_prev = {go_back}  /> ;
                    <DeleteResult the_result ={ selectedResult } /> ;
                </>
            )

        }
    }

    else {
        if ( type_result === "pending") {
            content = (
                <>
                    <ListResult results={list_pending_results}  onSelectResult={handleSelectResult}/>
                    <button onClick={() => setTypeResult("pending")}> Pending </button>
                    <button onClick={() => setTypeResult("completed")}> Completed </button>
                    <div>
                        <input  type="number"  placeholder="id_user" value={id_user} onChange={e => setIdUser(e.target.value)} />
                    </div>
                </>
            )

        }
        else {
            content = (
                <>
                    <ListResult results={list_completed_results} onSelectResult={handleSelectResult} /> ;
                    <button onClick={() => setTypeResult("pending")}> Pending </button>
                    <button onClick={() => setTypeResult("completed")}> Completed </button>
                    <div>
                        <input  type="number"  placeholder="id_user" value={id_user} onChange={e => setIdUser(e.target.value)} />
                    </div>
                </>
            )
        }
    }

    return (
        <div>
            <Link/>
            <div>{ content } </div>
        </div>

    );
}

export default ParentFeedback ;