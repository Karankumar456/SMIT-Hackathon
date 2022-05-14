import React from 'react'

import { Col, Tab, Row, Navbar, Nav, Container } from 'react-bootstrap';

import AddCourses from './addCourses';
import UpdateCourse from './updateCourse';
import AddStudent from './addStudent';

function LeftNavigation() {
    return (
        <div>
            <div className='leftNav'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col style={{ width: "200px" }}>
                            <h3>
                                Admin Dashboard
                            </h3>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Add Courses</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Update Course</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Add Students</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Leave Status</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <AddCourses />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <UpdateCourse />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <AddStudent />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    )
}

export default LeftNavigation