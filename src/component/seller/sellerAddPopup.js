import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AddProduct from "./addProduct";

export default function SellerAddPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const properties ={
    close:setShow
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Product
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
          <AddProduct data={handleClose}></AddProduct>
        </Modal.Body>
      </Modal>
    </>
  );
}
