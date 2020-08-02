import sizes from './sizes'
import bg from './bg.svg'

export default {
    "@global": {
        ".fade-exit":{
            opacity: 1,
        },
        ".fade-exit-active":{
            opacity: 0,
            transition: 'opacity 500ms ease-out'
        },
    },
    root: {
        height: "100vh",
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: `#240340`,
        backgroundImage: `url(${bg})`,
        backgroundAttachment: `fixed`,
        backgroundSize: `cover`,
        /* background by SVGBackgrounds.com */
        overflowY: `auto`,
    },
    heading: {
        fontSize: '2rem',
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        [sizes.down('xl')] : {
            width: '50%'
        },
        [sizes.down('lg')] : {
            width: '80%'
        },
        [sizes.down('xs')] : {
            width: '75%'
        }
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white',
        alignItems:'center',
        "& a": {
            color:'white',
        },
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        justifyContent: 'space-between',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '1.5rem',
        [sizes.down('md')] : {
            gridTemplateColumns: 'repeat(2, 50%)'
        },
        [sizes.down('xs')] : {
            gridTemplateColumns: 'repeat(1, 100%)',
            gridGap: '1rem',
        },
    }
};