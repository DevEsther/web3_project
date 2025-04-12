import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface TruthCheckModalProps {
  show: boolean;
  handleClose: () => void;
}

const TruthCheckModal: React.FC<TruthCheckModalProps> = ({ show, handleClose }) => {
  const navigate = useNavigate();

 
  const handleCancel = () => {
    navigate('/dashboard'); 
    handleClose(); 
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to cancel the verification process?</p>
      </Modal.Body>
      <Modal.Footer>
  
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TruthCheckModal;
