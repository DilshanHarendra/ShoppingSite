import React, { Component } from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from 'axios';
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
    Col,
  } from "reactstrap";

  import {
    CardFooter,
    CardHeader,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Dropdown,
    Fade,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupText,
    Label,
    Card,
    CardBody,
  } from "reactstrap";

class UserProfile extends Component{

    constructor(props){
        super(props);
        this.state={
            activeTab: new Array(4).fill("1"),

        }
    }


    componentDidMount=()=>{
      axios({
        method:"GET",
        url:"http://localhost:3001/user/getuserbyid",
        params:{_id:localStorage.getItem("id")},
       
    }).then(res=>{
       console.log(res.data.data);
        
    }).catch(err=>{
        
    })
  }

    toggle=(tabPane, tab)=> {
       
    
          const newArray = this.state.activeTab.slice();
          newArray[tabPane] = tab;
          this.setState({
            activeTab: newArray,
          });
    
       
      
      }


      tabPane() {
        return (
          <>
            <TabPane tabId="1">
              {
                   <Col>
 <Card style={{ borderColor: "white" }}>
 <CardBody>
   <FormGroup>
     <Label htmlFor="firstName">Full Name</Label>
     <Input
       type="text"
       id="fullname"
       name="fullname"
       placeholder="Enter first Name"
       value={this.state.fullname}
       onChange={this.changeHandler}
     />
   </FormGroup>

   <FormGroup>
     <Label htmlFor="mobileNumber">
       Mobile Number
     </Label>
     

     <PhoneInput
       country={"lk"}
       name="mobileNumber"
       // value={this.state.mobileNumber}
       onChange={(country, value, event) => {
         this.setState({
           dialCode: value["dialCode"],
           Country: value["name"],
           mobileNumber: country.slice(
             value.dialCode.length
           ),
         });
       }}
     />
   </FormGroup>

   <FormGroup>
     <Label htmlFor="Nic">NIC</Label>
     <Input
       type="text"
       id="Nic"
       name="Nic"
       placeholder="Enter Employee NIC"
       value={this.state.Nic}
       onChange={this.changeHandler}
     />
   </FormGroup>


   <FormGroup><Label htmlFor="Nic">Username</Label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-user"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                
                                <Input
                                  type="text"
                                  id="username"
                                  name="username"
                                  placeholder="Username"
                                  autoComplete="name"
                                  value={this.state.username}
                                  onChange={this.changeHandler}
                                  required
                                />
                              </InputGroup>
                            </FormGroup>
                        
                            <FormGroup>
                                  <Label htmlFor="street">Address 1</Label>
                                  <Input
                                    type="text"
                                    id="address1upd"
                                    name="address1upd"
                                    placeholder="Enter Address line 1"
                                    value={this.state.address1upd}
                                    onChange={this.changeHandler}
                                  />
                                </FormGroup>

                                <FormGroup>
                                  <Label htmlFor="street">Address 2</Label>
                                  <Input
                                    type="text"
                                    id="address2upd"
                                    name="address2upd"
                                    placeholder="Enter Address line 2"
                                    value={this.state.address2upd}
                                    onChange={this.changeHandler}
                                  />
                                </FormGroup>

                                <FormGroup>
                                  <Label htmlFor="city">City</Label>
                                  <Input
                                    type="text"
                                    id="cityupd"
                                    name="cityupd"
                                    placeholder="Enter your city"
                                    value={this.state.cityupd}
                                    onChange={this.changeHandler}
                                  />
                                </FormGroup>


 </CardBody>
</Card>
</Col>
              }
            </TabPane>

            <TabPane tabId="2">
              {
                   <div>Hi</div>
              }
              </TabPane>
            </>);
            
        }

render(){

    return(
<div className="d-flex justify-content-center ">
    <div>
<Col>
        <Nav tabs>
        <NavItem>
          <NavLink
            active={this.state.activeTab[0] === "1"}
            onClick={() => {
              this.toggle(0, "1");
            }}
          >
            Update Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={this.state.activeTab[0] === "2"}
            onClick={() => {
              this.toggle(0, "2");
            }}
          >
            Settings
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink
            active={this.state.activeTab[0] === "3"}
            onClick={() => {
              this.toggle(0, "3");
            }}
          >
            Messages
          </NavLink>
        </NavItem> */}
      </Nav>
      <TabContent activeTab={this.state.activeTab[0]}>
        {this.tabPane()}
      </TabContent>
      </Col>
      </div>
      </div>

    );
}

}
export default UserProfile;