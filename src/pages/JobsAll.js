import FindJobForm from "../components/FindJobForm";
import DisplayJobs from "../components/DisplayJobs";
import React, {useState} from "react";


const JobsAll = ({getJobs, length, addLength, removeLength}) => {


    let arrChanged = [];
    let categoriesArr = ["freelance", "full-time", "internship", "part-time", "temporary"];

    const [checkedState, setCheckedState] = useState(
        new Array(categoriesArr.length).fill(true)
    );

    const handleOnChange = (x, position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }

    return (
        <main style={{backgroundColor: '#f5f1f1'}}>
            <iframe src="https://embed.waze.com/iframe?zoom=8&lat=55.266598&lon=23.796387&ct=livemap" width="600"
                    height="450" allowFullScreen> </iframe>
            <section>
                <FindJobForm/>
                <div className={'d-flex justify-center checkBoxes'}>
                    {categoriesArr.map((x, index) =>
                        <div key={index}>
                            <label>{x}</label>
                            <input type="checkbox" onChange={(e) => handleOnChange(x, index)} checked={checkedState[index]}/>
                        </div>
                    )}
                </div>
                <DisplayJobs jobs={getJobs}/>
                <div className={'d-flex space-btw'}>
                    {length !== getJobs.length && <button className={'btn'} onClick={() => addLength()}>Show more</button>}
                    {length > 4 && <button className={'btn'} onClick={() => removeLength()}>Show Less</button>}
                </div>
            </section>
        </main>
    );
};

export default JobsAll;