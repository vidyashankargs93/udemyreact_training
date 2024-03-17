import React from 'react'

export default function EventList({ events, handleDelete }) {
    return (
        <div>
            {events.map((event, idx) => (
                <div>
                    <React.Fragment key={event.id}>
                    <h2>{idx} - {event.name}</h2>
                        <button onClick={() => handleDelete(event.key)}>Delete</button>
                    </React.Fragment>
                </div>)
            )}
        </div>
    )
}
