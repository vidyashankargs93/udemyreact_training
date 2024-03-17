import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Title from './Components/Title';
import Modal from './Components/Modal';
import EventList from './Components/EventList';
import NewEventForm from './Components/NewEventForm';

function App() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('mario');
  const [showEvt, setShowEvt] = useState(false);
  const [evt, setEvts] = useState([]);

  const addEvent = (event) => {
    setEvts((prevEvents) => {
      return([...prevEvents,event])
    })
    setModal(false);
  }

  const handleClose = () => {
    setModal(!modal);
  }


  const handleClick = (id) => {
    //console.log(id);
    setEvts((prevEvent) => {
      return prevEvent.filter((event) => {
        return id !== event.id;
      })
    });

  }

  const handleShowEvt = () => {
    setShowEvt(!showEvt);
    console.log(showEvt);
  }

  const subtitle = "Team Members"

  return (
    <div className="App">
      <Title title="Hey Mario family" subtitle={subtitle} />

      {!showEvt && (<div><button onClick={handleShowEvt}>Show Events</button></div>)}
      {showEvt && (<div><button onClick={handleShowEvt}>Hide events</button></div>)}

      {showEvt && <div>
        <EventList events={evt} handleDelete={handleClick} /></div>}


      <div><button onClick={handleClose}>Add New Event</button></div>


      {modal && (<Modal handleClose={handleClose}>
        <NewEventForm addEvent={addEvent}/>

        {/**<h2>10% Off Coupon</h2>
          <p>Use Code ____ to checkout</p>
          {/** <button onClick={handleClose}>Close</button>*/}
      </Modal>)}
    </div>
  );
}

export default App;
