import React from 'react';
import Grid from '@material-ui/core/Grid';

import '../styles/MusicDisp.css';

class MusicDisp extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            
                <Grid item xs={10} className='musicDisp'>
                        Music

                </Grid>
         
        );
    }
}



export default MusicDisp