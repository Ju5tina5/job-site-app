import React, {useContext} from 'react';
import {DataContext} from "../contexts/DataContext";


const Articles = () => {

    const {articles} = useContext(DataContext)

    return (
        <section className={'d-flex flex-column align-center p-10'}>
            <h2>Recent News Articles</h2>
            <p>Fresh job related news content posted each day.</p>
            <div className={'d-flex space-evenly gap-15'}>
                {articles.map( x =>
                    <div key={x.id} className={'blogPost d-flex flex-column space-btw'}>
                        <img src={x.image} alt=""/>
                        <h3>{x.title}</h3>
                        <p>{x.text}</p>
                        <button className={'btn'}>Continue Reading</button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Articles;