import React from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {addToPlaylist, dbFetch} from '../actions';
import uuid from 'uuid';
import '../styles/AddVideo.css';

class AddVideo extends React.Component {
    constructor(props) {
        super(props);
        
    }
    

    render() {
        return (
            <div>
                 <Grid>
                    
                    {
                        this.props.videoList.map(item => {
                            return <div key={uuid.v4()} className='rudimentList'>
                                        <strong className='rudiment' href='#' onClick={() => this.props.onAddToPlaylist(item)}>{item.rudiment}</strong>
                                    </div>
                        })
                    }
                </Grid>

            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddVideo);

