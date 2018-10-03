import React from 'react';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {videoSend} from '../actions';

import '../styles/PVideoPlay.css';

class PVideoPlay extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        console.log(this.props.videoToPlay)
        return (
            <Grid item xs={10} className='PVideoPlay' id='video'>

            
                        
                <iframe className='video' width="854" height="480"src={this.props.videoToPlay.hyperlink}></iframe>

            </Grid>
        );
    }
}




function mapStateToProps(state){
    return{
        videoToPlay: state.videoToPlay
    }
}

function mapDispatchToProps(dispatch){

    return{
        onVideoSend: (video) => dispatch(videoSend(video))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PVideoPlay);
  
