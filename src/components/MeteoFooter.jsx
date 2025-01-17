import { Container, Row } from "react-bootstrap"

const MeteoFooter = function () {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <p>&copy;2025 MeteoApp. Tutti i diritti riservati.</p>
          <p>
            Dati meteo forniti da{" "}
            <a href="https://openweathermap.org/" target="_blank">
              OpenWeather
            </a>
          </p>
        </Row>
      </Container>
    </footer>
  )
}

export default MeteoFooter
