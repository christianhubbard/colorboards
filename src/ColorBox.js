import React, { Component } from 'react'
import {CopyToClipboard } from 'react-copy-to-clipboard';
import "./ColorBox.css"
import chroma from 'chroma-js'

import {Link} from 'react-router-dom'

export default class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state ={ copied: false };
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState(){
        this.setState({copied: true}, () =>{
            setTimeout(() => this.setState({copied: false}), 1500)
        })
    }
    render() {
        const {name, background, paletteId, id, showLink} = this.props
        const {copied} = this.state;
        const isDarkColor = chroma(background).luminance() <= 0.08;
        const isLightColor = chroma(background).luminance() >= 0.62;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{background}} className='ColorBox'>
                    <div style={{background}} className={`copy-overlay ${copied && 'show'}`} />
                    <div className={`copy-msg ${copied && 'show'}`}>
                        <h1>Copied!</h1>
                        <p className={isLightColor && "dark-text"}>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className ="box-content">
                            <span className={isDarkColor && 'light-text'}>{name}</span>
                        </div>
                        <button className={`copy-button ${isLightColor && "dark-text"}`}>Copy</button>
                    </div>
                    {showLink && <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                        <span className={`see-more ${isLightColor && "dark-text"}`}>MORE</span>
                    </Link>}
                </div>
            </CopyToClipboard>
        );
    }
}
