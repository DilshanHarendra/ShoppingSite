import React, { Component } from "react";
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
  Table,
} from "reactstrap";
import CardFooter from "reactstrap/es/CardFooter";
import CFooter from "@coreui/react/es/CFooter";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import FormText from "reactstrap/es/FormText";
import axios from "axios";
import {Link} from 'react-router-dom';

class refundPayment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            status:false,
        };

        this.handleRefundOption = this.handleRefundOption.bind(this);
    }
    componentDidMount() {
        axios({
            method:"GET",
            url:"http://localhost:3001/payment/getUserCardPayments"
        }).then(res=>{
            this.setState({
                data: res.data
            });
        }).catch(err=>{
            console.log(err);
        })
    }

    handleRefundOption(id){
        this.setState({
            status:true
        })
        const sendId ={id};
        axios.post('http://localhost:3001/payment/refundRequest',sendId)
            .then(res=>console.log('Request sent :'+res.data))
            .catch(err=>console.log('Error!! unsuccessful :'+err.data));
    }

    redirectFunction=()=>{

    }
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
                                    <th>Order ID</th>
                                    <th>Payment Date</th>
                                    <th>Payment amount</th>
                                    <th>Status</th>
                                    <th>Refund</th>
                                </tr>
                                </thead>
                                {this.state.data.map(payments=>(
                                    <tbody>
                                    <tr>
                                        <td>{payments.payID}</td>
                                        <td>{payments.orderID}</td>
                                        <td>{payments.payDate}</td>
                                        <td>{payments.payAmount}</td>
                                        <td>{payments.paymentStatus}</td>
                                        <Link to={{pathname:'/refundRequest',state:{
                                                payID:payments.payID,
                                                orderID:payments.orderID,
                                                payDate:payments.payDate,
                                                payAmount:payments.payAmount,
                                                paymentStatus:payments.paymentStatus
                                        }
                                        }}>
                                            <td><Button onClick={()=>{this.handleRefundOption(payments.payID)}}>Refund</Button></td>
                                        </Link>

                                    </tr>
                                    </tbody>
                                ))}
                            </Table>

                    <CFooter><h6 className="text-right">By <span className="text-danger">PaymentAdmin</span></h6></CFooter>
                </Container>


            </div>
        );
    }
}

export default refundPayment;
