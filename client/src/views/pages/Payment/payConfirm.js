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

class payConfirm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            getCode:'',
            code:''
        };

        this.handleCode = this.handleCode.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:3001/payment/getSecretCode")
            .then(result=>{
                this.setState({
                    getCode:result.data.secretID
                });
            }).catch(err=>console.log(err));
    }

    handleCode(event){
        this.setState({code: event.target.value})
    }

    onSubmit(event){
        event.preventDefault();

        axios.post("http://localhost:3001/payment/removeSecretCode")
            .then().catch(err=>console.log(err));

        if(this.state.code == this.state.getCode)
        {
            window.location='http://localhost:3000/paymentSuccess';
        }
        else
        {
            console.log("Wrong");
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <h1 className="my-5 mx-auto text-center text-dark">VERIFICATION - FOR CARD PAYMENT</h1>
                    <Row className="my-2 justify-content-center">
                        <Col className="mx-auto mb-5" xl="6">
                            <Card>
                                <CardBody>
                                    <CardTitle ><h3 className="text-info font-weight-bold">Two-step verification</h3></CardTitle>
                                    <CardSubtitle className="font-weight-bold">Check your email inbox </CardSubtitle>
                                    <br />
                                    <Form method="POST" onSubmit={this.onSubmit}>
                                        <Row form>
                                            <Col md={8}>
                                                <FormGroup>
                                                    <Label>Serial number</Label>
                                                    <Input type="text" name="code" id="code" placeholder="Enter secret code in email" onChange={this.handleCode} />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button color="secondary" type="submit">VERIFY</Button>
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

export default payConfirm;