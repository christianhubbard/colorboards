import React, { Component } from 'react'
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Snackbar from "@material-ui/core/Snackbar"
import CloseIcon from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton"
import Slider from "rc-slider";
import { Link } from "react-router-dom"
import 'rc-slider/assets/index.css';
import './Navbar.css'

import {withStyles} from '@material-ui/styles';
import styles from './styles/NavbarStyles';

 class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = { format: "hex",
                        open: false,
                    }
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleFormatChange(e){
        this.setState({format: e.target.value, open: true })
        this.props.handleChange(e.target.value);

    }

    closeSnackbar(){
        this.setState({open:false})
    }
    render() {
        const {level, changeLevel, classes } = this.props
        const {format, open} = this.state;
        return (
            <header className={classes.Navbar}>
                <Link className={classes.logo} to ='/'>
                    reactcolorpicker
                </Link>
                {this.props.showSlider && 
                    <div>
                    <span>Level: {level}</span>
                    <div className={classes.slider}>
                        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel}/>
                    </div>
                    </div>
                }
                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value='hex'> HEX - #fffff</MenuItem>
                        <MenuItem value='rgb'> RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value='rgba'> RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                anchorOrigin={{vertical: "bottom", horizontal:"left"}} 
                open={open} autoHideDuration={3000} 
                message={<span id="message-id"> Format Changed To {format.toUpperCase()}</span>} 
                ContentProps={{"aria-describedby": "message-id"}}
                onClose={this.closeSnackbar}
                action={[
                    <IconButton onClick={this.closeSnackbar} color='inherit' key='close' aria-label='close' >
                        <CloseIcon />
                    </IconButton>
                ]} 
                />
            </header >
        )
    }
}


export default withStyles(styles)(Navbar);
