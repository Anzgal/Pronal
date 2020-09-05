import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box, Button } from "../components/Core";

import CaseList from "../sections/case-study/CaseList1";
import CaseDetails from "../sections/case-study/CaseDetails";
import CTA from "../sections/case-study/CTA";
import imgBrand from "../assets/image/jpeg/case-details--details.jpg";
import Link from "next/link";



const ImgContainer = styled(Box)`
  border-radius: 10px;
  overflow: hidden;
`;


const ButtonContainer = styled(Box)`
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const Producto1 = () => {
  return (
    <>
      <PageWrapper footerLight>
        <Section className="pb-0">
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                {/* <Box className="text-center" mb={4}>
                  <img src={imgBrand} alt="" className="img-fluid" />
                </Box> */}
                <Title variant="hero">CUBA DE RETENCIÓN</Title>
                <Text>
                  Modelo: PRO-CR-01{" "}
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        

        <ImgContainer className="text-center" pb={["50px", null, "75px"]}>
          
        
        <Carousel color="black">
          <Carousel.Item>
            <img
              className="img-fluid"
              src={imgBrand}
              alt="First slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src={imgBrand}
              alt="Third slide"
            />

            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src={imgBrand}
              alt="Third slide"
            />

            
          </Carousel.Item>
        </Carousel>
        </ImgContainer>
        
        {/* <CaseDetails /> */}

        <Section className="position-relative" borderBottom="1px solid #eae9f2;">
        <Container>
          
          <Row>
            <Col lg="12" xl="10" className="offset-xl-1">
              <Box pb={["40px", null, "65px"]}>
                <Title variant="card" mb="18px">
                  DESCRIPCIÓN
                </Title>
                <Text variant="small">
                  Sensible al respeto del medioambiente, Pronal ha desarrollado una 
                  gama de cubas de retención flexibles para prevenir los riesgos de 
                  contaminación. Las cubas, también llamadas líner, permiten crear 
                  una retención de seguridad fácil y de implemento rápido, a la vez 
                  que se adapta a los contaminantes. Las cubas de retención están fabricadas 
                  a medida para responder a las necesidades de cada situación. Se eligen 
                  los materiales en función de los contaminantes que han de contener. La 
                  altura de retención de la cuba está asegurada por un elemento hinchable 
                  o pilares metálicos. La cuba de retención PRONAL presenta numerosas ventajas, 
                  impermeabilidad, mucha flexibilidad, duplicada por una alta resistencia, fabricación a medida.
                </Text>
              </Box>
              <Box pb={["40px", null, "65px"]}>
                <Title variant="card" mb="18px">
                  TIEMPO DE ENTREGA
                </Title>
                <Text variant="small">
                  Inmediato
                </Text>
              </Box>
              <Box pb={["40px", null, "65px"]}>
                <Title variant="card" mb="18px">
                  GARANTÍA
                </Title>
                <Text variant="small">
                  1 año con fabricante
                </Text>
              </Box>
            </Col>
            
          </Row>
          
        </Container>

        <Container>
          
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <Link href="/contact-2">
                <Button>Contáctanos</Button>
              </Link>
              
            </Col>
          </Row>
          
        </Container> 

        
      
        
      </Section>








        
        
      </PageWrapper>
    </>
  );
};
export default Producto1;
