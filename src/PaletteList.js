import React, { Component } from 'react'
import { Link } from "react-router-dom"
import MiniPalette from "./MiniPalette"

export default class PaletteList extends Component {
    render() {
        const {palettes } = this.props;
        return (
            <div>
                <MiniPalette />
                <h1>REACT COLORS</h1>
                {palettes.map(palette => (
                    <p>
                        <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
                    </p>
                )
                )}
            </div>
        )
    }
}
