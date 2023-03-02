import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>Main</NavLink>---------
            <NavLink to={'/login'}>Login</NavLink>-------
            <NavLink to={'/profile'}>Profile</NavLink>-----
            <NavLink to={'/profile/setting'}>Setting</NavLink>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile/*'} element={
                    <div>
                        profile
                        <Routes>
                            <Route path={'/setting'} element={<div>setting</div>}/>
                        </Routes>
                    </div>
                }/>

            </Routes>
        </div>
    );
}

export default App;
