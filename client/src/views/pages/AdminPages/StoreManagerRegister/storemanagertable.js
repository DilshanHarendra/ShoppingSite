import React, { Component } from 'react'
import { Table, Container, Input } from 'reactstrap';

import axios from 'axios';


const StoreManager=props=>(
    <tr >
        <td>
            {props.storemanager.firstName}
                   
        </td>
        <td>{props.storemanager.lastName}</td>
        <td>{props.storemanager.birthDay}</td>
        <td>{props.storemanager.emailAddress}</td>
        <td>{props.storemanager.address}</td>
        <td>{props.storemanager.telephoneNumber}</td>
        <td>
        <button className="btn btn-danger" onClick={()=>{props.deleteStoreManager(props.storemanager._id)}}>Delete</button>
        </td>
        <td>
        <button className="btn btn-warning" onClick={()=>{props.editStoreManager(props.storemanager)}}  >Edit </button>
        </td>
    </tr>

)






export default class storemanagerview extends Component {
    
    constructor(props){
        super(props)
          this.deleteStoreManager=this.deleteStoreManager.bind(this);
          this.loadStoreManagerData=this.loadStoreManagerData.bind(this);
          this.handleSearch=this.handleSearch.bind(this);
          this.handleEditdata=this.handleEditdata.bind(this);
          this.state={storemanagerlist:[],
                      searchkeyword:'' ,
                      editdata:false ,
                      editFirstname:'',
                      editLastname:'',
                      editBirthda:'',
                      editEmailAddress:'',
                      editAddress:'',
                      editTelephoneNumber:''
        };
  
 
    }

    componentDidMount(){
        this.loadStoreManagerData();
        
       }


    loadStoreManagerData(){
        axios.get('http://localhost:3001/storeManager/')
        .then(ressopns=>{
            console.log(ressopns);
            this.setState({storemanagerlist:ressopns.data})
            console.log(ressopns.data);
            
        })
        .catch((error)=>{
            console.log('error :'+error);
        })
    }   
 
    handeleEditFirstname(event){
        this.setState({editFirstname:event.target.value})
    }

    handeleEditLastname(event){
        this.setState({editLastname:event.target.value})
    }

    handeleEditBirthday(event){
        this.setState({editBirthda:event.target.value})
    }

    handeleAddress(event){
        this.setState({editAddress:event.target.value})
    }

    handeleEmailAddress(event){
        this.setState({editEmailAddress:event.target.value})
    }

    handeleTelephoneNumber(event){
        this.setState({editTelephoneNumber:event.target.value})
    }


    deleteStoreManager(id){
        axios.delete('http://localhost:3001/storeManager/'+id)
        .then(res=>console.log(res.data));
        this.setState({
            storemanagerlist:this.state.storemanagerlist.filter(el=>el._id!==id)
        })
        
    }
    
    storemanagrList(){
        return this.state.storemanagerlist.map(currentstoremanager=>{
            return <  StoreManager storemanager={currentstoremanager} editStoreManager={this.handleEditdata} deleteStoreManager={this.deleteStoreManager} key={currentstoremanager._id}/>;
        })
   }
   
   handleSearch(event){
       let storemng= event.target.value.trim().toLowerCase();

       if(storemng.length>0){
       this.setState({
          storemanagerlist: this.state.storemanagerlist.filter(item=>{
            return (item.firstName.toLowerCase().match(event.target.value)||
                    item.lastName.toLowerCase().match(event.target.value)||
                    item.emailAddress.toLowerCase().match(event.target.value)||
                    item.address.toLowerCase().match(event.target.value)||
                    item.birthDay.toLowerCase().match(event.target.value)||
                    item.telephoneNumber.toLowerCase().match(event.target.value)
                    )
            })
        })
        }else{
            this.loadStoreManagerData()
        }
   
   }
    
   handleEditdata(editdata){
       console.log("edited");
       console.log(editdata._id);
       
       this.setState({
           editdata:true,
           editFirstname:editdata.firstName,
           editLastname:editdata.lastName,
           editAddress:editdata.address,
           editEmailAddress:editdata.editAddress,
           editBirthda:editdata.birthDay,
           editTelephoneNumber:editdata.telephoneNumber

       })


   }
    
    
    render() {
        return (
          <Container style={Styles.regTablePlanal}>
                <h4 style={Styles.regHeadertext}>Register new Store Manager</h4>
                    <Input type="text" onChange={this.handleSearch} placeholder="Search hear"></Input>
                    <Table  responsive >
                        <thead>
                              <tr>
            <th>Fname</th>
            <th>lname</th>
            <th>Birthday</th>
            <th>Email</th> 
            <th>Address</th>
            <th>Telnumber</th>
            <th>Delete</th>
            <th>Edite</th>

         
        </tr>
                        </thead>
                            <tbody>
                               {this.storemanagrList()}
                            </tbody>
                    </Table>
        </Container>         
           
        )
    }
}


const Styles={
    regHeadertext:{
        padding: '10px',
    },
    regTablePlanal:{
        backgroundColor:"white",
        padding: '10px',
        borderRadius:'10px'
    },

}