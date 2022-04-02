import {Formik} from 'formik';
import {Form, FormGroup, Input, Button, Container, FormFeedback, Label, Col, Row} from 'reactstrap';
import {useContext} from 'react'
import {TrackerContext} from '../context/GeneralContext';
import TableList from './TableList';




const FormTracker = () => {
  const {list, setList, onSubmit, options, SignupSchema} = useContext(TrackerContext)


  return (

    <Container className='mt-5' >
      <Row>
        <Col
          xs="6">
          <Formik
            initialValues={{title: '', amount: '', type: "income"}}
            onSubmit={onSubmit}
            validationSchema={SignupSchema}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="title">
                    Title
                  </Label>

                  <Input

                    name="title"
                    placeholder="title"
                    type="text"
                    onChange={handleChange}
                    value={values.title}
                    invalid={errors.title && touched.title}
                  />
                  {errors.title && touched.title && (
                    <FormFeedback tooltip>
                      {errors?.title}
                    </FormFeedback>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for="amount" >
                    Amount
                  </Label>
                  <Input

                    name="amount"
                    placeholder="amount"
                    type="number"
                    onChange={handleChange}
                    value={values.amount}
                    invalid={errors.amount && touched.amount}
                  />
                  {errors.amount && touched.amount && (
                    <FormFeedback tooltip>
                      {errors?.amount}
                    </FormFeedback>
                  )}

                </FormGroup>
                <FormGroup>
                  <Label for="select" >
                    Select
                  </Label>
                  <Input

                    name="type"
                    type="select"
                    onChange={handleChange}
                    value={values.type}
                    invalid={errors.type && touched.type}
                  >
                    {options.map(option => {
                      return <option value={option.value}>{option.label}</option>
                    })}

                  </Input>
                  {errors.type && touched.type && (
                    <FormFeedback tooltip>
                      {errors?.type}
                    </FormFeedback>
                  )}
                </FormGroup>
                <div className="d-grid gap-2" >
                  <Button type="submit" color="success"
                    outline>
                    Submit
                  </Button>
                </div>
              </Form>
            )}
          </Formik>

        </Col>
        <Col xs="6">
          <TableList list={list} setList={setList} />
        </Col>
      </Row>
    </Container>

  )

}

export default FormTracker;