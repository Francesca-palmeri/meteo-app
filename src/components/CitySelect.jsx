import { useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import MeteoCard from "./MeteoCard" // Assicurati di importare il componente MeteoCard

const CitySelect = function () {
  const [location, setLocation] = useState("") // Stato per città e paese (città, paese)

  // Funzione per gestire la modifica del valore dell'input
  const handleLocationChange = (e) => {
    setLocation(e.target.value) // Modifica la città e paese
  }

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col Col xs={12} md={8}>
            <h1 className="text-center my-3">Cerca una città e un paese</h1>

            {/* Input per la città e il paese */}
            <Form.Control
              type="text"
              placeholder="Cerca la località (Esempio: Roma, It)"
              value={location}
              onChange={handleLocationChange}
              // Aggiorna la città e il paese inseriti
            />
          </Col>
        </Row>
      </Container>
      <Container className=" mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            {/* Card per il meteo */}
            <MeteoCard location={location} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CitySelect
