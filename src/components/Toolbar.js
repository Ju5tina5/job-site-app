import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {DataContext} from "../contexts/DataContext";

const Toolbar = () => {

    const {setLength} = useContext(DataContext);

    return (
        <div className={'toolBar d-flex space-btw'}>
            <img src="" alt="logo"/>
            <nav className={'d-flex'}>
                <Link to='/' onClick={() => setLength(4)}>Home</Link>
                <Link to='/allJobs' onClick={() => setLength(4)} >Find a Job</Link>
                <Link to='/postJob'>Post a Job</Link>
            </nav>
        </div>
    );
};

export default Toolbar;