import React from 'react';
import AddVideo from './AddVideo';
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

        console.log("balls deep");
        
        return (

            <div>balls deep</div>    
         
        );
    }
}

// <Grid item xs={10} className='mainContent'>
                        
                //         {
                //         this.props.videoList.map(item => {
                //             return <div key={uuid.v4()} className='rudimentList'>
                //                         <strong className='rudiment' href='#' onClick={() => this.props.onAddToPlaylist(item)}>{item.rudiment}</strong>
                //                     </div>
                //         })
                //     }

                    
                // </Grid>




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

