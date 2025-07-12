import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function Experience(){
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');

    const companyNameRef = useRef(null);
    const positionTitleRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        if (!companyName || !positionTitle || !startDate || !endDate) {
            alert('Please fill in all fields and select both dates.');
            return;
        }
        // You can replace this with any logic (API call, state update, etc.)
        window.location.href = "summary.html";
        alert(`Data Submitted !`);
        
    }

    const handleSave = (e) =>{
        e.preventDefault();
        if(!startDate || !endDate || !companyName || !positionTitle){
            alert("Please fill in all fields.");
        }
        else{
            const formData = {companyName, positionTitle, startDate, endDate};
            localStorage.setItem("experienceInfo", JSON.stringify(formData));
            alert("Data saved successfully!");
        }
    }

    return(
        <>
        <section className='general-section'>
            <div className='container2'>
                <div className="item">
                    <h2>Company Name</h2>
                    <input ref={companyNameRef} id='basics' type="text"
                        placeholder='Enter your Company Name'
                        value={companyName} onChange={e=>setCompanyName(e.target.value)}
                    />
                    <span>{companyName}</span>
                    <button type="button"
                        onClick={()=> companyNameRef.current && companyNameRef.current.focus()}>
                            Edit
                    </button>
                </div>
                <div className="item">
                    <h2>Position Title</h2>
                    <input ref={positionTitleRef} id='basics' type="Email" 
                        placeholder='Enter your Position Title'
                        value={positionTitle} onChange={e=>setPositionTitle(e.target.value)}
                    />
                    <span>{positionTitle}</span>
                    <button type="button"
                        onClick={()=> positionTitleRef.current && positionTitleRef.current.focus()}>
                        Edit
                    </button>
                </div>
                <div className="item2">
                    <h2>Total Experience</h2>
                    <div className="dates-div">
                        <h2>From</h2>
                        <DatePicker 
                        selected={startDate} onChange={(date)=>setStartDate(date)} 
                        selectsStart 
                        startDate={startDate}
                        endDate={endDate}
                        // ref={experienceRef}
                        // value={experience}
                        // onClick={e=>setExperience(e.target.value)}
                        placeholderText="Select Start Date"
                        dateFormat="dd/MM/yyyy"
                        isClearable
                        className="date"
                        />
                    </div>
                    <div className="dates-div">
                        <h2>To</h2>
                        <DatePicker
                        selected={endDate} onChange={(date)=>setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Select End Date"
                        dateFormat="dd/MM/yyyy"
                        isClearable
                        className="date"
                        />
                    </div>
                </div>
                <form onSubmit={handleSave}>
                    <button type="submit" className="save-button">
                        Save
                    </button>
                </form>
                <div className="submit-button">
                    <button type="submit" onClick={handleSubmit}    >
                        Submit
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}