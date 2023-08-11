import React, { useState, useEffect } from 'react';
import Link from '../components/Link.js'
import ListFeedback from "../components/ListFeedback";
import DetailResult from "../components/DetailResult";
import ListResult from "../components/ListResult";
import DetailFeedback from "../components/DetailFeedback";
import SubmitFeedback from "../components/SubmitFeedback";
import DeleteFeedback from "../components/DeleteFeedback";


function ParentFeedback() {
    const [ id_user, setIdUser ] = useState( 1 );
    const [ type_feedback, setTypeFeedback ] = useState( "pending" ) ;

    const [ list_pending_feedbacks, setListPendingFeedbacks ] = useState( [] ) ;
    const [ list_completed_feedbacks, setListCompletedFeedbacks ] = useState( []) ;

    const [selectedFeedback, setSelectedFeedback ] = useState(null);

    const [ please_refresh, setPleaseRefresh ] = useState( 1 ) ;


    useEffect(() => {

        var the_url = "" ;

        the_url = `http://127.0.0.1:8000/new_schedule_and_match/completed_feedbacks/?id_user=${id_user}` ;
        fetch(the_url) // Replace with your API URL
            .then(response => response.json())
            .then(data => setListCompletedFeedbacks(data));

        the_url = `http://127.0.0.1:8000/new_schedule_and_match/pending_feedbacks/?id_user=${id_user}` ;
        fetch(the_url) // Replace with your API URL
            .then(response => response.json())
            .then(data => setListPendingFeedbacks(data));

    }, [ type_feedback , id_user , please_refresh ]);

    const go_back = () => {
        setSelectedFeedback(null)
    };

    const please_refresh_the_call = () => {
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
    };

    const handleSelectFeedback = (feedbackId) => {
        // Fetch details for the selected match.

        if ( type_feedback === "pending" ) {
            fetch(`http://127.0.0.1:8000/new_schedule_and_match/pending_feedbacks/${feedbackId}`).then(single_schedule => single_schedule.json())
                .then(data => setSelectedFeedback(data));
            //
        }

        else {
            fetch(`http://127.0.0.1:8000/new_schedule_and_match/completed_feedbacks/${feedbackId}`).then(single_schedule => single_schedule.json())
                .then(data => setSelectedFeedback(data));
            //
        }

        console.log(selectedFeedback) ;

    };


    let content ;


    if( selectedFeedback) {
        if (type_feedback == "pending") {
            content = (
                <>
                    <DetailFeedback feedback ={ selectedFeedback } go_prev = {go_back}  /> ;
                    <SubmitFeedback feedback ={ selectedFeedback } please_refresh_the_call = { please_refresh_the_call } go_prev = {go_back}  id_user = { id_user } /> ;

                </>
            )
        }

        else {
            content = (

                <>
                    <DetailFeedback feedback ={ selectedFeedback } go_prev = {go_back}  /> ;
                    <DeleteFeedback feedback = { selectedFeedback } go_prev = {go_back} /> ;
                </>
            )
        }


    }
    else {
        if ( type_feedback === "pending") {
            content = (
                <>
                    <ListFeedback feedbacks={list_pending_feedbacks}  onSelectFeedback={handleSelectFeedback}/>
                    <button onClick={() => setTypeFeedback("pending")}> Pending </button>
                    <button onClick={() => setTypeFeedback("completed")}> Completed </button>
                    <div>
                        <input  type="number"  placeholder="id_user" value={id_user} onChange={e => setIdUser(e.target.value)} />
                    </div>
                </>
            )

        }
        else {
            content = (
                <>
                    <ListFeedback feedbacks={list_completed_feedbacks} onSelectFeedback={handleSelectFeedback} /> ;
                    <button onClick={() => setTypeFeedback("pending")}> Pending </button>
                    <button onClick={() => setTypeFeedback("completed")}> Completed </button>
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

