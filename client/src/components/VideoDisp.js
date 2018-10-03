import React from 'react';
import Grid from '@material-ui/core/Grid';
import uuid from 'uuid';
import {addToPlaylist, dbFetch} from '../actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import '../styles/VideoDisp.css';

class VideoDisp extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {

        
        return (

            <Grid item xs={10} className='mainBox'>
            <Grid item xs={6} className='rudimentContent'>
                        
            {
            this.props.videoList.map(item => {
                return <div key={uuid.v4()} className='rudimentBox zoom' onClick={() => this.props.onAddToPlaylist(item)}>
                            <div className='rudimentName'>{item.rudiment}</div>
                        </div>
                })
            }

            </Grid>
            </Grid> 
         
        );
    }
}






function mapStateToProps(state){
    return{
        videoList: state.videoList,
        playList: state.playList
    }
}

function mapDispatchToProps(dispatch){

    return{
        onAddToPlaylist: (item) => dispatch(addToPlaylist(item)),
        onFetch: (response) => dispatch(dbFetch(response))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoDisp));

