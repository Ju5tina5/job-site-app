import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {DataContext} from "../contexts/DataContext";
import {MdLocationPin} from 'react-icons/md';



const DisplayJobs = ({jobs}) => {
    let navigate = useNavigate();
    const {length} = useContext(DataContext);
    let arr = [];

    if(jobs.length !== 0){
        for (let i = 0; i < length; i++) {
            arr.push(jobs[i])
        }
    } else {
        return (
            <h1>No listings found!</h1>
        );
    }

    return (
        <div className={'d-flex flex-column'}>
            {arr.map(x =>
                <div onClick={() => navigate(`/singleJob/${x.id}`)} key={x.id} className={'jobCardSmall d-flex align-center'}>
                    <img src={x.image} alt=""/>
                    <div className={'jobAbout d-flex space-btw'}>
                        <div className={'d-flex flex-column justify-center'}>
                            <h4>{x.jobTitle}</h4>
                            <h5>{x.companyName}</h5>
                        </div>
                        <div className={'d-flex align-center'}>
                            <h4 className={'p-5'}><MdLocationPin />{x.location}, {x.region}</h4>
                            <p className={`jobType ${x.jobType}`}>{x.jobType}</p>
                        </div>
                    </div>
                </div>)}
        </div>
    );
};

export default DisplayJobs;