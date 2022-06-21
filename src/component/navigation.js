import { Navbar,Nav, Container, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import UseToken from './util/useToken';
import { withRouter } from 'react-router-dom';



export default function Navigation(props) {

    //const nav = useNavigate();
    const { token, setToken,deleteToken } = UseToken();

    const logout=()=>{
        deleteToken();
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">E Auction</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="/seller">Seller</Nav.Link>
                        <Nav.Link href="/buyer">Buyer</Nav.Link>
                        <Nav.Link href="/admin">Admin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <div className="me-3">
            <Nav className="me-auto">
            <Nav.Link href="/" onClick={logout} >Log Out</Nav.Link>
            </Nav>
            </div>
        </Navbar>
    );
}