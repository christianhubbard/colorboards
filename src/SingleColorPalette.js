import React, { Component } from 'react'
import NavBar from "./Navbar"

export default class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
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
    }
    render() {
        return (
            <div>
                <NavBar />
                <h1>Single Color Palette </h1>
            </div>
        )
    }
}
