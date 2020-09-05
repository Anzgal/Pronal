import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Input } from "../components/Core";

import PageWrapper from "../components/PageWrapper";
import { device } from "../utils";

const FormStyled = styled.form``;

const WidgetWrapper = styled(Box)`
  border-radius: 10px;
  background-color: #f7f7fb;
  padding-top: 80px;
  padding-bottom: 30px;
  padding-left: 50px;
  padding-right: 50px;
  @media ${device.lg} {
    padding-left: 140px;
    padding-right: 150px;
  }
  @media ${device.xl} {
    padding-left: 150px;
    padding-right: 150px;
  }
`;

const Contacto = () => {
  return (
    <>
      <PageWrapper footerLight>
        <Section>
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <div className="banner-content">
                  <Title variant="hero">Contáctanos</Title>
                  <Text>
                    Estamos para ayudarte
                  </Text>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center mt-5 pt-lg-5">
              <Col xl="10">
                <WidgetWrapper>
                  <Row>
                    <Col md="4" sm="6">
                      <Box className="mb-5">
                        <Title variant="card" fontSize="24px">
                          Llámanos
                        </Title>
                        <Text>Tel +52 (55) 5397 4949</Text>
                        
                      </Box>
                    </Col>
                    <Col md="4" sm="6">
                      <Box className="mb-5">
                        <Title variant="card" fontSize="24px">
                          Mándanos correo
                        </Title>
                        <Text>support@mail.com</Text>
                      </Box>
                    </Col>
                    <Col md="4" sm="6">
                      <Box className="mb-5">
                        <Title variant="card" fontSize="24px">
                          Encuéntranos
                        </Title>
                        <Text>Av. Gustavo Baz No. 301, Colonia Viveros de la Loma,</Text>
                        <Text>Tlalnepantla. Estado de México. CP 54080</Text>
                      </Box>
                    </Col>
                  </Row>
                </WidgetWrapper>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={6} className="order-lg-1 pt-5 mt-4">
                <div>
                  <Title
                    variant="card"
                    fontSize="24px"
                    className="mb-5 text-center"
                  >
                    O, mándanos un mensaje
                  </Title>
                  <FormStyled>
                    <Box mb={4}>
                      <Title
                        variant="card"
                        fontSize="18px"
                        as="label"
                        htmlFor="nameput"
                      >
                        Nombre
                      </Title>
                      <Input
                        type="text"
                        placeholder="Escribe tu nombre"
                        id="nameput"
                      />
                    </Box>
                    <Box mb={4}>
                      <Title
                        variant="card"
                        fontSize="18px"
                        as="label"
                        htmlFor="emailput"
                      >
                        Correo electrónico
                      </Title>
                      <Input
                        type="email"
                        placeholder="Escribe tu correo electrónico"
                        id="emailput"
                      />
                    </Box>

                    <Box mb={4}>
                      <Title
                        variant="card"
                        fontSize="18px"
                        as="label"
                        htmlFor="serviceput"
                      >
                        Producto
                      </Title>
                      <Input
                        type="text"
                        placeholder="Escribe el producto de tu interés"
                        id="serviceput"
                      />
                    </Box>

                    <Box mb={4}>
                      <Title
                        variant="card"
                        fontSize="18px"
                        as="label"
                        htmlFor="messageput"
                      >
                        Mensaje
                      </Title>
                      <Input
                        type="text"
                        as="textarea"
                        placeholder="Escribe tu mensaje aquí"
                        rows={4}
                        id="messageput"
                      />
                    </Box>

                    <Button width="100%" type="submit" borderRadius={10}>
                      Enviar mensaje
                    </Button>
                  </FormStyled>
                </div>
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Contacto;
