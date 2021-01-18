import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import AppContext from "../../context/AppContext";

import {
    Container,
    Button,
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    Row,
} from "reactstrap";
import Link from "next/link";
import Switch from "@material-ui/core/Switch";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
const GET_TK = gql`
    {
    role (id: 2){
        id
        name
        roleprices{
          id
          name
          name_des
          description
          price
        }
    }
  }
`;

function Student(props){
    //check
    const [check, setCheck] = React.useState({
    checked: false,

  });

  const handleChange = (event) => {
    setCheck({ ...check, [event.target.name]: event.target.checked });
  };

    //else
    const appContext = useContext(AppContext);
    const { loading, error, data } = useQuery(GET_TK);
    if (error) return "Error loading";
    if (loading) return <h1>Fetching</h1>;
    return(
        <>

            <Container>
            <Switch
                checked={check.checked}
                onChange={handleChange}
                name="checked"
            />
            <p>asd <b>{check.checked ? "on" : "off"}</b></p>
            <h1>{data.role.name}</h1>
            <Row>
                <Col xs="6" sm="3" style={{ padding: 0 }} >
            <Card style={{ height: "350px" }}>
        <CardBody>
            <CardTitle><h6>BASIC</h6></CardTitle>
            <CardText><h6>Personal Meeting</h6></CardText>
            <CardText><h3>Free</h3></CardText>
            <div>
            <a href="/register">
            <Button
            outline
            color="primary"

            >
        Sign up now!
        </Button>
        </a>

        </div>
            <CardText>
                <li>Host up to 100 participants</li>
                <li>Group meetings for up to 40 minutes</li>
                <li>Unlimited one-on-one Meetings</li>
                <style jsx>
                    {`
                    li{
                        font-size: 12.5px;
                    `}
                </style>
            </CardText>

        </CardBody>


        </Card>
        </Col>

            {data.role.roleprices.map((res) => (
                    <Col xs="6" sm="3" style={{ padding: 0 }} key={res.id}>
            <Card style={{ height: "350px" }}>

        <CardBody>
            <CardTitle><h6>{res.name}</h6></CardTitle>
            <CardText><h6>{res.name_des}</h6></CardText>
            <CardText><h3>{res.price}</h3></CardText>
            <div>
            <Link
                as={`/roleprice/${res.id}`}
                href={`/roleprice?id=${res.id}`}
            >
                <a className="btn btn-primary">View</a>
            </Link>

        </div>
            <CardText><li>{res.description}</li></CardText>

        </CardBody>
        </Card>
        </Col>
    ))}

        </Row>
        <br/>
        </Container>

        </>

    );


}

    export default Student;