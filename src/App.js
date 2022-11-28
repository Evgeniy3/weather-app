import { React, useState, useEffect } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import axios from 'axios'

function App() {
  const [weather, setWeather] = useState({});
  const [wind, setWind] = useState({});
  const [temp, setTemp] = useState({});
  const [show, setShow] = useState(false);
  const [city, setCity] = useState('Москва');

  const tem = Math.floor(temp.temp);
  const feelTem = Math.floor(temp.feels_like);

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5c009660099d84e3c1c78bc39efd4e6b&lang=ru&units=metric`)
      .then(res => {
        setWeather(res.data.weather[0])
        setTemp(res.data.main)
        setWind(res.data.wind)
      }
      )
  }, [city]);

  return (
    <div className='position-absolute top-50 start-50 translate-middle w-50 h-75'>
      <Card className='w-100 h-75 bg-primary text-white'>
          <Card.Body className='position-relative row align-items-center'>
            <div className='d-flex justify-content-between align-items-start'>
              <Card.Title className='ms-5 mt-2'>{city}</Card.Title>
              <Button onClick={() => setShow(true)} className='.text-white me-5'>Город</Button>
            </div>
            <div className='position-relative mb-5'>
              <div className='position-absolute top-50 start-50 translate-middle d-flex justify-content-center'>
                <div className=''>
                  <Card.Img variant="top" className='' src={`https://openweathermap.org/img/w/${weather.icon}.png`} />
                  <Card.Text className='fs-1 fw-weight-bold ms-2' >{tem}°</Card.Text>
                  <Card.Text className='fs-6 ms-3' >{weather.description}</Card.Text>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between flex-wrap'>
              <Card.Text className='me-3 ms-3' >Ощущается как: {feelTem}°</Card.Text>
              <Card.Text className='me-3 ms-3'>Влажность: {temp.humidity}%</Card.Text>
              <Card.Text className='me-3 ms-3'>Давление: {temp.pressure} мм рт. ст.</Card.Text>
              <Card.Text className='me-3 ms-3'>Скорость ветра: {wind.speed}м/с</Card.Text>
            </div>
          </Card.Body>
      </Card>
      <Modal show={show} onHide={() => setShow(false)} animation={true} centered>
        <Modal.Header closeButton>
          <Modal.Title>Сменить город</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ text: '' }}
            onSubmit={(values) => {
              setCity(values.text)
              setShow(false)
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    name="text"
                    type="text"
                    placeholder="Город"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.text}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" >
                  Принять
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
