import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {DataContext} from "../contexts/DataContext";

const DisplayJobs = ({jobs}) => {
    let navigate = useNavigate();
    const {length} = useContext(DataContext);
    let arr = [];

    if(jobs.length !== 0){
        for (let i = 0; i < length; i++) {
            arr.push(jobs[i])
        }
    }

    if (arr.length === 0) {
        return (
            <h1>No listings found!</h1>
        );
    }


    return (
        <div className={'d-flex flex-column'}>
            {arr.map(x =>
                <div onClick={() => navigate(`/singleJob/${x.id}`)} key={x.id} className={'jobCardSmall d-flex'}>
                    <img src={x.image} alt=""/>
                    <div className={'jobAbout d-flex space-btw'}>
                        <div className={'d-flex flex-column'}>
                            <h4>{x.jobTitle}</h4>
                            <h5>{x.companyName}</h5>
                        </div>
                        <div className={'d-flex'}>
                            <h4>{x.location}{x.region}</h4>
                            <p className={`jobType ${x.jobType}`}>{x.jobType}</p>
                        </div>
                    </div>
                </div>)}
        </div>
    );
};

export default DisplayJobs;