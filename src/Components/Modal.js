import React, { useState } from 'react'
import  ReactDOM  from 'react-dom';
import './modal.css'

export default function Modal({ children, handleClose }) {
    const [modal1, setModal1] = useState(true);

    return ReactDOM.createPortal((
        <div className='modal-backdrop'>
            <div className='modal'>
                {children}
                <center><button onClick={handleClose}>Close</button></center>
            </div>
        </div>
    ),document.body)
}
