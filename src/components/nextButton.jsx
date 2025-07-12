import { useState } from "react"
import Education from "./education"
import General from "./general"
import Experience from "./experience"

export default function NextButton(){

    const [page, setPage] = useState("general")
    const handlePage = () =>{
        setPage("education")
    }
    const handlePrevPage = () =>{
        setPage("general")
    }
    const secondPage = () =>{
        setPage("experience")
    }

    

    return(
        <div className="nextButton">
            {page === 'general' &&(
        <>
            <General/>
            <button className="button" type="button"
            onClick={handlePage}>
                Next Page
            </button>
        </>
            )}
            {page === 'education' && (
        <>
            <Education/>
            <button className="button" type="button"
            onClick={secondPage}>
                Next Page
            </button>
        </>
            )}
            {page === 'experience' && (
        <>
            <Experience/>
            <button type="button" className="button"
            onClick={handlePrevPage}>
                Go Back
            </button>
        </>
            )}
        </div>
    )
}