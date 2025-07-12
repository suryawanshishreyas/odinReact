import React, {useState, useRef} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Education(){
    const [schoolName, setSchoolName] = useState('');
    const [studyTitle, setStudyTitle] = useState('');
    const [dateStudy, setdateStudy] = useState(null);

    const schoolNameRef= useRef(null);
    const studyTitleRef = useRef(null);
    const dateStudyRef = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!schoolName || !studyTitle || !dateStudy){
            alert("Please fill in all fields.");
        }
        else{
            const formData = {schoolName, studyTitle, dateStudy};
            localStorage.setItem("educationInfo", JSON.stringify(formData));
            alert("Data saved successfully!");
        }
    }

    return(
        <>
        <section className='general-section'>
            <div className='container2'>
                <div className="item">
                    <h2>School Name</h2>
                    <input ref={schoolNameRef} id='basics' type="text" 
                        placeholder='Enter your School Name' name='schoolName'
                        value={schoolName} onChange={e=>setSchoolName(e.target.value)}/>
                    <span>{schoolName}</span>
                    <button type="button" 
                        onClick={()=> schoolNameRef.current && 
                        schoolNameRef.current.focus()}>
                        Edit
                    </button>
                </div>
                <div className="item">
                    <h2>Title of Study</h2>
                    <input ref={studyTitleRef} id='basics' type="text"
                        placeholder='Enter Study Title heres' name='studyTitle'
                        onChange={e=>setStudyTitle(e.target.value)} value={studyTitle}/>
                     <span>{studyTitle}</span>
                     <button type='button'
                        onClick={()=> studyTitleRef.current &&
                        studyTitleRef.current.focus()}>
                        Edit
                     </button>
                </div>
                <div className="item">
                    <h2>Date of Study</h2>
                    <DatePicker
                        selected={dateStudy}
                        onChange={date => setdateStudy(date)}
                        placeholderText="Enter your Date of Study"
                        ref={dateStudyRef}
                        dateFormat="yyyy-MM-dd"
                        id="basics"
                        name="dateStudy"
                    />
                    <span>{dateStudy ? dateStudy.toLocaleDateString() : ''}</span>
                    <button type="button"
                        onClick={() => dateStudyRef.current && dateStudyRef.current.setFocus && dateStudyRef.current.setFocus()}>
                        Edit
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <button type='submit' className='save-button'>
                        Save
                    </button>
                </form>
            </div>
        </section>
        </>
    )
}