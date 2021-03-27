import React, { useEffect,useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import AppContext from "../context/AppContext";
import Steppper from "../components/Stepper";
import axios from "axios";
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


function plan() {
    const [data, setData] = useState({data: []});

    useEffect(async () => {
    const result = await axios(
      'http://edunet.tranonline.ml/api/subscription?role=STUDENT',
    );
    setData(result.data);
  }, []);

    return (
        <>
            {data.data.map(a =>{
                        return (
                <li>
                    <div>{a.name}</div>
                    <div>{a.code}</div>
                    <div>{a.price}</div>
                    <div>{a.duration}</div>

                </li>
                        )})}
        </>
    );
}
    export default plan;