import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Picker} from "emoji-mart";
import 'emoji-mart/css/emoji-mart.css'

export default class paletteMetaForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            stage: "form",
            newPaletteName: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.showEmojiPicker = this.showEmojiPicker.bind(this);
        this.savePalette = this.savePalette.bind(this);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('PaletteNameUnique', value =>
        this.props.palettes.every(
          ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
        ));
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange(evt){
        this.setState({
          [evt.target.name]:evt.target.value
        })
    }
    showEmojiPicker(){
        this.setState({stage: 'emoji'})
    }

    savePalette(emoji){
        const newPalette = {paletteName: this.state.newPaletteName, emoji: emoji.native}
        this.props.handleSubmit(newPalette);
        this.setState({stage:''})
    }

    render() {
        const {newPaletteName, stage} = this.state;
        const {hideForm} = this.props;
        
        return (
            <div>
                <Dialog open={stage === 'emoji'} onClose={hideForm}>
                    <DialogTitle id='form-dialog-title'>Choose A ColorBoard Emoji</DialogTitle>
                    <Picker title='Pick a Board Emoji' onSelect={this.savePalette}/>
                </Dialog>
                <Dialog
                    open={stage === 'form'}
                    aria-labelledby='form-dialog-title'
                    onClose={hideForm}
                    >
                        <DialogTitle id='form-dialog-title'>Choose A ColorBoard Name</DialogTitle>
                        <ValidatorForm onSubmit={this.showEmojiPicker}>
                        <DialogContent>
                            <DialogContentText>
                                Please enter a name for your awesome new ColorBoard. Make sure it's unique!
                            </DialogContentText>


                        <TextValidator 
                            name='newPaletteName'
                            value={newPaletteName} 
                            label="ColorBoard Name" 
                            fullWidth
                            margin='normal'
                            onChange={this.handleChange} 
                            validators={['required', "PaletteNameUnique"]}
                            errorMessages={['Enter Board Name', "Name already used"]}
                        />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={hideForm}>Cancel</Button>
                            <Button variant='contained' color='primary' type='submit' >Save Board</Button>
                        </DialogActions>
                        </ValidatorForm>
                </Dialog>
            </div>
        )
    }
}
