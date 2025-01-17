import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"

const MeteoCard = function (props) {
  const [meteoData, setMeteoData] = useState({})
  const [loading, setLoading] = useState(true)

  const getMeteoData = async () => {
    const apiKey = "937b8a3c1a272b5dca6afb9abea9f58b"
    const [city, country] = props.location.split(",")

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric&lang=it`
      )

      if (response.ok) {
        const data = await response.json()
        console.log("SONO DATA", data)
        setMeteoData(data)
        setLoading(false)
      } else {
        throw new Error("Errore nella chiamata API")
      }
    } catch (error) {
      console.log("Errore", error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getMeteoData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location]) // Effettua la ricerca ogni volta che cambia la location

  if (loading) {
    return <h3>Nessuna città selezionata</h3>
  }

  if (!meteoData.main) {
    return <div>Impossibile recuperare i dati per {props.location}</div>
  }

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title className=" fw-bolder">
          {meteoData.weather.icon}
          <h2>
            {meteoData.name}, {meteoData.sys.country}
          </h2>
        </Card.Title>
        <Card.Text>
          <p>
            <span className=" fw-bold">Temperatura:</span> {meteoData.main.temp}
            °C
          </p>
          <p>
            <span className=" fw-bold">Temperatura percepita: </span>
            {meteoData.main.feels_like}°C
          </p>
          <p>
            <span className=" fw-bold">Descrizione:</span>{" "}
            {meteoData.weather[0].description}
          </p>
          <p>
            <span className=" fw-bold">Umidità:</span> {meteoData.main.humidity}{" "}
          </p>
          <p>
            <span className=" fw-bold"> Vento:</span> {meteoData.wind.speed} m/s
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MeteoCard
