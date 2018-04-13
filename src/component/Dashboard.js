import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import House from './House'

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            houseList: []
        }
    }

    componentDidMount() {
        axios.get( '/api/houses' )
        .then( res => {
            this.setState({
                houseList: res.data
            })
        })
    }

    render() {
        console.log(this.state)
        let mappedHouses = this.state.houseList.map( ( house, i ) => {
            return (
                <House house={house}  key={i} />             
            )
        })

        return (
            <div className="dash-container">
               Dashboard
               <Link to="/wizard">
                <button type="button">Add New Property</button>
                </Link>
            {mappedHouses}
            </div>
        )
    }
}   

export default Dashboard