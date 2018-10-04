import React from 'react';
import Grid from '@material-ui/core/Grid';
import bad from '../img/bad.png';

import '../styles/LandingH.css';

class LandingH extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Grid item md={10} sm={9} xs={7} className='LandingH'>
                <Grid className='Landing1H'item xs={10}>
                            
                    <h1 className='shredTitleH'>Chop Shredder</h1>

                    <img className='sticksH'src={bad}/>
                   

                    <h2 className='whiteText'>Rudimental drumming chop builder</h2>
                    <h3 className='whiteText'>Add items to the playlist and get shredding!</h3>
                </Grid>
            </Grid>
        );
    }
}


export default LandingH
