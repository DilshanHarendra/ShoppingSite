import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';
import CardFooter from "reactstrap/es/CardFooter";
import CFooter from "@coreui/react/es/CFooter";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import FormText from "reactstrap/es/FormText";

class refundConfirm extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Container>
                    <h1 className="my-5 mx-auto text-center text-dark">VERIFICATION - FOR REFUND</h1>
                    <Row className="my-2 justify-content-center">
                        <Col className="mx-auto mb-5" xl="6">
                            <Card>
                                <CardBody>
                                    <CardTitle ><h3 className="text-info font-weight-bold">Two-step verification</h3></CardTitle>
                                    <CardSubtitle className="font-weight-bold">Check your email inbox </CardSubtitle>
                                    <br />
                                    <Form>
                                        <Row form>
                                            <Col md={8}>
                                                <FormGroup>
                                                    <Label>Serial number</Label>
                                                    <Input type="text" name="serialNumber" id="exampleEmail" placeholder="Enter secret code in email" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button color="secondary">VERIFY</Button>
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

export default refundConfirm;