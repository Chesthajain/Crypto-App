import React, {useEffect, useState} from 'react';
import axios from "axios";
import { server } from "../index";
import {
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";
import Loader from "./Loader";


const Exchnages = () => {
  
  conts [loading,setLoading] = useState(true);



  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ):(
        <>

        </>
      )}
    </Container>
  )
}

export default Exchnages