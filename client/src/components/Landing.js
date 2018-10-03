import React from 'react';
import Grid from '@material-ui/core/Grid';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Grid item xs={10} className='mainContent'>
                        
            <h1>Chop Shredder</h1>

            </Grid>
        );
    }
}


export default Landing
