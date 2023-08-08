import React, { useState } from 'react';

async function CallSubmitFeedback( id_user, id_feedback,  serve_feedback, receive_feedback, forehand_loop_feedback, backhand_loop_feedback, forehand_block_feedback, backhand_block_feedback, personal_feedback ) {
    const response = await fetch(`http://127.0.0.1:8000/new_schedule_and_match/pending_feedbacks/${ id_feedback}/` , {
        method: 'PATCH',
        body: JSON.stringify({
            id_user: id_user,
            serve_feedback: serve_feedback,
            receive_feedback: receive_feedback,
            forehand_loop_feedback : forehand_loop_feedback ,
            backhand_loop_feedback: backhand_loop_feedback,
            forehand_block_feedback : forehand_block_feedback ,
            backhand_block_feedback: backhand_block_feedback,
            personal_feedback : personal_feedback
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })

    const responseBody = await response.json()
    console.log("== response body:", responseBody)

}

function SubmitFeedback( { feedback }) {
    const [id_user, setIdUser] = useState('');
    const [serve_feedback, setServeFeedback] = useState(null);
    const [receive_feedback, setReceiveFeedback] = useState(null);
    const [forehand_loop_feedback, setForehandLoopFeedback] = useState(null);
    const [backhand_loop_feedback, setBackhandLoopFeedback] = useState(null);
    const [forehand_block_feedback, setForehandBlockFeedback] = useState(null);
    const [backhand_block_feedback, setBackhandBlockFeedback] = useState(null);
    const [personal_feedback, setPersonalFeedback] = useState(null);

    return (
        <form onSubmit={e => {
            e.preventDefault();
            CallSubmitFeedback(
                id_user,
                feedback.id_feedback ,
                serve_feedback,
                receive_feedback,
                forehand_loop_feedback,
                backhand_loop_feedback,
                forehand_block_feedback,
                backhand_block_feedback,
                personal_feedback
            );
        }}>

            <div>
                <input type="number" placeholder="id_user" value={id_user} onChange={e => setIdUser(e.target.value)} required />
            </div>

            <div>
                <input type="number" placeholder="serve_feedback (1-10)" min="1" max="10" value={serve_feedback || ''} onChange={e => setServeFeedback(e.target.value)} />
            </div>

            <div>
                <input type="number" placeholder="receive_feedback (1-10)" min="1" max="10" value={receive_feedback || ''} onChange={e => setReceiveFeedback(e.target.value)} />
            </div>

            <div>
                <input type="number" placeholder="forehand_loop_feedback (1-10)" min="1" max="10" value={forehand_loop_feedback || ''} onChange={e => setForehandLoopFeedback(e.target.value)} />
            </div>

            <div>
                <input type="number" placeholder="backhand_loop_feedback (1-10)" min="1" max="10" value={backhand_loop_feedback || ''} onChange={e => setBackhandLoopFeedback(e.target.value)} />
            </div>

            <div>
                <input type="number" placeholder="forehand_block_feedback (1-10)" min="1" max="10" value={forehand_block_feedback || ''} onChange={e => setForehandBlockFeedback(e.target.value)} />
            </div>

            <div>
                <input type="number" placeholder="backhand_block_feedback (1-10)" min="1" max="10" value={backhand_block_feedback || ''} onChange={e => setBackhandBlockFeedback(e.target.value)} />
            </div>

            <div>
                <input type="number" placeholder="personal_feedback (1-10)" min="1" max="10" value={personal_feedback || ''} onChange={e => setPersonalFeedback(e.target.value)} />
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default SubmitFeedback;
