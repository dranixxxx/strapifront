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


function plan(){
    return (
    <>
        <Steppper/>
        </>
    );
}

    export default plan;