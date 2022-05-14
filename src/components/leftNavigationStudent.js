import React from 'react'

import { Col, Tab, Row, Navbar, Nav, Container } from 'react-bootstrap';

import AddCourses from './addCourses';
import ApplyForLeave from './applyForLeave';
import LeftNavigation from './leftNavigation';

function LeftNavigationStudent() {
    return (
        <div>
            <div className='leftNav'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col style={{ width: "200px" }}>
                            <h3>
                                Student Dashboard
                            </h3>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Apply For Leave</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <ApplyForLeave />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    )
}

export default LeftNavigationStudent