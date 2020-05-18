import React, { Component } from 'react'
import Chart from 'chart.js'
import Axios from 'axios'

export default class CartGrahps extends Component {
    constructor(props){
        super(props)
        this.state={
            CartList:[],
            PrdocutNameGroup:[],
            isLoading :false,
            groupByName:[]
        }

        this.filterByName=this.filterByName.bind(this);
        // this.loadStoreManagerData=this.loadStoreManagerData.bind(this);
        
    }

    async componentDidMount(){
       
        Axios.get('http://localhost:3001/cart/')
        .then(ressopns=>{

             this.setState({CartList:ressopns.data})     
                  this.setState({ groupByName:this.state.CartList.reduce((r, a) => {
                    
                 r[a.products.proName] = [...r[a.products.proName] || [], a];
                 return r;
                }, {})
            
            
            
            }).then(res=>{
                this.setState({isLoading:true})   
            })
            .catch(err=>{console.log(err)})

           
        })
        .catch((error)=>{
            console.log('error :'+error);
        })
        
    }

  

  async filterByName(){  
    console.log(this.state.groupByName); 
        if( this.state.groupByName.length>0){
            console.log(this.state.groupByName);
            
        return this.state.groupByName.map(name =>{
             return <li key={name._id}>{name._id}</li>
      })

    }
      
      
    }

    notdataLoading(){
        return <h5>Data loading...</h5>
    }
    
    render() {
        return (
            <div style={chartStyle}>
                <h5>Group</h5>
                        <ul>   
                            {this.state.isLoading? this.filterByName(): this.notdataLoading()}                          
                        </ul> 
                
            </div>
        )
    }
}


const chartStyle={
    padding:'51px',
}