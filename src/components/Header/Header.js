import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'; //them
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">Hỏi Hòa Lợi</Navbar.Brand> */}
        <NavLink to="/" className='navbar-brand'>Hỏi Hòa Lợi</NavLink>



        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <NavLink to="/" className='nav-link'>Home</NavLink>
            {/* <Nav.Link href="/users">Users</Nav.Link> */}
            <NavLink to="/users" className='nav-link' >User</NavLink>
            {/* <Nav.Link href="/admins">Admin</Nav.Link> */}
            <NavLink to="/admins" className='nav-link'>Admin</NavLink>
          </Nav>

          <Nav>
            <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item >Log in</NavDropdown.Item>
              <NavDropdown.Item >Log out</NavDropdown.Item>
              <NavDropdown.Item >Profile</NavDropdown.Item>
              <NavDropdown.Divider />

            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;