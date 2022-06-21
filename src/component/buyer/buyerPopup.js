import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import BidProduct from "./bidProduct";

export default function BuyerPopup() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Bid Product
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Bid Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BidProduct></BidProduct>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Add</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  