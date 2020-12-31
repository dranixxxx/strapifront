import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import AppContext from "../context/AppContext";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
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
} from "reactstrap";
import {useRouter} from "next/router";


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

    // const appContext = useContext(AppContext);


function getSteps() {
  return ['Configure products', 'Create account', 'Payment', 'Review'];
}

function getStepContent(stepIndex) {
  const GET_TK = gql`
    
    query($id: ID!) {
        roleprice(id: $id) {
          id
          name
          description
          price
          discounts{
             name
             discount
          }
        }
    }
`;

    const router = useRouter();
    const { loading, error, data } = useQuery(GET_TK, {
        variables: { id: router.query.id },
    });
    if (error) return "Error loading";
    if (loading) return <h1>Fetching</h1>;
    if (data.roleprice) {
        const {roleprice} = data;

        switch (stepIndex) {
            case 0:
                return (

                    <>
                        <Container>
                            <h1>{roleprice.name}</h1>
                            {/*<Steppper/>*/}
                            <h3>How many meeting licenses do you want to purchase?</h3>
                            <InputGroup style={{width: "300px"}}>
                                <Input placeholder="1" min={1} max={100} type="number" step="1"/>
                            </InputGroup>
                            <h3>Choose plan</h3>
                            <Row>
                                {roleprice.discounts.map((res) => (
                                    <Col sm="3" key={res.id}>
                                        <Card>
                                            <CardBody>
                                                <CardTitle><h3>{res.name}</h3></CardTitle>
                                                <CardText>{roleprice.price * res.discount}</CardText>
                                            </CardBody>

                                        </Card>
                                    </Col>
                                ))}

                            </Row>

                            <h3>Choose cycle</h3>
                            <Row>
                                <Col sm="3">
                                    <Card>
                                        <CardBody>
                                            <CardTitle><h3>monthly</h3></CardTitle>
                                            <CardText>${roleprice.price / 10}/month/license</CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm="3">
                                    <Card>
                                        <CardBody>
                                            <CardTitle><h3>annual</h3></CardTitle>
                                            <CardText>${roleprice.price / 10 * 0.8}/month/license</CardText>
                                        </CardBody>

                                    </Card>
                                </Col>
                            </Row>


                            <br/>
                        </Container>
                    </>

                );
            case 1:
                return (<Register/>);
            case 2:
                return (<Cart/>);
            case 3:
                return 'Review';
            default:
                return history.back();
        }
    }
}

function roleprice(props){
    const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
            <Link href="/checkout"><Button> Checkout</Button></Link>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

    export default roleprice;