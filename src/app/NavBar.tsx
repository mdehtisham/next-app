"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar(){
    const pathName = usePathname();
    return (
        <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} href="/">Image Gallery</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav>
                        <Nav.Link as={Link} href="/static" active={pathName === '/static'}>Static</Nav.Link>
                        <Nav.Link as={Link} href="/dynamic" active={pathName === '/dynamic'}>Dynamic</Nav.Link>
                        <Nav.Link as={Link} href="/isr" active={pathName === '/isr'}>ISR</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}