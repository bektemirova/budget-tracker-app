import FormTracker from './components/FormTracker'
import Budget from './components/Budget'
import {FormGroup, Container, Row, Col} from 'reactstrap'

const App = () => {
  return (
    <Container className='my-3'>
      <FormGroup className='py-2' style={{backgroundColor: 'green', color: '#fff'}} >
        <Row  >
          <Col tag="h5" className="text-center">
            BUDGET TRACKER
          </Col>

        </Row>
      </FormGroup>
      <Budget />
      <FormTracker />
    </Container >
  )
}

export default App
