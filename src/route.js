import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from './components/home';
import NewCourses from './components/newCourses';
import LoginStudent from './components/loginStudent'
import SignUpStudent from './components/signupStudent';
import LoginAdmin from './components/loginAdmin';
import AdminPortal from './components/adminPortal';
import StudentPortal from './components/studentPortal';



function ErrorPage() {
    return (
        <div>
            <h1>Error 404 Page not found</h1>
        </div>
    )
}
function RouteConfig() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route exact path="/newCourses" element={<NewCourses />} />
                    <Route exact path="/studentLogin" element={<LoginStudent />} />
                    <Route exact path="/studentSignup" element={<SignUpStudent />} />
                    <Route exact path="/adminLogin" element={<LoginAdmin />} />
                    <Route exact path="/adminPortal" element={<AdminPortal />} />
                    <Route exact path="/studentPortal" element={<StudentPortal />} />
                    <Route path="*" element={<ErrorPage />}>
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default RouteConfig