import React, { Component } from 'react'
import ColorBox from "./ColorBox";
import "./Palette.css"
import Navbar from './Navbar'
 class Palette extends Component {
    constructor(props){
        super(props)
        this.state = {
             level: 500,
             format: "hex"
        };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
        }

    changeLevel(level) {
        this.setState({ level })
    }

    changeFormat(val){
        this.setState({format: val})
    }

    render() {
        const {colors} = this.props.palette;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name}/>
        ))
        return (
            <div className='Palette'>
                <Navbar level={level} handleChange={this.changeFormat}changeLevel={this.changeLevel} />
                {/* {navbar goes here} */}
                <div className='Palette-colors'>{colorBoxes}</div>
            </div>
        )
    }
}

export default Palette;