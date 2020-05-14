import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <p>Choose Alignment</p>

                <select className="alignment-Type" onChange={this.props.alignmentChange}>
                    <option value="" defaultValue>
                        All Alignments
                    </option>
                    <option value="1">Good</option>
                    <option value="2">Neutral</option>
                    <option value="3">Evil</option>
                </select>
            </div>
        )
    }
}
