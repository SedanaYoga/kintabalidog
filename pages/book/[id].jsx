import Head from 'next/head'
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap'
import UserLayout from '../../components/Layouts/UserLayout'
import { useState } from 'react'

export default function Book() {
  const [input, setInput] = useState({
    appt_date: '',
    appt_time: '',
  })
  const inputChangeHandler = (e) => {
    const value = e.target.value
    const name = e.target.name
    setInput({ ...input, [name]: value })
  }

  const bookingSubmitHandler = async (e) => {
    e.preventDefault()
    console.log('Hello now submitting something')
  }

  return (
    <div>
      <Head>
        <title>Book Puppy - Kinta-Bali Dog</title>
        <meta
          name='description'
          content='Book Puppy - pricing summary and decide the date of appointment Kinta-Bali Dog Site'
        />
        <link rel='icon' href='/images/logo.png' />
      </Head>
      <Container className='d-lg-flex justify-content-center align-items-center w-100 full-with-footer'>
        <Row className='w-100 d-lg-flex flex-row justify-content-center align-items-center'>
          <Col>
            <h2>Booking Confirmation</h2>
            <div>
              <p
                style={{
                  margin: '1.5rem 0px 0.5rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid gray',
                }}
              >
                Estimated Adoption Price Tag:{' '}
                <span className='fw-semibold'>PW06052022M</span>
              </p>
              <Table style={{ marginTop: '0px' }}>
                <tbody>
                  {/* {puppy?.priceTag && */}
                  {/*   Object.entries(puppy?.priceTag).map((tag, index) => ( */}
                  {/*     <tr key={index}> */}
                  {/*       <td */}
                  {/*         style={{ paddingLeft: '0px' }} */}
                  {/*       >{`${tag[0]}: ${tag[1]}`}</td> */}
                  {/*       <td className='text-end pe-0'> */}
                  {/*         {puppy?.priceTag && price[tag[0]]} */}
                  {/*       </td> */}
                  {/*     </tr> */}
                  {/*   ))} */}
                </tbody>
              </Table>
              <Table
                style={{
                  margin: '1rem 0px 0.5rem',
                }}
              >
                <tbody>
                  <tr>
                    <td style={{ paddingLeft: '0px' }}>Total price</td>
                    <td className='text-end' style={{ paddingRight: '0px' }}>
                      {/* {puppy?.priceTag && price.totalValue} */}
                      5000000
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          <Col className='h-100 m-4 d-flex justify-content-center'>
            <div className='w-75 bg-light shadow-sm p-5 py-5 d-flex flex-column justify-content-center align-items-center'>
              <Form onSubmit={bookingSubmitHandler} className='w-100'>
                <Form.Group className='w-100 d-flex justify-content-between mb-4'>
                  <label>
                    Date{' '}
                    <input
                      className='form-control '
                      type='date'
                      name='appt_date'
                      onChange={inputChangeHandler}
                    />
                  </label>
                  <label>
                    Time{' '}
                    <input
                      className='form-control'
                      type='time'
                      name='appt_time'
                      onChange={inputChangeHandler}
                    />
                  </label>
                </Form.Group>
                <Button
                  type='submit'
                  variant='dark'
                  size='lg'
                  className='w-100'
                >
                  Book for Appointment
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

Book.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>
}
