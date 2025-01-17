import { useEffect, useState } from "react"
import { Card, Row, Col, Container } from "react-bootstrap"
import { ThermometerHigh, ThermometerLow } from "react-bootstrap-icons"

const CitiesCards = function () {
  const [citiesData, setCitiesData] = useState([])
  const [loading, setLoading] = useState(true)

  const cities = [
    { name: "Rome", country: "IT" },
    { name: "Paris", country: "FR" },
    { name: "New York", country: "US" },
    { name: "Tokyo", country: "JP" },
    { name: "Berlin", country: "DE" },
    { name: "Beijing", country: "CN" },
  ]

  const getMeteoData = async (city, country) => {
    const apiKey = "937b8a3c1a272b5dca6afb9abea9f58b"

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric&lang=it`
      )

      if (response.ok) {
        const data = await response.json()
        return data
      } else {
        throw new Error("Errore nella chiamata API")
      }
    } catch (error) {
      console.log("Errore", error)
    }
  }

  useEffect(() => {
    const fetchCitiesData = async () => {
      setLoading(true)

      const citiesDataPromises = cities.map((city) =>
        getMeteoData(city.name, city.country)
      )

      try {
        const results = await Promise.all(citiesDataPromises)
        setCitiesData(results)
        setLoading(false)
      } catch (error) {
        console.log("Errore nel recupero dei dati delle città", error)
        setLoading(false)
      }
    }

    fetchCitiesData()
  }, [])

  if (loading) {
    return <h3>Caricamento dati...</h3>
  }

  return (
    <>
      <Container>
        <Row className=" mt-5">
          {citiesData.map((cityData, index) => {
            if (!cityData) return null
            const iconUrl = `https://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`
            return (
              <Col key={index} md={4} xl={2} className=" mb-4">
                <Card className="smallerCards h-100">
                  <Card.Body className=" d-flex flex-column align-content-center text-center">
                    <Card.Title className="fw-bolder text-info-emphasis">
                      <div className=" d-flex justify-content-center ">
                        <h4>
                          {cityData.name}, {cityData.sys.country}{" "}
                        </h4>
                        <img
                          src={iconUrl}
                          alt={cityData.weather[0].description}
                          style={{
                            width: "40px",
                            height: "40px",
                          }}
                        />
                      </div>
                    </Card.Title>
                    <Card.Text>
                      <p className="fw-bold my-1 px-4">
                        Temperatura massima: <ThermometerHigh />
                      </p>
                      <p>{cityData.main.temp_max}°C</p>
                      <p className="fw-bold my-1 px-4">
                        Temperatura minima: <ThermometerLow />
                      </p>
                      <p>{cityData.main.temp_min}°C</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default CitiesCards
