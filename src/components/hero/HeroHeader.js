import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./HeroHeader.scss";
const HeroHeader = () => {
	return (
		<div className='hero-header'>
			<h1 className='heading'>
				Work With The Top Marketers To Grow Your Business
			</h1>
			<h4 className='sub-heading'>
				Top 1% marketing experts in your niche with proven ROI results,
				backed by unbiased monitoring.
			</h4>
			<Form>
				<Row noGutters>
					<Col xs={4}>
						<Form.Control
							size='lg'
							type='text'
							placeholder='Try "Fashion"'
							className='add-shadow'
						/>
					</Col>
					<Col xs={8}>
						<Button size='lg' className='get-started-button  '>
							GET STARTED
						</Button>
					</Col>
					<p className='mt-4'>
						{" "}
						<img
							src='https://assets.website-files.com/5a68f082ae5eb70001efdda4/5db0330d11163881860f3fa5_check_icon.svg'
							alt='check'
						/>{" "}
						Monthly subscription, no commitment
					</p>
				</Row>
			</Form>
		</div>
	);
};

export default HeroHeader;
