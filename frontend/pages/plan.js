import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import AppContext from "../context/AppContext";
import Steppper from "../components/Stepper";

import {
    Button,
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    Row,
    Container, InputGroup, Input,
} from "reactstrap";
import {useRouter} from "next/router";
import Link from "next/link";

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


function roleprice(props){
    const appContext = useContext(AppContext);
    const router = useRouter();
    const { loading, error, data } = useQuery(GET_TK, {
        variables: { id: router.query.id },
    });
    if (error) return "Error loading";
    if (loading) return <h1>Fetching</h1>;
    if (data.roleprice) {
        const {roleprice} = data;
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

    }
}

    export default roleprice;