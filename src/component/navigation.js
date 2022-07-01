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
        localStorage.removeItem('user_type');
    }

    console.log(localStorage.getItem('user_type'));

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">E Auction</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        { (localStorage.getItem('user_type')!==null && localStorage.getItem('user_type') ==='seller')?<Nav.Link href="/seller">Seller</Nav.Link>:<div></div> }
                        { (localStorage.getItem('user_type')!==null && localStorage.getItem('user_type') ==='buyer')?<Nav.Link href="/buyer">Buyer</Nav.Link>:<div></div> }
                        { (localStorage.getItem('user_type')!==null && localStorage.getItem('user_type') ==='admin')?<Nav.Link href="/admin">Admin</Nav.Link>:<div></div> }
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