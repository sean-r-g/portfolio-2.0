import useState from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const NavBar = ({handleShowHome, handleShowAbout}) => {

    return (
            <Navbar id='topnavbar' collapseOnSelect={true} fixed='top' variant='dark' expand="lg">
            <Container>
            <Navbar.Brand id='brand' href='#home'>Sean Gillis</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href='#about'>About</Nav.Link>
                <Nav.Link href='#projects'>My Work</Nav.Link>
                <Nav.Link href="https://drive.google.com/file/d/1trkHvPrEfU-TsN-0tg4gWU41gaR0ro2L/view?usp=sharing">Experience</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item>Action</NavDropdown.Item>
                    <NavDropdown.Item>Another action</NavDropdown.Item>
                    <NavDropdown.Item>Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                <Nav>
                <Nav.Link href='https://www.linkedin.com/in/seanrgillis/'>
                    <img class='social-icon' id="li-logo" src='https://cdn-icons-png.flaticon.com/512/174/174857.png'/>
                </Nav.Link>
                <Nav.Link href='https://github.com/sean-r-g' eventKey={2}>
                    <img class='social-icon' id="gh-logo" src='https://cdn-icons-png.flaticon.com/512/733/733609.png'/>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default NavBar