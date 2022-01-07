import React, {useContext} from 'react';
import {DataContext} from "../contexts/DataContext";

const Clients = () => {

    const {getJobPosts} = useContext(DataContext);

    let clientImgArr = getJobPosts.slice(0, 5);

    return (
        <section className={'d-flex flex-column justify-center align-center p-10'}>
            <h2>Find your dream job here</h2>
            <p>Some of the companies we've helped recruit excellent applicants over the years.</p>
            <div className={'imgWrapper d-flex space-evenly'}>
                {clientImgArr.map( x =>
                    <div style={{backgroundImage: `url(${x.image})`}} key={x.id}> </div>
                )}
            </div>
        </section>
    );
};

export default Clients;