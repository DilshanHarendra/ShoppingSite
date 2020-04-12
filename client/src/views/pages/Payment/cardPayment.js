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
                    <h1 className="my-5 mx-auto text-center text-dark">PAYMENT-CARD</h1>
                    <Row className="my-2">
                        <Col className="mx-auto mb-5" xl="6">
                            <Card>
                                <CardImg top width="100%" src="./images/Payment/1.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle ><h3 className="text-info font-weight-bold">Credit/Debit</h3></CardTitle>
                                    <CardSubtitle className="font-weight-bold">Pay by Credit/Debit card </CardSubtitle>
                                    <br />

                                    <Form>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Name</Label>
                                                    <Input type="text" name="name" id="holderName" placeholder="Card holder name" required />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <FormGroup>
                                            <Label>Card number</Label>
                                            <Input type="text" name="cardNumber" id="cardNumber" placeholder="16 digits card number" pattern="\d{16}" title="Card number contains only 16 digits" required />
                                        </FormGroup>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Secret number</Label>
                                                    <Input type="text" name="csv" id="csv" placeholder="3 digits CSV number" pattern="\d{3}" title="Secret number contains only 3 digits" required />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Expire Date</Label>
                                                    <Input type="date" name="date" id="date" required />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <FormGroup row>
                                            <Label for="exampleSelect" sm={2}>Card</Label>
                                            <Col sm={5}>
                                                <Input type="select" name="select" id="exampleSelect">
                                                    <option>VISA</option>
                                                    <option>MASTER</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>
                                        <Button color="danger" className="ml-auto">PAY</Button>
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