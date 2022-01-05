import React, {useState} from 'react';
import FindJobForm from "../components/FindJobForm";
import DisplayJobs from "../components/DisplayJobs";

const Home = ({getJobs, length, addLength}) => {



    return (
        <main>
            <section>
                <h3>Find your dream job here</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ad aliquid atque dolor earum exercitationem odit!
                    Ipsum nisi quibusdam tempora veniam.</p>
                <FindJobForm/>
            </section>
            <section>Companies</section>
            <section>INFO</section>
            <section>
                <DisplayJobs jobs={getJobs}/>
                {length !== getJobs.length && <button className={'btn'} onClick={() => addLength()}>Show more</button>}
            </section>
            <section>INFO</section>
            <section>STATS</section>
        </main>
    );
};

export default Home;