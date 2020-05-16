import React, { Component } from 'react'
import Chart from 'chart.js'
import Axios from 'axios'

export default class stormanagerchart extends Component {
    constructor(props){
        super(props)
        this.state={
            storemanagerData:[],
        }
        
    }

    componentDidMount(){
        this.loadStoreManagerData()
         
        
    }
    loadStoreManagerData(){
        Axios.get('http://localhost:3001/storeManager/')
        .then(ressopns=>{
            console.log(ressopns);
            this.setState({storemanagerData:ressopns.data})
            this.chartGenerate()
            console.log(ressopns.data);
            
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
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                 backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235,1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255,1)',
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
                <canvas id="myChart" width="400" height="400"></canvas>
            </div>
        )
    }
}


const chartStyle={
    padding:'51px',
}