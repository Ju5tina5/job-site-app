import React from 'react';


const Info = ({info}) => {

    return (
        <div className={'infoWrapper d-flex flex-column justify-center'}>
            <h2>{info.header}</h2>
            <p>{info.text}</p>
            <button className={'btn-white btn'}>Getting Started</button>
        </div>
    );
};

export default Info;