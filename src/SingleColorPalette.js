import React, { Component } from 'react'
import ColorBox from './ColorBox'
import NavBar from "./Navbar"
import './Palette.css'

export default class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = {format: 'hex'};

        this.changeFormat = this.changeFormat.bind(this);
    }
    gatherShades(palette, colorToFilterBy){
        //return all shades of given color
        let shades = []
        let allColors = palette.colors;
        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }


        return shades.slice(1);
    };
    changeFormat(val){
        this.setState({format: val})
    };
    render() {
        const {format} = this.state;
        const colorBoxes = this._shades.map( color => (
            <ColorBox 
            key={color.id} 
            name={color.name} 
            background={color[format]}
            showLink={false} />
        ));
        console.log(this._shades)
        return (
            <div className='Palette'>
                <NavBar handleChange={this.changeFormat} />
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
            </div>
        )
    }
}
