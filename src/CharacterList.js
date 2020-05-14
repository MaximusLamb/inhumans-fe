import React, { Component } from 'react'
import request from 'superagent';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown.js';

export default class CharacterList extends Component {

    
    state = {
        inhumans: [],
        selected: '',
        data: [{}]
    }
    
    async componentDidMount() {
        
        // const data = await request.get('https://pure-ravine-74265.herokuapp.com/inhumans')
        const data = await request.get('http://localhost:3001/inhumans')
        this.setState({ inhumans: data.body })
       
    }

    handleAlignmentChange = async (event) => {

        this.setState({ selected: event.target.value })
    
        const fetchedData = await request.get(`http://localhost:3001/alignments/${event.target.value}`);
      
        this.setState({ inhumans: fetchedData.body });

      }
    
    
      render() {
        
        return (
            <section>

                <Dropdown alignmentChange={this.handleAlignmentChange}/>
               

                <ul>
                    {
                    
                        this.state.inhumans.map(single => {
                            
                            return (<li>   
                         <Link to={`/inhumans/${single.id}`}>
                                
                            <h1>{single.name}</h1>
                            <h1>{single.cool_factor}</h1>
                            <h1>{single.power}</h1>
                            <h1>{single.alignment}</h1>
                            <h1>{single.is_royal
                                ? 'They are Part of the Royal Family'
                                : 'They are not Part of the Royal Family'}</h1>
                        </Link>
                        
                 </li>)      
                        })
                        
                        
                    }  
                
            </ul>
            </section>)
    }

}
