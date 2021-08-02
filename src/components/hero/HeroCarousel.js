import React from "react";
import { Carousel } from "react-bootstrap";
import { PEOPLES } from "../../constants/PEOPLES";
import UserCard from "./../../common/userCard/UserCard";
import "./HeroCarousel.scss";

const HeroCarousel = () => {
	return (
		<Carousel
			fade
			controls={false}
			interval='998000'
			indicators={false}
			className='hero-carousel'>
			{PEOPLES.map((people) => {
				return (
					<Carousel.Item key={people.id}>
						<img
							src={people.pic}
							alt={people.name}
							className='hero-image'
						/>
						<UserCard peopleObj={people} />
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};

export default HeroCarousel;
