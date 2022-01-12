import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ReportPage from "./report/ReportPage";
import Main from "./Main";
import PassengerPage from "./passenger/PassengerPage";

const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Main />} />
            <Route path={'/report'} element={<ReportPage />} />
            <Route path={'/passenger'} element={<PassengerPage />} />
        </Routes>

);
};

export default App;
