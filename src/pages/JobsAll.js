import FindJobForm from "../components/FindJobForm";
import DisplayJobs from "../components/DisplayJobs";
import React, {useState, useRef} from "react";


const JobsAll = ({getJobs, length, addLength, removeLength, checkedFilterFilter}) => {

    const bottomScroll = useRef();
    const topScroll = useRef();

    let categoriesArr = ["freelance", "full-time", "internship", "part-time", "temporary"];

    const [checkedState, setCheckedState] = useState(
        new Array(categoriesArr.length).fill(true)
    );

    const handleOnChange = (type, position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        checkedFilterFilter(!checkedState[position], type)
    }

    return (
        <main   style={{backgroundColor: '#f5f1f1'}}>
            <iframe
                ref={topScroll}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1166725.520919375!2d22.759610803974933!3d55.169961266818795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd94140f33be13%3A0xf30a54d3a55dbab9!2sLietuva!5e0!3m2!1slt!2slt!4v1641548373452!5m2!1slt!2slt"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"> </iframe>
            <section>
                <FindJobForm   />
                <div className={'d-flex align-center space-evenly checkBoxes'}>
                    <h3>Job type:</h3>
                    {categoriesArr.map((x, index) =>
                        <div key={index} className={'d-flex align-center space-btw'}>
                            <label>{x}</label>
                            <input type="checkbox" onChange={() => handleOnChange(x, index)} checked={checkedState[index]}/>
                        </div>
                    )}
                </div>
                <strong>Jobs by current filter: {getJobs.length}</strong>
                <DisplayJobs jobs={getJobs}/>
                <div className={'d-flex space-btw'}>
                    {length !== getJobs.length && <button ref={bottomScroll} className={'btn'} onClick={() => {
                        addLength();
                        bottomScroll.current.scrollIntoView({behavior: 'smooth', block: 'start'} )
                    }
                    }>Show more</button>}
                    {length > 4 && <button className={'btn'} onClick={() => {
                        removeLength()
                        window.scrollTo({ behavior: 'smooth', top: (topScroll.current.offsetTop + 300) })
                    }
                    }>Show Less</button>}
                </div>
            </section>
        </main>
    );
};

export default JobsAll;