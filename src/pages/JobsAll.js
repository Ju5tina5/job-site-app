import FindJobForm from "../components/FindJobForm";
import DisplayJobs from "../components/DisplayJobs";
import {useState} from "react";


const JobsAll = ({getJobs, length, addLength}) => {


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
        <main>
            <div>MAP</div>
            <section>
                <FindJobForm/>
                <div className={'d-flex'}>
                    {categoriesArr.map((x, index) =>
                        <div key={index}>
                            <label>{x}</label>
                            <input type="checkbox" onChange={(e) => handleOnChange(x, index)} checked={checkedState[index]}/>
                        </div>
                    )}
                </div>
                <DisplayJobs jobs={getJobs}/>
                {length !== getJobs.length && <button className={'btn'} onClick={() => addLength()}>Show more</button>}
            </section>
        </main>
    );
};

export default JobsAll;