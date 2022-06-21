import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AdminAddProduct from "./adminAddProduct";

export default function AdminPopup() {
    const [show, setShow] = useState(false);
    const [addUser, setAddUser] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddUserClose = () => setAddUser(false);
    const handleAddUserShow = () => setAddUser(true);
  
    return (
      <>
      <div class="row">
      <div class="col-md-4">
        <Button variant="primary" onClick={handleShow}>
          Add Product
        </Button>
        </div>
        <div class="col-md-4">
        <Button variant="primary" onClick={handleAddUserShow}>
          Add User
        </Button>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AdminAddProduct/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Add</Button>
          </Modal.Footer>
        </Modal>


        <Modal
          show={addUser}
          onHide={handleAddUserClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AdminAddProduct/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleAddUserClose}>
              Close
            </Button>
            <Button variant="primary">Add</Button>
          </Modal.Footer>
        </Modal>
        </div>
      </>
    );
  }
  