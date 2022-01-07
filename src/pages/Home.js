import React from 'react';
import FindJobForm from "../components/FindJobForm";
import DisplayJobs from "../components/DisplayJobs";
import Clients from '../components/Clients'
import Info from "../components/Info";
import Stats from "../components/Stats";
import Articles from "../components/Articles";
import Reviews from "../components/Reviews";

const Home = ({getJobs, length, addLength, removeLength, information}) => {

    return (
        <>
            <main className={'partOne'}>
                <div className={'d-flex justify-center headerWrapper'}>
                    <section className={'d-flex flex-column justify-center'}>
                        <h2>Find your dream job here</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ad aliquid atque dolor earum exercitationem odit!
                            Ipsum nisi quibusdam tempora veniam.</p>
                        <FindJobForm/>
                    </section>
                </div>
                <article>
                    <Clients/>
                </article>
                <section className={'d-flex flex-end'}>
                    <Info info={information[0]}/>
                </section>
            </main>
            <main className={'partTwo'}>
                <article>
                    <section>
                        <h2>Hundreds of Jobs From All Over the Globe</h2>
                        <DisplayJobs jobs={getJobs}/>
                        <div className={'d-flex space-btw'}>
                            {length !== getJobs.length &&
                            <button className={'btn'} onClick={() => addLength()}>Show more</button>}
                            {length > 4 && <button className={'btn'} onClick={() => removeLength()}>Show Less</button>}
                        </div>
                    </section>
                </article>
                <section>
                    <Info info={information[1]}/>
                </section>
                <article>
                    <Stats jobs={getJobs}/>
                </article>
                <article className={'reviews'}>
                    <Reviews/>
                </article>
                <article>
                    <Articles/>
                </article>
            </main>
        </>
    );
};

export default Home;