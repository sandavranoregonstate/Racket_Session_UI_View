import React, {useState} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'



import ListFeedback from "./pages/ParentFeedback";
import Result from "./pages/ListResult";
import ParentMatch from "./pages/ParentMatch";
import ParentSchedule from "./pages/ParentSchedule";
import ParentFeedback from "./pages/ParentFeedback";
import ParentResult from "./pages/ParentResult";

import SignInPage from "./pages/SignInPage"
import SignOutPage from "./pages/SignOutPage"
import LogInPage from "./pages/LogInPage"

function App() {

    const [ id_user, setIdUser ] = useState( 1 );

    return (
        <Routes>

            <Route path="/schedule" element={<ParentSchedule />} />
            <Route path="/match" element={<ParentMatch />} />
            <Route path="/feedback" element={<ParentFeedback />} />
            <Route path="/result" element={<ParentResult />} />

            <Route path="/" element={<Navigate to="/search" />} />

            <Route path="/the_register" element={<LogInPage />} />
            <Route path="/log_in" element={<SignInPage />} />
            <Route path="/log_exit" element={<SignOutPage />} />
        </Routes>

    )
}

export default App
