import React, { Component } from 'react'
import request from 'superagent';


export default class AdminPage extends Component {

    state = {
            name: '',
            cool_factor: 0,
            power: '',
            is_royal: false,
            alignment_id: ''
    }
    
    handleSubmit = async(e) => {

        const { name, cool_factor, power, is_royal, alignment } = this.state;

        e.preventDefault();
        // do edits for post request
         await request.post('http://localhost:3001/create', {
            name: name,
            cool_factor: cool_factor,
            power: power,
            owner_id: 1,
            is_royal: is_royal,
            alignment: alignment
        })
        
    }
    
    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
        
    }
    
    handlePowerChange = (e) => {
        this.setState({ power: e.target.value });
        
    }
    
    handleCoolFactorChange = (e) => {
        this.setState({ cool_factor: e.target.value });
        
    }

    handleRadioChange = (e) => {
        this.setState({ is_royal: e.target.value })
    }

    handleAlignmentChange = (e) => {
        this.setState({ alignment_id: e.target.value})
    }
    
    render() {
       const { name, cool_factor, power, alignment_id } = this.state;
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
        <h1>NEW INHUMAN</h1>
        <label>NAME
        <input onChange={this.handleNameChange} name='name' value={name}></input>
        </label>
        
                        <label>POWER
                            <input onChange={this.handlePowerChange} name='power' value={power}></input>
                        </label>

                        <label>COOL FACTOR
                            <input onChange={this.handleCoolFactorChange} name='cool_factor' value={cool_factor} type="number"></input>
                        </label>

                        <label>ALIGNMENT
                            <input onChange={this.handleAlignmentChange} name='alignment_id' value={alignment_id}></input>
                        </label>

                        <label>IS ROYAL
                            <input onChange={this.handleRadioChange} type="radio" value='true' name="is_royal"></input>
                        </label>
                        <label>IS NOT ROYAL
                            <input onChange={this.handleRadioChange} type="radio" value='false' name="is_royal"></input>
                        </label>
                    <button onSubmit={this.handleSubmit}>Create</button>
                </form>
                

                
            </div>
        )
    }
}
