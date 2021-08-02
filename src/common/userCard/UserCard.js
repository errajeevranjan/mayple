import React from "react";
import { Col, Row } from "react-bootstrap";
import "./UserCard.scss";
const UserCard = ({ peopleObj }) => {
	const { name, location, experience, expertise, sales, ratings } = peopleObj;
	console.log(sales);
	return (
		<Row className='user-card add-shadow'>
			<Col xs={3} className='col-one border-right'>
				<div className='name'>{name}</div>
				<div className='location'>{location}</div>
				<div className='stars'>
					<img src={ratings} alt='ratings' className='ratings' />
				</div>
			</Col>

			<Col xs={5} className='col-two border-right'>
				<Row className='expertise-row'>
					<Col xs={12} className='card-heading'>
						NICHE EXPERTISE
					</Col>
					<Col xs={12} className='card-values'>
						{expertise}
					</Col>
				</Row>
				<Row className='advertising-row'>
					<Col xs={12} className='card-heading'>
						ADVERTISING PLATFORM
					</Col>
					<Col xs={12}>
						<img
							src='https://assets.website-files.com/5a68f082ae5eb70001efdda4/5fdb1aabcfe37319ab7070f9_platforms06.png'
							alt='social'
						/>
					</Col>
				</Row>
			</Col>

			<Col xs={4} className='col-three'>
				<Row className='experience-row'>
					<Col xs={12} className='card-heading'>
						EXPERIENCE
					</Col>
					<Col xs={12} className='card-values'>
						{experience}
					</Col>
				</Row>
				<Row className='sales-row'>
					<Col xs={12} className='card-heading'>
						AVG. INCREASE IN SALES
					</Col>
					<Col xs={12} className='card-values'>
						{sales}
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default UserCard;
