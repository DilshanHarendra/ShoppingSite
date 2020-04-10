import React, { Component } from 'react'

export default class storemanagerview extends Component {
    render() {
        return (
            <div style={Styles.regTablePlanal}>
                 <h4 style={Styles.regHeadertext}>Register Store Manager</h4>
                
            </div>
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
    }
}