import React, { useState,useRef } from 'react'
import './NewEventForm.css'

export default function NewEventForm({addEvent}) {
    // const [title, setTitle] = useState('');
    // const [date, setdate] = useState('');
    const [location, setLocation] = useState('Bengaluru');

    const title = useRef();
    const date = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const event = {
            title: title.current.value,
            date:date.current.value,
            location : location,
            id : Math.floor(Math.random()*1000)
        }
        console.log(event);
        addEvent(event);
    }

    const resetForm = () =>{
        title.current.value="";
        date.current.value="";
    }

    return (
        <form className='new-event-form' onSubmit={handleSubmit}>
            <label>
                <span>Event title:</span>
                {/**<input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>**/}
                <input type="text" ref={title}/>
            </label>
            <label>
                <span>Event date:</span>
                {/**<input type="date" onChange={(e) => setdate(e.target.value)} value={date}/>**/}
                <input type="date" ref={date}/><br/>
                <span>Destination </span> : <select onChange={(e)=> setLocation(e.target.value)}>
                    <option value="Mysore">Mysore</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Udupi">Udupi</option>
                </select>
            </label><center>
            <button type='Submit'>Submit</button>
            <button type='reset' onClick={resetForm}>Reset</button>
            </center>
        </form >
    )
}
