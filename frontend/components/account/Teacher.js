import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import AppContext from "../../context/AppContext";
import Link from "next/link";
import Switchh from "../Switchh";
import { useBetween } from "use-between";

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
          name_des
          description
          price
        }
    }
  }
`;

function Teacher(props){
        //check
    let price;
    let saving;
    const {check} = useBetween(Switchh);

    //else
    const { loading, error, data } = useQuery(GET_TK);
    if (error) return "Error loading";
    if (loading) return <h1>Fetching</h1>;
    return(
        <>
            <Row className="tabpaner">
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
            .hoa4{
            background:rgba(246,247,249,0.6);
            border-radius: 1.25rem 0 0 1.25rem;
            }
            .hoa6{
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
    export default Teacher;