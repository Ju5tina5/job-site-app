import React from 'react';
import {useRef, useState} from "react";

const PostJob = () => {

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

        console.log(newJob)
        setError(false)
    }

    const handleTextChange = (e) => {
        if(e.target.value.length < 6){
            e.target.style = 'color: red';
        } else {
            e.target.style = 'color: black';
        }
    }

    return (
        <main>
            <h1>Post new job</h1>
            {error && <h2>{errorMsg}</h2>}
            <form className={'d-flex flex-column'} onSubmit={handleSubmitValues}>
                <label htmlFor={refs.companyName}>Company Name</label>
                <input type="text" ref={refs.companyName} onChange={handleTextChange}/>
                <label htmlFor={refs.jobTitle}>Job title</label>
                <input type="text" ref={refs.jobTitle} onChange={handleTextChange}/>
                <label htmlFor={refs.location}>Location</label>
                <input type="text" ref={refs.location} onChange={handleTextChange}/>
                <label htmlFor={refs.email}>Email</label>
                <input type="email" ref={refs.email} required/>
                <label htmlFor={refs.region}>Region</label>
                <select ref={refs.region}>
                    <option value="vilnius">Vilnius</option>
                    <option value="kaunas">Kaunas</option>
                    <option value="klaipeda">Klaipėda</option>
                    <option value="siauliai">Šiauliai</option>
                    <option value="panevezys">Panėvežys</option>
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
                <textarea ref={refs.description} onChange={handleTextChange}/>
                <label htmlFor={refs.image}>Company Logo URL</label>
                <input type="text" ref={refs.image}/>
                <button className={'btn'} type={"submit"}>Post Job</button>
            </form>
        </main>
    );
};

export default PostJob;