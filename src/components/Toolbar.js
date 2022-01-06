import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {DataContext} from "../contexts/DataContext";

const Toolbar = () => {

    const {setLength} = useContext(DataContext);

    return (
        <div className={'toolBar d-flex space-btw'}>
            <div className={'logoWrapper d-flex justify-center'}>
                <a href="/">
                    <img src="https://www.swedcham.com.hk/wp-content/uploads/2020/12/job-5359923_1280.png" alt="logo"/>
                </a>
            </div>
            <nav className={'d-flex'}>
                <Link to='/' onClick={() => setLength(4)}>Home</Link>
                <Link to='/allJobs' onClick={() => setLength(4)} >Find a Job</Link>
                <Link to='/postJob' onClick={() => setLength(4)}>Post a Job</Link>
            </nav>
        </div>
    );
};

export default Toolbar;