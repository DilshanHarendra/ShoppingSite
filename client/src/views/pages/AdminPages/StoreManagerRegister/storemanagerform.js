import React, { Component } from 'react';
import { Form, Row, Col,FormGroup ,Label, Input, Button } from 'reactstrap';
import axios from 'axios';


export default class Storemanagerform extends Component {

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
       
       const storeManager={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            birthDay:this.state.birthDay,
            email:this.state.email,
            password:this.state.password,
            address:this.state.address,
            telephonenumber:this.state.telephonenumber
       }

       const storemanager_user={
        Fullname:this.state.firstName+" "+this.state.lastName,
        Username:this.state.firstName+"_stmanager",
        email:this.state.email,
        type:"store_manager",
        newPassword:this.state.password
       }

       axios.post('http://localhost:3001/storeManager/add',storeManager)
       .then(res=>{
           console.log('new StpreManager create :'+res.data)
            axios.post("http://localhost:3001/User/addUser",storemanager_user)
            .then(res_user=>console.log("new user create as storemanager "+res_user))
            .catch(err_useer=>console.log("error in creating store manager as user"+err_useer))        
        
        })
       .catch(err=>console.log('error in sendig storemanager :'+err.data));



       window.location='http://localhost:3000/storeManager';
       
        
    }




    render() {
        return (
           <div style={Styles.regForm}>
                <h4 style={Styles.regHeadertext}>Register new Store Manager</h4>
            <Form  method="POST"  onSubmit={this.onSubmitForm}>
               
             <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="exampleEmail">First Name</Label>
                        <Input type="name" name="firstname"  placeholder="first name" value={this.state.firstName} onChange={this.handeleFirstName} required/>
                     </FormGroup>
              
                     <FormGroup>
                         <Label for="examplePassword">Birth Day</Label>
                        <Input type="date" name="birthday"   placeholder="last name"  value={this.state.birthDay} onChange={this.handelebirthDay}  required/>
                    </FormGroup>
                 </Col>
                 <Col md={6}>
                     <FormGroup>
                         <Label for="examplePassword">Last Name</Label>
                        <Input type="name" name="name"   placeholder="last name" value={this.state.lastName}  onChange={this.handeleLasttName} required/>
                    </FormGroup>
                 
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email"   placeholder="Email" value={this.state.email} onChange={this.handeleEmail} required/>
                     </FormGroup>
                </Col>
            </Row>
           
                           
                     <FormGroup>
                         <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password"   placeholder="Password" value={this.state.password} onChange={this.handelePassword} required />
                    </FormGroup>
                
          
                    <FormGroup>
                        <Label for="exampleAddress2">Address </Label>
                        <Input type="text" name="address"   placeholder="Apartment, studio, or floor" value={this.state.address} onChange={this.handeleAddress} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress2">Telephone Number </Label>
                        <Input type="text" name="telephonenumber"   placeholder="Add Telephone Number" value={this.state.telephonenumber} onChange={this.handeleTelephoneNumber} required/>
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