import React from 'react';
import Grid from '@material-ui/core/Grid';
import good from '../img/good.png';

import '../styles/Landing.css';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Grid item xs={10} className='Landing'>
                <Grid className='Landing1'item xs={10}>
                            
                    <h1 className='shredTitle'>Chop Builder</h1>

                    <img className='sticks'src={good}/>
                    <br></br>
                    

                    <h2>Rudimental drumming chop builder</h2>
                    <h3>Add items to the playlist and start chopping out!</h3>
                </Grid>
            </Grid>
        );
    }
}


export default Landing
