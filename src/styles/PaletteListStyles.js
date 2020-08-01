import sizes from './sizes'
import bg from './bg.svg'

export default {
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
        overflow: `scroll`,
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
        boxSizing: 'broder-box',
        width: '100%',
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