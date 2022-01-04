import React from 'react';
import {Link} from "react-router-dom";

const Toolbar = () => {
    return (
        <div className={'toolBar d-flex'}>
            <img src="" alt="logo"/>
            <nav className={'d-flex'}>
                <Link to='/'>Home</Link>
                <Link to='/allJobs'>Find a Job</Link>
                <Link to='/postJob'>Post a Job</Link>
            </nav>
        </div>
    );
};

export default Toolbar;