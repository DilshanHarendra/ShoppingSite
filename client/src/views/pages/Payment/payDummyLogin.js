import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';
import CardFooter from "reactstrap/es/CardFooter";
import CFooter from "@coreui/react/es/CFooter";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import axios from "axios";
import {Link,NavLink} from 'react-router-dom';

class payDummyLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:"",
            password:"",
            auth:false
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    makeGetRequest = () => {
        if(this.state.auth === true){
            return  <Link to="/payAdmin" />
        }
        else {
            return <Link to="/payDummyLogin" />
        }
    };

    paymentLogin = (e) =>{
        e.preventDefault();
        const data = this.state;
        try {
            axios.post("http://localhost:3001/Payment/login", data).then(res=>{
                this.setState({
                    auth:res.data
                });
            });
        } catch (e) {}

        this.makeGetRequest();
    };


    render() {
        return (
            <div>
                <Container>
                    <h1 className="my-5 mx-auto text-center text-dark">Login-Payment</h1>
                    <Row className="my-2">
                        <Col className="mx-auto mb-5" xl="6">
                            <Card>
                                <CardImg top width="100%" src="./images/Payment/1.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle ><h3 className="text-info font-weight-bold">Login Auth</h3></CardTitle>
                                    <CardSubtitle className="font-weight-bold">Admin or Client</CardSubtitle>
                                    <br />

                                    <Form onSubmit={this.paymentLogin}>
                                                <FormGroup>
                                                    <Label>Username</Label>
                                                    <Input type="text" name="username" id="username" placeholder="Username" onChange={this.onChangeHandler} required />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>Password</Label>
                                                    <Input type="text" name="password" id="password" placeholder="Password" onChange={this.onChangeHandler} required />
                                                </FormGroup>
                                        <Button type="submit" color="danger" className="ml-auto" block>LOGIN</Button>
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

export default payDummyLogin;