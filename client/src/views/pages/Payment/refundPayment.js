import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col, Table} from 'reactstrap';
import CardFooter from "reactstrap/es/CardFooter";
import CFooter from "@coreui/react/es/CFooter";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import FormText from "reactstrap/es/FormText";

class refundPayment extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Container>
                    <h1 className="my-auto mx-auto text-center text-dark">PAYMENT-REFUND</h1>
                    <h6 className="my-3 mx-auto text-center text-dark">Make sure, only for card payments can be raised a refund request</h6>
                    <Table responsive="md">
                        <thead>
                        <tr>
                            {/*
                            if the status is not delivered only, refunds can be accpeted, if the status is delivered,
                            refund button should not be clickable.
                            */}
                            <th>Payment ID</th>
                            <th>Payment Date</th>
                            <th>Payment amount</th>
                            <th>Status</th>
                            <th>Refund</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>7/5/2020</td>
                            <td>5000</td>
                            <td>Delivered</td>
                            <td><Button>Refund</Button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>7/5/2020</td>
                            <td>5000</td>
                            <td>Delivered</td>
                            <td><Button>Refund</Button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>7/5/2020</td>
                            <td>5000</td>
                            <td>Delivered</td>
                            <td><Button>Refund</Button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>7/5/2020</td>
                            <td>5000</td>
                            <td>Delivered</td>
                            <td><Button>Refund</Button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>7/5/2020</td>
                            <td>5000</td>
                            <td>Delivered</td>
                            <td><Button>Refund</Button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>7/5/2020</td>
                            <td>5000</td>
                            <td>Delivered</td>
                            <td><Button>Refund</Button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>7/5/2020</td>
                            <td>5000</td>
                            <td>Delivered</td>
                            <td><Button>Refund</Button></td>
                        </tr>
                        </tbody>
                    </Table>
                    <CFooter><h6 className="text-right">By <span className="text-danger">PaymentAdmin</span></h6></CFooter>
                </Container>


            </div>
        );
    }
}

export default refundPayment;