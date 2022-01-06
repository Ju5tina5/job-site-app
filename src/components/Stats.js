import React from 'react';

const Stats = ({jobs}) => {

    const distinctCompanies = [...new Set(jobs.map( x => x.companyName))]

    return (
        <section className={'d-flex flex-column align-center'}>
           <h2>Jobify Site Stats</h2>
            <p style={{textAlign: 'center'}}>Here we list our site stats and how many people we’ve helped find a job and companies have found recruits. It's a pretty awesome stats area!</p>
            <div className={'d-flex align-center space-btw gap-15'}>
                <div className={'d-flex flex-column align-center'}>
                    <h2>{jobs.length}</h2>
                    <h3>Jobs Posted</h3>
                </div>
                <div className={'d-flex flex-column align-center'}>
                    <h2>0</h2>
                    <h3>Jobs Filled</h3>
                </div>
                <div className={'d-flex flex-column align-center'}>
                    <h2>{distinctCompanies.length}</h2>
                    <h3>Companies</h3>
                </div>
                <div className={'d-flex flex-column align-center'}>
                    <h2>{Math.floor(Math.random() * 1000)}</h2>
                    <h3>Members</h3>
                </div>
            </div>
        </section>
    );
};

export default Stats;