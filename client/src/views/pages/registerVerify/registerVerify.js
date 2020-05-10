import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import axios from "axios";
import alertify from "alertifyjs";

class registerVerify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fullname: "",
      Username: "",
      email: "",
      newPassword: "",
      newPasswordck: "",
      Valid: [false, false, false, false, false],
      Invalid: [false, false, false, false, false],
      malidi: false,
      vidula: false,
    };
  }

  onChangeHandler = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => console.log(this.state.newPassword)
    );

    // console.log(this.state.newPassword);
  };

  handlePasswordConfirm = (e) => {
    if (e.target.value === this.state.newPassword) {
      this.setState(
        {
          vidula: true,
          malidi: false,
        },
        () => console.log(this.state.malidi)
      );
    } else {
      this.setState(
        {
          malidi: true,
          vidula: false,
        },
        () => console.log(this.state.malidi)
      );
    }
    // console.log(this.state.malidi);
  };

  submitHandler = (e) => {
    e.preventDefault();
    // alertify.notify("sample", "success", 5, function () {
    //   console.log("dismissed");
    // });
    const data = this.state;

    delete data.newPasswordck;
    delete data.Valid;
    delete data.Invalid;

    try {
      axios.post("http://localhost:3001/user/addUser", data).then((res) => {
        console.log(res);
        console.log(res.data);
      });
    } catch (e) {
      console.log(e)
    }
  };
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.submitHandler}>
                    <h3>Register</h3>
                    <p className="text-muted">Create your account</p>

                   
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="flaticon-unlock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Password"
                        className="form-control-success"
                        name="newPassword"
                        valid={this.state.Valid[3]}
                        invalid={this.state.Invalid[3]}
                        autoComplete="new-password"
                        value={this.state.newPassword}
                        onChange={this.onChangeHandler}
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="flaticon-unlock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Repeat password"
                        name="newPasswordck"
                        autoComplete="new-password"
                        valid={this.state.vidula}
                        invalid={this.state.malidi}
                        onChange={this.handlePasswordConfirm}
                      />
                    </InputGroup>

                    <Button type="submit" color="success" block>
                      Create Account
                    </Button>
                  </Form>
                </CardBody>
               
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default registerVerify;
