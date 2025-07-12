import { useState, useRef } from "react"

function General(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!name || !email || !phone) {
            alert("Please fill in all fields.");
        }
        else{
            const formData = {name, email, phone};
            localStorage.setItem("generalInfo", JSON.stringify(formData));
            alert("Data Saved successfully!");
        }
    }

    return(
        <>
        <section className='general-section'>
            <div className='container2'>
                <div className="item">
                    <h2>Name</h2>
                    <input ref={nameRef} id='basics' type="text"
                        placeholder='Enter your name' name='name'
                        value={name} 
                        onChange={e => setName(e.target.value)} required />
                    <span>{name}</span>
                    <button type="button" onClick={() => nameRef.current && nameRef.current.focus()}>Edit</button>
                </div>
                <div className="item">
                    <h2>Email</h2>
                    <input ref={emailRef} id='basics' type="email"
                        placeholder='Enter your Email here' name='email'
                        value={email} 
                        onChange={e => setEmail(e.target.value)} required />
                    <span>{email}</span>
                    <button type="button" onClick={() => emailRef.current && emailRef.current.focus()}>Edit</button>
                </div>
                <div className="item">
                    <h2>Phone</h2>
                    <input ref={phoneRef} id='basics'
                        type="number" placeholder='Enter your phone number'
                        name='phone' value={phone} 
                        onChange={e => setPhone(e.target.value)} required/>
                    <span>
                        {phone}
                    </span>
                    <button type="button" onClick=
                        {() => phoneRef.current && phoneRef.current.focus()}>
                        Edit
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <button type="submit" className="save-button">
                            Save
                    </button>
                </form>
            </div>
        </section>
        </>
    )
}

export default General