import {useContext} from "react"
import {TrackerContext} from "../context/GeneralContext"
import {Container, Row, Card, CardTitle, Col} from 'reactstrap'


function Budget() {
  const {list} = useContext(TrackerContext)


  function calculateBalanse() {
    let total = 0

    list.map(el => {
      if (el.type === "income") {
        total = total + el.amount
      } else if (el.type === "extense") {
        total = total - el.amount
      }
    })
    return total
  }




  function calculateExtense() {
    let count = 0
    list.map(el => {

      if (el.type === "extense") {
        count = count + el.amount
      }

    })
    return count
  }
  function calculateIncome() {
    let count = 0
    list.map(el => {

      if (el.type === "income") {
        count = count + el.amount
      }

    })
    return count
  }



  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <Card className="py-2">
            <CardTitle tag="h5" className="text-center">
              Balanse is: {calculateBalanse()} RUB
            </CardTitle>
          </Card>
        </Col>
        <Col>
          <Card className="py-2">
            <CardTitle tag="h5" className="text-center">
              Income is: {calculateIncome()} RUB
            </CardTitle>
          </Card>
        </Col>
        <Col>
          <Card className="py-2">
            <CardTitle tag="h5" className="text-center">
              Extense is:{calculateExtense()} RUB
            </CardTitle>
          </Card>
        </Col>
      </Row>
    </Container>

  )
}

export default Budget

