import React, { Component } from 'react'
import ColorBox from "./ColorBox";
import "./Palette.css"
import Navbar from './Navbar'
 class Palette extends Component {
    constructor(props){
        super(props)
        this.state = {
             level: 500,
        };
        this.changeLevel = this.changeLevel.bind(this);
        }

    changeLevel(level) {
        this.setState({ level })
    }

    render() {
        const {colors} = this.props.palette;
        const {level} = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name}/>
        ))
        return (
            <div className='Palette'>
                <Navbar level={level} changeLevel={this.changeLevel} />
                {/* {navbar goes here} */}
                <div className='Palette-colors'>{colorBoxes}</div>
            </div>
        )
    }
}

export default Palette;