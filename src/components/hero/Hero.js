import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Hero.scss";
import HeroCarousel from "./HeroCarousel";
import HeroHeader from "./HeroHeader";
const Hero = () => {
	return (
		<Container fluid>
			<Row className='hero'>
				<Col xs={12} sm={6}>
					<HeroHeader />
				</Col>
				<Col xs={12} sm={6}>
					<HeroCarousel />
				</Col>
			</Row>
		</Container>
	);
};

export default Hero;
