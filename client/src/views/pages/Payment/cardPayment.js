import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';
import CardFooter from "reactstrap/es/CardFooter";
import CFooter from "@coreui/react/es/CFooter";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import FormText from "reactstrap/es/FormText";
import axios from "axios";

class cardPayment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardNumber: '',
            cardCSV: '',
            cardHolderName: '',
            expireDate: '',
            cardType: ''
        };

        this.handeleName = this.handeleName.bind(this);
        this.handeleCardNumber = this.handeleCardNumber.bind(this);
        this.handeleCSV = this.handeleCSV.bind(this);
        this.handeleExpireDate = this.handeleExpireDate.bind(this);
        this.handeleCardType = this.handeleCardType.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    handeleName(event){
        this.setState({cardHolderName: event.target.value})
    }
    handeleCardNumber(event){
        this.setState({cardNumber: event.target.value})
    }
    handeleCSV(event){
        this.setState({cardCSV: event.target.value})
    }
    handeleExpireDate(event){
        this.setState({expireDate: event.target.value})
    }
    handeleCardType(event){
        this.setState({cardType: event.target.value})
    }

    onSubmit(event){
        event.preventDefault();

        const newCardPayment={
            payAmount: 5000,
            userID:10,
            orderID: 500,
            payDate:13/5/2020,
            cardNumber: this.state.cardNumber,
            cardCSV: this.state.cardCSV,
            cardHolderName: this.state.cardHolderName,
            expireDate: this.state.expireDate,
            cardType: this.state.cardType,
            payReceipt:false
        }

        axios.post('http://localhost:3001/payment/addCardPayment',newCardPayment)
            .then(res=>console.log('Add new payment :'+res.data))
            .catch(err=>console.log('Error!! unsuccessful :'+err.data));
        window.location='http://localhost:3000/paymentMain';
    }

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

                                    <Form method="POST" onSubmit={this.onSubmit}>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Name</Label>
                                                    <Input type="text" name="name" id="name" placeholder="Card holder name" onChange={this.handeleName} required />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <FormGroup>
                                            <Label>Card number</Label>
                                            <Input type="text" name="cardNumber" id="cardNumber" placeholder="16 digits card number" pattern="\d{16}" title="Card number contains only 16 digits" onChange={this.handeleCardNumber} required />
                                        </FormGroup>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Secret number</Label>
                                                    <Input type="text" name="csv" id="csv" placeholder="3 digits CSV number" pattern="\d{3}" title="Secret number contains only 3 digits" onChange={this.handeleCSV} required />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Expire Date</Label>
                                                    <Input type="date" name="edate" id="edate" required onChange={this.handeleExpireDate} />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <FormGroup row>
                                            <Label for="exampleSelect" sm={2}>Card</Label>
                                            <Col sm={5}>
                                                <Input type="select" name="cardType" id="cardType" onChange={this.handeleCardType}>
                                                    <option>VISA</option>
                                                    <option>MASTER</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>
                                        <Button type="submit" color="danger" className="ml-auto">PAY</Button>
                                    </Form>
                                </CardBody>
                                <CardFooter>
                                    <h6 className="text-muted text-right">Handled by <span className="text-info">C4FPayAdmin</span></h6>
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