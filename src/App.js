import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Title from './Components/Title';

function App() {

  const [name, setName] = useState('mario');
  const [showEvt, setShowEvt] = useState(true);
  const [evt, setEvts] = useState([
    { name: "Harry", key: 1 },
    { name: "Hari", key: 2 },
    { name: "Ron", key: 3 }])

  const handleClick = (id) => {
    console.log(id);
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

  return (
    <div className="App">
      <Title/>
      {!showEvt && (<button onClick={handleShowEvt}>Show Events</button>)}
      {showEvt && (<button onClick={handleShowEvt}>Hide events</button>)}
      {showEvt && evt.map((event, idx) => (
        <div key={event.key}>Key : {event.key} Index : {idx} Name: {event.name}
          <button onClick={() => handleClick(event.key)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
