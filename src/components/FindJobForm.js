import React, {useRef, useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {DataContext} from "../contexts/DataContext";

const FindJobForm = () => {

    const {onArrayFilter} = useContext(DataContext)

    let navigate = useNavigate();

    let refs = {
        keyWord: useRef(),
        region: useRef(),
        category: useRef()
    }


    const handleFormSubmit = (e) => {
        e.preventDefault();
        let filters = {
            keyWord: refs.keyWord.current.value,
            region: refs.region.current.value,
            category: refs.category.current.value,
        }
        onArrayFilter(filters)
        navigate('/allJobs')
    }


    return (
        <form onSubmit={handleFormSubmit} className={'d-flex'}>
            <input type="text" placeholder={'Keywords'} ref={refs.keyWord}/>
            <select ref={refs.region} defaultValue={"all-regions"}>
                <option value="all-regions">All Regions</option>
                <option value="Vilnius">Vilnius</option>
                <option value="Kaunas">Kaunas</option>
                <option value="Klaipėda">Klaipėda</option>
                <option value="Šiauliai">Šiauliai</option>
                <option value="Panevėžys">Panėvežys</option>
            </select>
            <select ref={refs.category} defaultValue={"all-categories"}>
                <option value="all-categories">All Categories</option>
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="marketing">Marketing</option>
                <option value="sales">Sales</option>
            </select>
            <button className={'btn'} type={"submit"}>Search Job</button>
        </form>
    );
};

export default FindJobForm;