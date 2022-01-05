import React from 'react';
import {useParams} from "react-router-dom";

const SingleJobPost = ({jobs}) => {

    let {id} = useParams();

    const found = jobs.find( x => x.id === id )

    return (
        <main>
            <header>
                <h2>{found.jobTitle}</h2>
                <p className={`jobType ${found.jobType}`}>{found.jobType}</p>
                <h4>{found.location}{found.region}</h4>
                <h5>{found.companyName}</h5>
            </header>
            <section className={'d-flex'}>
                <img src={found.image} alt=""/>
                <div className={'d-flex flex-column'}>
                    <h3>Job Categories</h3>
                    <a href="#">{found.jobCategory}</a>
                    <h3>Share Posting</h3>
                </div>
                <div className={'d-flex flex-column'}>
                    <h3>Company Social Profiles</h3>
                    <a href="#">FB</a>
                    <button className={'btn'}>Apply</button>
                </div>
            </section>
            <section>
                <h3>OverView</h3>
                <img className={'bannerImg'} src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/hero-job-image.jpg" alt=""/>
                <p>{found.description}</p>
            </section>
        </main>
    );
};

export default SingleJobPost;