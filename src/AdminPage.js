import React, { Component } from 'react'
import request from 'superagent';


export default class AdminPage extends Component {

    state = {
        form: {
            name: '',
            cool_factor: 0,
            power: '',
            is_royal: false
        }
    }
    render() {

        handleSubmit = (e) => {
            e.preventDefault();
            const newInhuman= await request.post('http://localhost:3000/inhumans', {
                name:
                cool_factor,
                power,
                is_royal
            })

        }

        handleNameChange = (e) => {
            this.setState({ form: { name: e.target.value }});

        }

        handlePowerChange = (e) => {
            this.setState({ form: { power: e.target.value }});
            
        }

        handleCoolFactorChange = (e) => {
            this.setState({ form: { cool_factor: e.target.value }});
            
        }


        { name, cool_factor, power, is_royal } = this.state.form;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>NEW INHUMAN</h1>
                        <label>NAME
                            <input onChange={this.handleNameChange} name="{name}"></input>
                        </label>

                        <label>POWER
                            <input onChange={this.handlePowerChange} name="{power}"></input>
                        </label>

                        <label>COOL FACTOR
                            <input onChange={this.handleCoolFactorChange} name="{cool_factor}" type="number"></input>
                        </label>

                        <label>IS ROYAL
                            <input checked={{is_royal} === 'true'} type="radio" name="{is_royal}" value="true"> </input>
                        </label>

                        <label>ISN'T ROYAL
                            <input checked={{is_royal} === 'false'} type="radio" name="{is_royal}" value="false"></input>
                        </label>
                    <button>Create</button>
                </form>
                

                
            </div>
        )
    }
}
