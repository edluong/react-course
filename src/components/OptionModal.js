import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption} //!! returns the opposite of the truthy statement
        contentLabel="Selected Option"
        ariaHideApp={false}
        onRequestClose={props.handleCloseModal}
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleCloseModal}>Okay</button>
    </Modal>
);

export default OptionModal;