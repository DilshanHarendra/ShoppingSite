import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';
import CardFooter from "reactstrap/es/CardFooter";
import CFooter from "@coreui/react/es/CFooter";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import FormText from "reactstrap/es/FormText";

class emailConfirm extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Container>
                    <h1 className="my-5 mx-auto text-center text-dark">EMAIL VERIFICATION</h1>
                    <Row className="my-2 justify-content-center">
                        <Col className="mx-auto mb-5" xl="6">
                            <Card>
                                <CardBody>
                                    <CardTitle ><h3 className="text-info font-weight-bold">Two-step verification</h3></CardTitle>
                                    <CardSubtitle className="font-weight-bold">Check your email inbox </CardSubtitle>
                                    <br />
                                    <Form>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Email</Label>
                                                    <Input type="tel" name="email" id="exampleEmail" placeholder="Confirm your email address" required />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button color="secondary">SEND</Button>
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