import React, { Component } from 'react'

export default class ColorBox extends Component {
    render() {
        return (
            <div style={{background: this.props.background}}>
                <span>MORE</span>
            </div>
        )
    }
}
