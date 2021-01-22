import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import AppContext from "../context/AppContext";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from "next/link";
import Register from "../pages/register";
import Cart from "../components/cart";

import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    Row,
    Container, InputGroup, Input,
    Button,
    Form, FormGroup, Label,
} from "reactstrap";
import {useRouter} from "next/router";

  const GET_TK = gql`
    
    query($id: ID!) {
        roleprice(id: $id) {
          id
          name
          description
          price
          discounts{
             id
             name
             discount
          }
        }
    }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));




function getSteps() {
  return ['Configure products', 'Create account', 'Payment', 'Review'];
}


function roleprice(){
    const appContext = useContext(AppContext);
    const [cartdata, setcart] = React.useState({ firstname: "", lastname: "", email: "", city: "", state: "", price: "", name: "" });
    const [activeStep, setActiveStep] = React.useState(0);
    const [pSelected, setPSelected] = React.useState(null);
    const [cSelected, setcSelected] = React.useState(null);
    const classes = useStyles();
    var monthly = pSelected;
    var annual = pSelected*10 / 12;

    const steps = getSteps();
        const router = useRouter();
    const { loading, error, data } = useQuery(GET_TK, {
        variables: { id: router.query.id },
    });
    const { user, setUser } = useContext(AppContext);
function getStepContent(stepIndex) {

        switch (stepIndex) {
            case 0:

                if (error) return "Error loading";
                if (loading) return <h1>Fetching</h1>;
                if (data.roleprice) {
                    const {roleprice} = data;
                return (

                    <>
                        <Container>
                            <h1>{roleprice.name}</h1>
                            {/*<Steppper/>*/}
                            <h3>1. How many meeting licenses do you want to purchase?</h3>
                            <InputGroup style={{width: "300px"}}>
                                <Input placeholder="1" min={1} max={100} type="number" step="1"/>
                            </InputGroup>
                            <h3>2. Choose plan</h3>
                            <Row>
                                {roleprice.discounts.map((res) => (
                                    <Col sm="3" key={res.id}>
                                        <Card>
                                            <Button className="btn btn-outline-primary btn-roleprice" onClick={() => setPSelected(roleprice.price * res.discount)} active={pSelected === roleprice.price * res.discount}>
                                            <CardBody>
                                                <CardTitle><h3>{res.name}</h3></CardTitle>
                                                <CardText>{roleprice.price * res.discount}</CardText>
                                            </CardBody>
                                            </Button>
                                        </Card>
                                    </Col>
                                ))}

                            </Row>

                            <h3>3. Choose cycle</h3>
                            <Row>
                                <Col sm="3">
                                    <Card>

                                        <Button className="btn btn-outline-primary btn-roleprice" value={cartdata.price}
                                            onClick={() => {
                                              setcSelected(1)
                                              const val = monthly;
                                              setcart((prevState) => {
                                                return { ...prevState, price: val, name: "monthly" };
                                              });
                                            }}
                                            active={cSelected === 1}
                                            >
                                            <CardBody>
                                            <CardTitle><h3>monthly</h3></CardTitle>
                                            <CardText>${monthly}/month/license</CardText>
                                            </CardBody>
                                        </Button>
                                    </Card>
                                </Col>
                                <Col sm="3">
                                    <Card>
                                        <Button className="btn btn-outline-primary btn-roleprice" value={cartdata.price}
                                            onClick={() => {
                                              setcSelected(2)
                                              const val = annual;
                                              setcart((prevState) => {
                                                return { ...prevState, price: val, name: "annual" };
                                              });
                                            }}
                                            active={cSelected === 2}
                                        >
                                        <CardBody>
                                            <CardTitle><h3>annual</h3></CardTitle>
                                            <CardText>${annual}/month/license</CardText>
                                        </CardBody>
                                        </Button>
                                    </Card>
                                </Col>
                            </Row>
                            <p>Selected: {pSelected}</p>
                            <p>Selected: {cartdata.price}</p>

                            <br/>
                        </Container>
                    </>
                )};
            case 1:
                if (user) {
                    return null;
                }else{
                return (<Register/>);}
            case 2:
                return (
                    <Col sm="12" md={{ size: 5, offset: 3 }}>
                        <Form>
                            <div><h3>1. Billing contact</h3></div>
                          <FormGroup>
                            <Label for="firstname">First Name</Label>
                            <Input
                                type="text"
                                value={cartdata.firstname}
                                placeholder="Enter a message"
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setcart((prevState) => {
                                    return { ...prevState, firstname: val };
                                    // return Object.assign({}, prevState, { message: val }); // Also works
                                  });
                                }}
                              />
                          </FormGroup>
                          <FormGroup>
                            <Label for="lastname">Last Name</Label>
                            <Input
                                type="text"
                                value={cartdata.lastname}
                                placeholder="Enter a message"
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setcart((prevState) => {
                                    return { ...prevState, lastname: val };
                                    // return Object.assign({}, prevState, { message: val }); // Also works
                                  });
                                }}
                              />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input
                                type="email"
                                value={cartdata.email}
                                placeholder="Enter a message"
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setcart((prevState) => {
                                    return { ...prevState, email: val };
                                    // return Object.assign({}, prevState, { message: val }); // Also works
                                  });
                                }}
                              />
                          </FormGroup>
                            <FormGroup>
                            <Label for="examplePassword">Company/Organization Name</Label>
                            <Input type="email" name="password" id="examplePassword" />
                          </FormGroup>
                            <FormGroup>
                            <Label for="examplePassword">Address</Label>
                            <Input type="email" name="password" id="examplePassword" />
                          </FormGroup>
                            <FormGroup>
                            <Label for="examplePassword">City</Label>
                            <Input
                                type="text"
                                value={cartdata.city}
                                placeholder="Enter a message"
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setcart((prevState) => {
                                    return { ...prevState, city: val };
                                    // return Object.assign({}, prevState, { message: val }); // Also works
                                  });
                                }}
                              />
                          </FormGroup>
                            <FormGroup>
                            <Label for="examplePassword">State</Label>
                            <Input
                                type="text"
                                value={cartdata.state}
                                placeholder="Enter a message"
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setcart((prevState) => {
                                    return { ...prevState, state: val };
                                    // return Object.assign({}, prevState, { message: val }); // Also works
                                  });
                                }}
                              />
                          </FormGroup>
                            <div><h3>2. Payment Method</h3></div>
                          <FormGroup>
                            <Label for="exampleSelect">Select Bank</Label>
                            <Input type="select" name="select" id="exampleSelect">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Input>
                          </FormGroup>
                        </Form>
                    </Col>);
            case 3:
                return(
                    <div>
                    <h1>{data.roleprice.price}</h1>
                    <h1>{cartdata.firstname}</h1>
                    <h1>{cartdata.lastname}</h1>
                    <h1>{cartdata.email}</h1>
                    <h1>{cartdata.city}</h1>
                    <h1>{cartdata.state}</h1>
                        <br/>
                    <h1>{cartdata.price}</h1>
                    <h1>{cartdata.name}</h1>
                    </div>
                ) ;
            default:
                return history.back();
        }
}

  const handleNext = () => {
    if (user){
    setActiveStep((prevActiveStep) => prevActiveStep + 2);
    }else{
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }
};

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Link href="/checkout"><Button
                outline
                color="primary"
                onClick={() => appContext.addItem(cartdata)}>
                Checkout</Button></Link>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div style={{float: "right", marginRight: "10%", marginBottom: "30px"}}>

              <Button
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>

            </div>
               <div style={{clear:"both"}}></div>
          </div>
        )}
      </div>
    </div>
  );
}

    export default roleprice;