import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';
import CardFooter from "reactstrap/es/CardFooter";
import CFooter from "@coreui/react/es/CFooter";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import axios from "axios";

class payDummyLogin extends Component {
    state = {  };

    paymentLogin = () =>{
        axios({
            method: 'POST',
            url:'http://localhost:3001/payment/login'
        });
    };

    render() {
        return (
            <div>
                <Container>
                    <h1 className="my-5 mx-auto text-center text-dark">Login-Payment</h1>
                    <Row className="my-2">
                        <Col className="mx-auto mb-5" xl="6">
                            <Card>
                                <CardImg top width="100%" src="./images/Payment/1.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle ><h3 className="text-info font-weight-bold">Login Auth</h3></CardTitle>
                                    <CardSubtitle className="font-weight-bold">Admin or Client</CardSubtitle>
                                    <br />

                                    <Form onSubmit={this.paymentLogin()} method="post">
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Username</Label>
                                                    <Input type="text" name="username" id="username" placeholder="Username" required />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Password</Label>
                                                    <Input type="text" name="password" id="password" placeholder="Password" required />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button type="submit" color="danger" className="ml-auto">LOGIN</Button>
                                    </Form>
                                </CardBody>
                                <CardFooter>
                                    <h6 className="text-muted text-right">Handled by <span className="text-info">DivisimaPayAdmin</span></h6>
                                </CardFooter>
                            </Card>
                        </Col>

                    </Row>
                    <CFooter><h6 className="text-right">By <span className="text-danger">PaymentAdmin</span></h6></CFooter>
                </Container>


            </div>
        );
    }
}

export default payDummyLogin;