import React, { useState } from 'react';

function Modal(props) {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
        window.open(props.image, '_blank');
    };

    return (
        <>
            <img src={props.image} onClick={handleShow} alt="" />
        </>
    );
}

export default Modal;