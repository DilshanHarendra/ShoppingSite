import React, { Component } from 'react'
import { Table, Container } from 'reactstrap';
import axios from 'axios';


const StoreManager=props=>(
    <tr>
        <td>{props.storemanager.firstName}</td>
        <td>{props.storemanager.lastName}</td>
        <td>{props.storemanager.birthDay}</td>
        <td>{props.storemanager.emailAddress}</td>
        <td>{props.storemanager.address}</td>
        <td>{props.storemanager.telephoneNumber}</td>
        <td>
        <button className="btn btn-danger" onClick={()=>{props.deleteStoreManager(props.storemanager._id)}}>Delete</button>
        </td>
    </tr>

)






export default class storemanagerview extends Component {
    
    constructor(props){
        super(props)
          this.deleteStoreManager=this.deleteStoreManager.bind(this);
          this.loadStoreManagerData=this.loadStoreManagerData.bind(this);
          this.state={storemanagerlist:[]};
  
 
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
 


    deleteStoreManager(id){
        axios.delete('http://localhost:3001/storeManager/'+id)
        .then(res=>console.log(res.data));
        this.setState({
            storemanagerlist:this.state.storemanagerlist.filter(el=>el._id!==id)
        })
        
    }
    
    storemanagrList(){
        return this.state.storemanagerlist.map(currentstoremanager=>{
            return <  StoreManager storemanager={currentstoremanager} deleteStoreManager={this.deleteStoreManager} key={currentstoremanager._id}/>;
        })
   }
   
    
    
    
    render() {
        return (
          <Container style={Styles.regTablePlanal}>
                <h4 style={Styles.regHeadertext}>Register new Store Manager</h4>
                    <Table  responsive >
                        <thead>
                              <tr>
            <th>fname</th>
            <th>lname</th>
            <th>Birthday</th>
            <th>Email</th> 
            <th>Address</th>
            <th>Telnumber</th>
            <th>Action</th>

         
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
    regHeadertext:{
        padding: '10px',
    }
}