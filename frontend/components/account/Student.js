import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import AppContext from "../../context/AppContext";

import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    Row,
} from "reactstrap";
import Link from "next/link";
import Switchh from "../Switchh";
import { useBetween } from "use-between";

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
    let price;
    let saving;
    const {check} = useBetween(Switchh);

    //else
    const appContext = useContext(AppContext);
    const { loading, error, data } = useQuery(GET_TK);
    if (error) return "Error loading";
    if (loading) return <h1>Fetching</h1>;
    return(
        <>
            <Row className="tabpaner">
                <Col md="6" lg="3" style={{ padding: 0 }} >
            <div style={{ height: "600px", backgroundColor:"rgba(246,247,249,0.6)", borderRadius: "1.25rem 0 0 1.25rem"  }}>
        <CardBody>
            <CardTitle><h7>BASIC</h7></CardTitle>
            <CardText><h6>Personal Meeting</h6></CardText>
            <CardText><h3>Free</h3></CardText>
            <div>
            <a href="/register">
            <button
            className="btn btnn btn-outline-primary"

            >
                <b>Sign up now!</b>
        </button>
        </a>

        </div>
            <ul style={{marginTop:"20px"}}>
                <li className="des">Host up to 100 participants</li>
                <li className="des">Group meetings for up to 40 minutes</li>
                <li className="des">Unlimited one-on-one Meetings</li>
            </ul>

        </CardBody>


        </div>
        </Col>

            {data.role.roleprices.map((res) =>{
    if (check.checked){
        price = <h3>{(res.price)*10}$<span style={{fontWeight:"normal", fontSize: "16px"}}> /year/license</span></h3>;
        saving =<h7>{(res.price)*2}$ SAVING</h7>
    } else {
        price = <h3>{(res.price)}$<span style={{fontWeight:"normal", fontSize: "16px"}}> /month/license</span></h3>;
    }
    return(
                    <Col md="6" lg="3" style={{ padding: 0 }} key={res.id}>
            <div style={{ height: "600px"}} className={"hoa"+res.id}>

        <CardBody>
            <div style={{float: "right", color: "white", backgroundColor: "green", textAlign:"center", width: "150px"}}>{saving}</div>
            <CardTitle style={{textTransform: "uppercase"}}><h7>{res.name}</h7></CardTitle>
            <CardText><h6>{res.name_des}</h6></CardText>
            <CardText>{price}</CardText>
            <div>
            <Link
                as={`/roleprice/${res.id}`}
                href={`/roleprice?id=${res.id}`}
            >
                <a className="btn btnn btn-outline-primary"><b>Buy now</b></a>
            </Link>

        </div>
            <CardText style={{marginTop:"20px"}}>
            {
              res.description.split('\n').map(function( item, idx) {
                return (
                    <span key={idx}>
                        <li className="des">{item}</li>
                    </span>
                )
              })
            }
            </CardText>

        </CardBody>
        </div>
        <style>
            {`    
            .hoa2{
            background:rgba(246,247,249,0.6);
            }
            `}
        </style>
        </Col>
    )})}

        </Row>
        </>

    );


}
    export default Student;