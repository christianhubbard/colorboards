import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export default class paletteMetaForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            newPaletteName: '',
        }
        this.handleChange = this.handleChange.bind(this);
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

    render() {
        const {newPaletteName, open} = this.state;
        return (
            <div>
                <Button
                    variant='outlined'
                    color='primary'
                    onClick={this.handleClickOpen}
                    >
                        Open form dialog
                    </Button>
                    <Dialog
                        open={open}
                        onClose={this.handleClose}
                        aria-labelledby='form-dialog-title'
                        >
                            <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
                            <DialogContent>
                            <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
                            <TextValidator 
                                name='newPaletteName'
                                value={newPaletteName} 
                                label="Palette Name" 
                                onChange={this.handleChange} 
                                validators={['required', "PaletteNameUnique"]}
                                errorMessages={['Enter Palette Name', "Name already used"]}
                            />
                            <Button variant='contained' color='primary' type='submit' >Save Palette</Button>
                        </ValidatorForm>
                            </DialogContent>
                    </Dialog>
            </div>
        )
    }
}
