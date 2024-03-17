import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Title from './Components/Title';
import Modal from './Components/Modal';
import EventList from './Components/EventList';

function App() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('mario');
  const [showEvt, setShowEvt] = useState(true);
  const [evt, setEvts] = useState([
    { name: "Mario's bday bash", key: 1 },
    { name: "Luigi's party", key: 2 },
    { name: "Ron's race", key: 3 }])

  console.log(`Modal = ${modal}`);

  const handleClose = () => {
    setModal(!modal);
  }


  const handleClick = (id) => {
    //console.log(id);
    setEvts((prevEvent) => {
      return prevEvent.filter((event) => {
        return id !== event.key;
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
        <EventList events={evt} handleDelete = {handleClick}/></div>}
        
        
        <div><button onClick={handleClose}>Show Offers</button></div>
        
        
        {modal && (<Modal handleClose={handleClose}>
          <h2>10% Off Coupon</h2>
          <p>Use Code ____ to checkout</p>
          {/** <button onClick={handleClose}>Close</button>*/}
        </Modal>)}
      </div>
      );
}

      export default App;
