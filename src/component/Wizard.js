import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',

        }
        this.baseState = this.state
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState( { [event.target.name]: event.target.value});
        console.log(this.state)
      }

    handleSubmit(){
        const {name, address, city, state, zip} = this.state;
        axios.post('/api/posthouse', {name, address, city, state, zip})   .then( () => {
            this.resetForm()
        });   
    }

    resetForm = () => this.setState(this.baseState)

    render() {
        return (
            <div>
            Wizard Page

            <Link to="/"><button type="button">Cancel</button></Link>

            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name='name' onChange={this.handleChange} />
                </label>

                <label>
                    Address:
                    <input type="text" name='address' onChange={this.handleChange} />
                </label>

                <label>
                    City:
                    <input type="text" name='city' onChange={this.handleChange} />
                </label>

                <label>
                    State:
                    <input type="text" name='State' onChange={this.handleChange} />
                </label>

                <label>
                    Zipcode:
                    <input type="text" name='Zipcode' onChange={this.handleChange} />
                </label>

                    <input type="submit" value="Complete" />
            </form>
           
            </div>
        )
    }
}   

export default Wizard