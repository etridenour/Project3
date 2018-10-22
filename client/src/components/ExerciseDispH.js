
import React from 'react';
import uuid from 'uuid';
import Grid from '@material-ui/core/Grid';

import '../styles/ExerciseDispH.css';


class ExerciseDispH extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Grid item md={10} sm={9} xs={7} className='LandingH'>
                <Grid className='Landing1H'item xs={10}>

                    <h2 className='ex'>Exercises Coming Soon</h2>
                </Grid>
            </Grid>
        );
    }
}


export default ExerciseDispH


 {/* <div key={uuid.v4()} className='rudimentBox zoom' onClick={() => this.props.onAddToPlaylist(item)}>
                        <div className='rudimentName'>{item.rudiment}</div>
                        <img className='rudimentPic' src={image} />
                </div> */}
