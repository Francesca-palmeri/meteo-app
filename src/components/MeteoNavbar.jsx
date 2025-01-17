import { Navbar, Nav, Container } from "react-bootstrap"

const MeteoNavbar = function () {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#previsioni">Previsioni</Nav.Link>
            <Nav.Link href="#radar">Radar</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Venti e Mari</Nav.Link>
            <Nav.Link eventKey={2} href="#Utilità">
              Utilità
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MeteoNavbar
