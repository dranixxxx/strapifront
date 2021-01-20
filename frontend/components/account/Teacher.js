import { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import AppContext from "../../context/AppContext";
import Link from "next/link";

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

const GET_TK = gql`
    {
    role (id: 1){
        id
        name
        roleprices{
          id
          name
          description
          price
        }
    }
  }
`;

function Teacher(props){
    const appContext = useContext(AppContext);
    const { loading, error, data } = useQuery(GET_TK);
    if (error) return "Error loading";
    if (loading) return <h1>Fetching</h1>;
    return(
        <>

            <Container>

            <h1>{data.role.name}</h1>
            <Row>
            {data.role.roleprices.map((res) => (
                    <Col xs="6" sm="3" style={{ padding: 0 }} key={res.id}>
            <Card style={{ height: "600px" }}>
        {/*<h1>{res.name}</h1>*/}
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
        </Container>

        </>

    );


}

    export default Teacher;