import React from 'react'
import './Palette.css'

import styles from './styles/FooterStyles'
import {withStyles} from '@material-ui/styles';


function PaletteFooter(props) {
    const {paletteName, emoji, classes} = props;
    return (
        <footer className={classes.PaletteFooter}>
            {paletteName}
            <span className={classes.emoji}>{emoji}</span>    
        </footer>
    )
}

export default withStyles(styles)(PaletteFooter);
