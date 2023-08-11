import React, {useState} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'



import ListFeedback from "./pages/ParentFeedback";
import Result from "./pages/ListResult";
import ParentMatch from "./pages/ParentMatch";
import ParentSchedule from "./pages/ParentSchedule";
import ParentFeedback from "./pages/ParentFeedback";
import ParentResult from "./pages/ParentResult";

function App() {

    const [ id_user, setIdUser ] = useState( 1 );

    return (
        <Routes>

            <Route path="/schedule" element={<ParentSchedule />} />
            <Route path="/match" element={<ParentMatch />} />
            <Route path="/feedback" element={<ParentFeedback />} />
            <Route path="/result" element={<ParentResult />} />

            <Route path="/" element={<Navigate to="/search" />} />
        </Routes>

    )
}

export default App
