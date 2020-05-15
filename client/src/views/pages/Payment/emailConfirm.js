import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container,
    Row,
    Col,
    Alert
} from 'reactstrap';
import CardFooter from "reactstrap/es/CardFooter";
import CFooter from "@coreui/react/es/CFooter";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import FormText from "reactstrap/es/FormText";
import axios from "axios";
import alertify from "alertifyjs";

class emailConfirm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:''
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    componentDidMount() {
        const search = this.props.location.search; // returns the URL query String
        const params = new URLSearchParams(search);
        const IdFromURL = params.get('protection');
        if(IdFromURL !== 'Confirm'){
            alertify.alert("Access denied to this page!!");
            window.location.href="/paymentMain";
        }
    }

    handleEmail(event){
        this.setState({email: event.target.value})
    }

    onSubmit(event){
        event.preventDefault();

        const SendEmail={
            email:this.state.email
        };

        axios.post('http://localhost:3001/payment/emailVerification',SendEmail)
            .then(res=>console.log('Add new payment :'+res.data))
            .catch(err=>console.log('Error!! unsuccessful :'+err.data));
        window.location='http://localhost:3000/payConfirm';
    }

    render() {
        return (
            <div>
                <Container>
                    <Alert color="secondary">
                        <h1 className="my-3 mx-auto text-center text-dark">EMAIL VERIFICATION</h1>
                    </Alert>

                    <Row className="my-2 justify-content-center">
                        <Col className="mx-auto mb-5" xl="6">
                            <Card>
                                <CardBody>
                                    <CardTitle ><h3 className="text-info font-weight-bold">Two-step verification</h3></CardTitle>
                                    <CardSubtitle className="font-weight-bold">Check your email inbox </CardSubtitle>
                                    <br />
                                    <Form method="POST" onSubmit={this.onSubmit}>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Email</Label>
                                                    <Input type="tel" name="email" id="email" placeholder="Confirm your email address" onChange={this.handleEmail} required />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button type="submit" color="secondary">SEND</Button>
                                        <br />
                                        <Label>Did not get the code? <a href="#">Send again</a></Label>
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

export default emailConfirm;