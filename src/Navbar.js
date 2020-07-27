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

const styles = {
    Navbar: {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `flex-start`,
        height: `6vh`,
    },  
    logo: {
        marginRight: `15px`,
        padding: `0 13px`,
        fontSize: `22px`,
        backgroundColor: `#eceff1`,
        fontFamily: `Roboto`,
        height: `100%`,
        display: `flex`,
        alignItems: `center`,
        "& a": {
            textDecoration: `none`,
            color: `black`,
        }
    },
    slider: {
        width: `340px`,
        margin: `0 10px`,
        display: `inline-block`,
        "& .rc-slider-track": {
            backgroundColor: `transparent`,
        },
        "& .rc-slider-rail": {
            height: "8px"
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover" : {
            backgroundColor: `green`,
            outline: `none`,
            border: `2px solid green`,
            boxShadow: `none`,
            width: `13px`,
            height: `13px`,
            marginLeft: `-7px`,
            marginTop: `-3px`,
        }
    },
    selectContainer: {
        marginLeft: 'auto',
        marginRight: '1rem',
    }
};
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
