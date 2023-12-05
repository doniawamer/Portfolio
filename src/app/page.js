"use client";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

const ContainerWrap = styled(Container)`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  max-width: none;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.black};
`;

export default function Home() {
  return (
    <ContainerWrap>
      <Row className="p-4">
        <Col>hello world</Col>
      </Row>
      <Row>
        <Col> </Col>
      </Row>
    </ContainerWrap>
  );
}
