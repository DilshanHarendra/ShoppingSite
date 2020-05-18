import React, { Component } from 'react'
import Chart from 'chart.js'
import Axios from 'axios'
// Student id :IT18045840
//Name :S.D.S.L Dissanayake
export default class stormanagerchart extends Component {
    constructor(props){
        super(props)
        this.state={
            CartDetaisls:[],
            numberOfFrock:0,
            numberOfCoats:0,
            numberOfMiniDresses:0,
            numberOfTShirt:0,
            numberOfWedding:0

        }
        
    }

    componentDidMount(){
        this.loadStoreManagerData()
         
        
    }
    loadStoreManagerData(){
        Axios.get('http://localhost:3001/cart/')
        .then(ressopns=>{
            console.log(ressopns);
            this.setState({CartDetaisls:ressopns.data})

           let tempCart=this.state.CartDetaisls;

                let numberOfFrock =tempCart.filter(item=>{
                  return  item.products.subCatogory=='Frock'
                    })

                let numberOfCoats =tempCart.filter(item=>{
                    return  item.products.subCatogory=='Coats'
                    })

                let numberOfMiniDresses =tempCart.filter(item=>{
                    return  item.products.subCatogory=='Maxi Dresses'
                    })
  
                let numberOfWedding =tempCart.filter(item=>{
                      return  item.products.subCatogory=='Wedding'
                    })
                
                let numberOfTShirt =tempCart.filter(item=>{
                        return  item.products.subCatogory=='TShirt'
                    })  
                this.setState({
                    numberOfTShirt:numberOfTShirt.length,
                    numberOfCoats:numberOfCoats.length, 
                    numberOfWedding:numberOfWedding.length,
                    numberOfMiniDresses:numberOfMiniDresses.length,
                    numberOfFrock:numberOfFrock.length
                    
                })      
             
                this.chartGenerate()
        })
        .catch((error)=>{
            console.log('error :'+error);
        })

    
    }   


    chartGenerate(){
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['TShirt', 'Coats', 'Wedding', 'MiniDresses', 'Frock',],
            datasets: [{
                label: '# of Votes',
                data: [this.state.numberOfTShirt, this.state.numberOfCoats, this.state.numberOfWedding, this.state.numberOfMiniDresses, this.state.numberOfFrock],
                 backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235,1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64,1)'
                ],
             
               
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


    }
    render() {
        return (
            <div style={chartStyle}>
                <h5>Customer Prefers Insight</h5>
                <canvas id="myChart" width="400" height="400"></canvas>
            </div>
        )
    }
}


const chartStyle={
    padding:'51px',
}