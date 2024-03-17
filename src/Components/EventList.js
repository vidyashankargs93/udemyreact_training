import React from 'react'
import './EventList.css'

export default function EventList({ events, handleDelete }) {
    return (
        <div>
            {events.map((event, idx) => (
                <div className='card'>
                    <React.Fragment key={event.id}>
                    <h2>{event.title}</h2>
                    <p>{event.location} - {event.date} </p>
                        <button onClick={() => handleDelete(event.id)}>Delete</button>
                    </React.Fragment>
                </div>)
            )}
        </div>
    )
}
