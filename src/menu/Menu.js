import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import classes from './Menu.module.css'

const RenderNavs = (props) => {
    let navLinkComponents = [];
    props.sections.map(section => {
        navLinkComponents.push(
            <Nav.Link className={classes.NavLink} href={`${section}`}>{section}</Nav.Link>
        )
        console.log("NavLink component added: " + section)
    })
    return (
        <Nav className="Menu">
            {navLinkComponents /* how to render all components in array*/}
        </Nav>
    )
}

const Menu = (props) => {
    return (
        <div>
            <Navbar className={classes.navbar} bg="light" expand="lg">
                <Navbar.Brand href="#root">{/*TODO logo img here*/}</Navbar.Brand>
                <RenderNavs sections={props.sections}/>
            </Navbar>
        </div>
    )
}

export default Menu;