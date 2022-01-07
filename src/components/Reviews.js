import React, {useContext} from 'react';
import {DataContext} from "../contexts/DataContext";
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'

const Reviews = () => {

    const {reviews} = useContext(DataContext);

    return (
        <section className={'d-flex flex-column align-center justify-center'}>
            <h2>Kind Words From Happy Candidates</h2>
            <p>What other people thought about the service provided by Jobify</p>
            <div className={'d-flex align-center'}>
                <AiFillCaretLeft className={'icon'}/>
                <div className={'reviewsWrapper d-flex'}>
                    {reviews.map( (x, index) =>
                        <div key={index} className={'card d-flex flex-column align-center'}>
                            <div className={"reviewText"}>{x.review}</div>
                            <h4>{x.customerName}</h4>
                            <img src={x.userPhoto} alt=""/>
                        </div>
                    )}
                </div>
                <AiFillCaretRight className={'icon'}/>
            </div>
        </section>
    );
};

export default Reviews;