import React, { Component } from 'react';
import { Form, Row, Col,FormGroup ,Label, Input, Button } from 'reactstrap';


export default class storemanagerform extends Component {

    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            birthDay:'',
            email:'',
            password:'',
            address:'',
            telephonenumber:''

        }

        this.handeleAddress=this.handeleAddress.bind(this);
        this.handeleFirstName=this.handeleFirstName.bind(this);
        this.handeleLasttName=this.handeleLasttName.bind(this);
        this.handelebirthDay=this.handelebirthDay.bind(this);
        this.handeleEmail=this.handeleEmail.bind(this);
        this.handelePassword=this.handelePassword.bind(this);
        this.handeleTelephoneNumber=this.handeleTelephoneNumber.bind(this);
        this.onSubmitForm=this.onSubmitForm.bind(this);

    }

    handeleFirstName(event){
        this.setState({firstName: event.target.value})
    }

    handeleLasttName(event){
        this.setState({lastName: event.target.value})
    }

    handelebirthDay(event){
        this.setState({birthDay: event.target.value})
    }

    handeleEmail(event){
        this.setState({email: event.target.value})
    }

    handelePassword(event){
        this.setState({password: event.target.value})
    }

    handeleAddress(event){
        this.setState({address: event.target.value})
    }

    handeleTelephoneNumber(event){
        this.setState({telephonenumber:event.target.value})
    }

    onSubmitForm(event){
       event.preventDefault();
       console.log(this.state.firstName);
       
        
    }




    render() {
        return (
           <div style={Styles.regForm}>
            <Form   onSubmit={this.onSubmitForm}>
                <h4 style={Styles.regHeadertext}>Register new Store Manager</h4>
             <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="exampleEmail">First Name</Label>
                        <Input type="name" name="firstname"  placeholder="first name" value={this.state.firstName} onChange={this.handeleFirstName} />
                     </FormGroup>
              
                     <FormGroup>
                         <Label for="examplePassword">Birth Day</Label>
                        <Input type="date" name="birthday"   placeholder="last name"  value={this.state.birthDay} onChange={this.handelebirthDay} />
                    </FormGroup>
                 </Col>
                 <Col md={6}>
                     <FormGroup>
                         <Label for="examplePassword">Last Name</Label>
                        <Input type="name" name="name"   placeholder="last name" value={this.state.lastName}  onChange={this.handeleLasttName}/>
                    </FormGroup>
                 
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email"   placeholder="Email" value={this.state.email} onChange={this.handeleEmail}/>
                     </FormGroup>
                </Col>
            </Row>
           
                           
                     <FormGroup>
                         <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password"   placeholder="Password" value={this.state.password} onChange={this.handelePassword} />
                    </FormGroup>
                
          
                    <FormGroup>
                        <Label for="exampleAddress2">Address </Label>
                        <Input type="text" name="address"   placeholder="Apartment, studio, or floor" value={this.state.address} onChange={this.handeleAddress}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress2">Telephone Number </Label>
                        <Input type="text" name="telephonenumber"   placeholder="Add Telephone Number" value={this.state.telephonenumber} onChange={this.handeleTelephoneNumber}/>
                    </FormGroup>
           
                    
                         <Button type="submit" value="Submit" color="primary">Create Manager</Button>
            </Form>
            </div> 
        )
    }
}


const Styles={
    regHeadertext:{
        padding: '10px',
    },
    regForm:{
        backgroundColor:"white",
        padding: '10px',
        borderRadius:'10px'
    }
}