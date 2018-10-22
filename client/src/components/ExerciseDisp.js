
import React from 'react';
import uuid from 'uuid';
import Grid from '@material-ui/core/Grid';


class ExerciseDisp extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Grid item md={10} sm={9} xs={7} className='Landing'>
                <Grid className='Landing1'item xs={10}>

                    <h2>Exercises</h2>
                </Grid>
            </Grid>
        );
    }
}


ExerciseDisp.propTypes = {
    
};

export default ExerciseDisp

{/* <div key={uuid.v4()} className='rudimentBox zoom' onClick={() => this.props.onAddToPlaylist(item)}>
                        <div className='rudimentName'>{item.rudiment}</div>
                        <img className='rudimentPic' src={image} />
                </div> */}
