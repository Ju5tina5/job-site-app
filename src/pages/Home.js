import React from 'react';
import FindJobForm from "../components/FindJobForm";
import DisplayJobs from "../components/DisplayJobs";
import Clients from '../components/Clients'
import {DataContext} from "../contexts/DataContext";

const Home = ({getJobs, length, addLength}) => {



    return (
        <main>
            <div className={'d-flex justify-center headerWrapper'}>
                <section className={'d-flex flex-column justify-center'}>
                    <h2>Find your dream job here</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad aliquid atque dolor earum exercitationem odit!
                        Ipsum nisi quibusdam tempora veniam.</p>
                    <FindJobForm/>
                </section>
            </div>
            <Clients />
            <section>INFO</section>
            <section>
                <h2>Hundreds of Jobs From All Over the Globe</h2>
                <DisplayJobs jobs={getJobs}/>
                {length !== getJobs.length && <button className={'btn'} onClick={() => addLength()}>Show more</button>}
            </section>
            <section>INFO</section>
            <section>STATS</section>
        </main>
    );
};

export default Home;