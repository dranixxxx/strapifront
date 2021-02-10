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
import axios from 'axios';

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
  return ['Configure products', 'Create account', 'Payment'];
}


function roleprice(){
    const appContext = useContext(AppContext);
    const router = useRouter();
    const { loading, error, data } = useQuery(GET_TK, {
        variables: { id: router.query.id },
    });
    const [cartdata, setcart] = React.useState({ firstname: "", lastname: "", email: "", city: "", state: "", price: "", name: "",bank:"VCB" });
    const [activeStep, setActiveStep] = React.useState(0);
    const [cSelected, setcSelected] = React.useState(null);
    const classes = useStyles();
    const [pSelected, setPSelected] = React.useState(null);
    var monthly = pSelected*1;
    var annual = parseFloat(pSelected*10 / 12).toFixed( 2 );
    const steps = getSteps();
    var check1=0;
    //user để skip register
    const { user, setUser } = useContext(AppContext);

    let urll;
    axios.get('/api/createpaymenturl', { params: cartdata })
        .then(function (result) {
            urll = result.data.data;
        });

    const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(cartdata);
    //getPaymentUrl();
    router.push(urll);
  };
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
                                {roleprice.discounts.map((res) => {
                                    return(
                                        <Col sm="3" key={res.id}>
                                            <div className="card1">
                                                <Button className="btn btn-outline-primary btn-roleprice"
                                                        onClick={() => setPSelected(roleprice.price * res.discount)
                                                        }
                                                        active={pSelected === roleprice.price * res.discount
                                                        }>
                                                    <CardBody>
                                                        <CardTitle><h3>{res.name}</h3></CardTitle>
                                                        <CardText>{roleprice.price * res.discount}</CardText>
                                                    </CardBody>
                                                </Button>
                                            </div>
                                        </Col>
                                    )
                                })}

                            </Row>

                            <h3>3. Choose cycle</h3>
                            <Row>
                                <Col sm="3">
                                    <div className="card1">

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
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div className="card1">
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
                                    </div>
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
                        <Form >
                            <div><h3>1. Billing contact</h3></div>
                          <FormGroup>
                            <Label for="firstname">First Name</Label>
                            <Input
                                type="text"
                                id="firstname"
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
                                id="lastname"
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
                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
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
                            <Label for="company">Company/Organization Name</Label>
                            <Input type="text"  id="company" />
                          </FormGroup>
                            <FormGroup>
                            <Label for="address">Address</Label>
                            <Input type="text" id="address" />
                          </FormGroup>
                            <FormGroup>
                            <Label for="city">City</Label>
                            <Input
                                type="text"
                                id="city"
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
                            <Label for="state">State</Label>
                            <Input
                                type="text"
                                id="state"
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
                            <Label for="bank">Select Bank</Label>
                            <Input type="select" name="select" id="bank"
                            value={cartdata.bank}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setcart((prevState) => {
                                    return { ...prevState, bank: val };
                                    // return Object.assign({}, prevState, { message: val }); // Also works
                                  });
                                }}>
                              <option>VCB</option>
                              <option>VNPAYQR</option>
                              <option>VISA</option>
                              <option>SACOMBANK</option>
                              <option>SCB</option>
                            </Input>

                          </FormGroup>
                        </Form>
                    </Col>);
            default:
                return history.back();
        }
}

  const handleNext = () => {
    if (activeStep===2) {
       validateForm();
        if (check1==12) {
setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    //cần làm sạch code
    }else {
        if (user && activeStep === 0) {
            if (cartdata.price==0){
            alert('Bạn chưa nhập mặt hàng');
            }
            else {
                setActiveStep((prevActiveStep) => prevActiveStep + 2);
            }
        } else {
            if (cartdata.price==0){
            alert('Bạn chưa nhập mặt hàng');
            }
            else {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            }
        }
    }
};

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

function validateForm(){
      var firstname = document.getElementById('firstname').value;
      var lastname = document.getElementById('lastname').value;
      var email = document.getElementById('email').value;
      var company = document.getElementById('company').value;
        var address = document.getElementById('address').value;
          var city = document.getElementById('city').value;
      var state = document.getElementById('state').value;
    if (firstname == ''){
        alert('Bạn chưa nhập tên tên');
    }else if(lastname == ''){
      alert('Bạn chưa nhập họ');
  }else if(email == ''){
      alert('Bạn chưa nhập email');
  }else if(company == ''){
      alert('Bạn chưa nhập công ty');
  } else if(address == ''){
      alert('Bạn chưa nhập Address');
  } else if(city == ''){
      alert('Bạn chưa nhập city');
  } else if(state == ''){
      alert('Bạn chưa nhập state');
  } else{
        check1=12;
        return true;

    }

    return false;
}

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
          <Container>
              <Card style={{width:"600px"}}>
                  <div style={{padding: "5%"}}>
                      <CardTitle><h1>Thanh toán đơn hàng</h1></CardTitle>
                      <CardText>loại tài khoản: {cartdata.name}</CardText>
                      <CardText>Thành tiền: <h1>{cartdata.price}</h1></CardText>
                      <br/>
                      <CardTitle><h1>Thông tin khách hàng</h1></CardTitle>
                      <CardText>tên: {cartdata.firstname}</CardText>
                      <CardText>họ: {cartdata.lastname}</CardText>
                      <CardText>email: {cartdata.email}</CardText>
                      <CardText>công ty: {cartdata.company}</CardText>
                      <CardText>thành phố: {cartdata.city}</CardText>
                      <CardText>bang: {cartdata.state}</CardText>
                  </div>
              </Card>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Form
            onSubmit={onHandleSubmit}
            >
            <button type="submit" className="btn btn-primary">
            Checkout
            </button>
            </Form>
            <Button
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
            </Button>
          </Container>
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