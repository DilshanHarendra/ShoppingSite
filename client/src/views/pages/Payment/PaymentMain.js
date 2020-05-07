import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';
import CardFooter from "reactstrap/es/CardFooter";
import CFooter from "@coreui/react/es/CFooter";
import {Link,NavLink} from 'react-router-dom';

class PaymentMain extends Component {
    state = {}

    render() {
        return (
            <div>
                <Container>
                    <h1 className="my-5 mx-auto text-center text-dark">PAYMENT</h1>
                    <Row className="my-2">
                        <Col className="mx-auto mb-5" xl="4">
                            <Card>
                                <CardImg top width="100%" src="./images/Payment/1.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle className="text-info font-weight-bold">Credit/Debit</CardTitle>
                                    <CardSubtitle>Pay by Credit/Debit card</CardSubtitle>
                                    <CardText>Clients will be able to make online payments through Credit/Debit card. We assure that this method is 100% secure. <br /> <br /></CardText>
                                    <Link to="/cardPayment">
                                        <Button color="primary">Next</Button>
                                    </Link>
                                </CardBody>
                                <CardFooter>
                                    <h6 className="text-muted text-right">Handled by <span className="text-info">DivisimaPayAdmin</span></h6>
                                </CardFooter>
                            </Card>
                        </Col>

                        <Col className="mx-auto mb-5" xl="4">
                            <Card>
                                <CardImg top width="100%" src="./images/Payment/2.jpg" alt="Card image cap" />
                                <CardBody>

                                    <CardTitle className="text-info font-weight-bold">Bank receipt</CardTitle>
                                    <CardSubtitle>Pay through bank receipt</CardSubtitle>
                                    <CardText>Make payment to our bank account and submit the receipt here. <br /> Bank account: 11223345678  <br /> Bank: Commercial Bank PLC</CardText>
                                    <Link to="/receiptPayment">
                                        <Button color="primary">Next</Button>
                                    </Link>
                                </CardBody>
                                <CardFooter>
                                    <h6 className="text-muted text-right">Handled by <span className="text-info">DivisimaPayAdmin</span></h6>
                                </CardFooter>
                            </Card>
                        </Col>

                        <Col className="mx-auto mb-5" xl="4">
                            <Card>
                                <CardImg top width="100%" src="./images/Payment/3.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle className="text-info font-weight-bold">Refund payment</CardTitle>
                                    <CardSubtitle>Raise request for refund</CardSubtitle>
                                    <CardText>Only credit/debit card payments can be refunded. If you need to refund a bank payment, please send a request to below email. <br /> Email: support@adminpayment.com</CardText>
                                    <Link to="/refundPayment">
                                        <Button color="primary">Next</Button>
                                    </Link>
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

export default PaymentMain;