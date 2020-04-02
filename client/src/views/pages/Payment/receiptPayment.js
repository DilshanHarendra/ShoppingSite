import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';
import CardFooter from "reactstrap/es/CardFooter";
import CFooter from "@coreui/react/es/CFooter";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import FormText from "reactstrap/es/FormText";

class cardPayment extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Container>
                    <h1 className="my-5 mx-auto text-center text-dark">PAYMENT-RECEIPT</h1>
                    <Row className="my-2">
                        <Col className="mx-auto mb-5" xl="6">
                            <Card>
                                <CardImg top width="100%" src="./images/Payment/2.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle ><h3 className="text-info font-weight-bold">Bank payment receipt</h3></CardTitle>
                                    <CardSubtitle className="font-weight-bold">Pay by Bank Slip </CardSubtitle>
                                    <br />
                                    <Form>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Bank Name:</Label>
                                                    <Input type="text" name="bname" id="bname" placeholder="Enter bank name" />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Branch</Label>
                                                    <Input type="text" name="branch" id="branch" placeholder="Enter bank branch" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <FormGroup>
                                            <Label>Amount</Label>
                                            <Input type="text" name="Amount" id="Amount" placeholder="Enter deposited amount"/>
                                        </FormGroup>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Deposited date</Label>
                                                    <Input type="date" name="ddate" id="ddate" />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Attach the slip here</Label>
                                                    <br />
                                                    <Button color="dark">ATTACH</Button>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Button color="danger">SUBMIT</Button>
                                    </Form>
                                </CardBody>
                                <CardFooter>
                                    <h6 className="text-muted text-right">Handled by <span className="text-info">DivisimaPayAdmin</span></h6>
                                </CardFooter>
                            </Card>
                        </Col>

                        <Col className="mx-auto mb-5" xl="6">
                            <Card>
                                <CardImg top width="100%" src="./images/Payment/4.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle ><h3 className="text-info font-weight-bold text-center">Order Details</h3></CardTitle>
                                    <CardSubtitle className="font-weight-bold text-center mb-4">Refer below your order items before proceed further</CardSubtitle>
                                    <CardText className="text-center">
                                        Make payment to our bank account and submit the receipt here
                                        <br />
                                        Make payment to our bank account and submit the receipt here
                                        <br />
                                        Make payment to our bank account and submit the receipt here
                                        <br />
                                        Make payment to our bank account and submit the receipt here
                                        <br />
                                        Make payment to our bank account and submit the receipt here
                                        <br />
                                        Make payment to our bank account and submit the receipt here
                                        <br />
                                        Make payment to our bank account and submit the receipt here
                                    </CardText>
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

export default cardPayment;