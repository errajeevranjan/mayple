import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./UserCard.scss";
const UserCard = ({ peopleObj }) => {
	const { name, location, experience, expertise, sales } = peopleObj;
	console.log(sales);
	return (
		<Row className='user-card'>
			<Col xs={4} className='col-one'>
				<div className='name'>{name}</div>
				<div className='location'>{location}</div>
				<div className='stars'>5.0</div>
			</Col>

			<Col xs={4} className='col-two'>
				<Row className='row-one'>
					<Col xs={12} class='heading'>
						NICHE EXPERTISE
					</Col>
					<Col xs={12} class='expertise'>
						{expertise}
					</Col>
				</Row>

				<Row className='row-two'>
					{" "}
					<Col xs={12} class='heading'>
						ADVERTISING PLATFORM
					</Col>
					<Col xs={12} class='expertise'>
						icons here
					</Col>
				</Row>
			</Col>

			<Col xs={4} className='col-three'>
				<Row className='row-one'>
					<Col xs={12} class='heading'>
						EXPERIENCE
					</Col>
					<Col xs={12} class='experience'>
						{experience}
					</Col>
				</Row>
				<Row className='row-two'>
					<Col xs={12} class='heading'>
						AVG. INCREASE IN SALES
					</Col>
					<Col xs={12} class='experience'>
						{sales}
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default UserCard;
