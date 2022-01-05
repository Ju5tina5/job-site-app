import React from 'react';
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

const PostJob = ({postJob}) => {

    const navigation = useNavigate();
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('')

    const refs = {
        companyName: useRef(),
        jobTitle: useRef(),
        location: useRef(),
        email: useRef(),
        region: useRef(),
        jobType: useRef(),
        jobCategory: useRef(),
        description: useRef(),
        image: useRef(),
    }

    const handleSubmitValues = (e) => {
        e.preventDefault();
        // new job post data
        let newJob = {
            companyName: refs.companyName.current.value,
            jobTitle: refs.jobTitle.current.value,
            location: refs.location.current.value,
            email: refs.email.current.value,
            region: refs.region.current.value,
            jobType: refs.jobType.current.value,
            jobCategory: refs.jobCategory.current.value,
            description: refs.description.current.value,
            image: refs.image.current.value
        }

        if((newJob.companyName.length < 5 || newJob.companyName.length > 50) ||
            (newJob.jobTitle.length < 5 || newJob.jobTitle.length > 50) ||
            (newJob.location.length < 5 || newJob.location.length > 50)){
            setErrorMsg('Text minimal length should at least 6 symbols long, but no longer than 50 ')
            return setError(true);
        }
        if(newJob.description.length < 20 || newJob.description.length > 500){
            setErrorMsg('Description minimal length should at least 20 symbols long, but no longer than 500 symbols')
            return setError(true);
        }
        if(newJob.image.substring(0,4) !== 'http'){
            setErrorMsg('Image link should be provided')
            return setError(true);
        }

        postJob(newJob)
        setError(false)
        navigation('/allJobs')
    }

    const handleTextChange = (e, num) => {
        if(e.target.value.length < num){
            e.target.style = 'color: red';
        } else {
            e.target.style = 'color: black';
        }
    }

    return (
        <main>
            <h1>Post new job</h1>
            <form className={'d-flex flex-column'} onSubmit={handleSubmitValues}>
                <label htmlFor={refs.companyName}>Company Name</label>
                <input type="text" ref={refs.companyName} onChange={(e) => handleTextChange(e, 6)}/>
                <label htmlFor={refs.jobTitle}>Job title</label>
                <input type="text" ref={refs.jobTitle} onChange={(e) => handleTextChange(e, 6)}/>
                <label htmlFor={refs.location}>Location</label>
                <input type="text" ref={refs.location} onChange={(e) => handleTextChange(e, 6)}/>
                <label htmlFor={refs.email}>Email</label>
                <input type="email" ref={refs.email} required/>
                <label htmlFor={refs.region}>Region</label>
                <select ref={refs.region}>
                    <option value="Vilnius">Vilnius</option>
                    <option value="Kaunas">Kaunas</option>
                    <option value="Klaipėda">Klaipėda</option>
                    <option value="Šiauliai">Šiauliai</option>
                    <option value="Panevėžys">Panėvežys</option>
                </select>
                <label htmlFor={refs.jobType}>Job type</label>
                <select ref={refs.jobType}>
                    <option value="freelance">Freelance</option>
                    <option value="full-time">Full Time</option>
                    <option value="internship">Internship</option>
                    <option value="part-time">Part Time</option>
                    <option value="temporary">Temporary</option>
                </select>
                <label htmlFor={refs.jobCategory}>Job Category</label>
                <select ref={refs.jobCategory}>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                </select>
                <label htmlFor={refs.description}>Description</label>
                <textarea ref={refs.description} onChange={(e) => handleTextChange(e, 20)}/>
                <label htmlFor={refs.image}>Company Logo URL</label>
                <input type="text" ref={refs.image}/>
                <button className={'btn'} type={"submit"}>Post Job</button>
            </form>
            {error && <h2 style={{color: 'red'}}>{errorMsg}</h2>}
        </main>
    );
};

export default PostJob;