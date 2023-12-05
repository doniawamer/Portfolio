"use client";
import styled from "styled-components";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "../../scripts/data";

const ContainerWrap = styled(Container)`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  max-width: none;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette["dark"].background};
  color: ${({ theme }) => theme.palette["dark"].text};
`;

export default function Home() {
  // console.log(">data", data);
  return (
    <main>
      <ContainerWrap>
        <Row>
          <Col></Col>
        </Row>
      </ContainerWrap>
    </main>
  );
}
