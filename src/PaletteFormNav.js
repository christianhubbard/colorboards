import React, { Component } from 'react'
import {Link} from "react-router-dom"
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {ChromePicker} from 'react-color'
import Button from '@material-ui/core/Button'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import DraggableColorList from "./DraggableColorList";
import {arrayMove} from "react-sortable-hoc"

 class PaletteFormNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            newPaletteName: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('PaletteNameUnique', value =>
        this.props.palettes.every(
          ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
        ));
    }
    handleChange(evt){
        this.setState({
          [evt.target.name]:evt.target.value
        })
    }
    render() {
        const {classes, open} = this.props;
        const {newPaletteName} = this.state;
        return (
            <div>
                <CssBaseline />
                <AppBar
                position='fixed'
                color='default'
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open
                })}
                >
                <Toolbar disableGutters={!open}>
                    <IconButton
                    color='inherit'
                    aria-label='Open drawer'
                    onClick={this.props.handleDrawerOpen}
                    className={classNames(classes.menuButton, open && classes.hide)}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' color='inherit' noWrap>
                    Persistent drawer
                    </Typography>
                    <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
                    <TextValidator 
                        name='newPaletteName'
                        value={this.state.newPaletteName} 
                        label="Palette Name" 
                        onChange={this.handleChange} 
                        validators={['required', "PaletteNameUnique"]}
                        errorMessages={['Enter Palette Name', "Name already used"]}
                    />
                    <Button variant='contained' color='primary' type='submit' >Save Palette</Button>
                    <Link to="/">
                        <Button variant='contained' color='secondary'>Go Back</Button>
                    </Link>
                    </ValidatorForm>
                </Toolbar>
                </AppBar>
            </div>
        )
    }
};

export default PaletteFormNav;
