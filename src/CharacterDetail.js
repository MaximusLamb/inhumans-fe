import React, { Component } from 'react'
import request from 'superagent';

export default class CharacterDetail extends Component {

    state = {
        inhumans: {}
    }

    async componentDidMount() {

        const data = await request.get('https://pure-ravine-74265.herokuapp.com/inhumans')

        this.setState({ inhumans: data.body })
    }


    render() {
        
        const {name, cool_factor, power} = this.state.inhumans

        return (
            <div>
                <section>
                    <ul>
        <h1>{name}</h1>
        <h1>{cool_factor}</h1>
        <h1>{power}</h1>
                    </ul>
                </section>
                
            </div>
        )
    }
}
