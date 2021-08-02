import React from "react";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Logo } from "../../assets";
import "./Navbar.scss";
const NavigationBar = () => {
	return (
		<Navbar collapseOnSelect expand='lg' className='mayple-nav'>
			<Navbar.Brand href='#home'>
				<img src={Logo} alt='mayple logo' />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='#home'>How can we help?</Nav.Link>
					<NavDropdown
						title='Quality standard'
						id='nav-dropdown-quality-standard'>
						<NavDropdown.Item href='#home'>
							Vetting
						</NavDropdown.Item>
						<NavDropdown.Item href='#home'>
							Management
						</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href='#home'>Pricing</Nav.Link>
					<Nav.Link href='#home'>Our story</Nav.Link>
					<NavDropdown title='Blog' id='nav-dropdown-blog'>
						<NavDropdown.Item href='#home'>
							eCommerce Marketing
						</NavDropdown.Item>
						<NavDropdown.Item href='#home'>
							Top expert
						</NavDropdown.Item>
						<NavDropdown.Item href='#home'>
							Future of work
						</NavDropdown.Item>
						<NavDropdown.Item href='#home'>
							eCommerce 101
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>

				<Nav>
					<Nav.Link href='#home'>Apply as an expert</Nav.Link>
					<Nav.Link eventKey={2} href='#home'>
						Login
					</Nav.Link>
					<Button size='lg' className='get-started-button'>
						GET STARTED
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavigationBar;
