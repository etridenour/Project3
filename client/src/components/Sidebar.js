import React from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import {deleteFromPlaylist} from '../actions/index';

import uuid from 'uuid';


import '../styles/Sidebar.css';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
    
        var playListDisplay = [];
            if(this.props.playList !== undefined){
                if(this.props.playList.length > 0){
                    playListDisplay = this.props.playList.map(item => {
                        return  <div key={uuid.v4()}>
                                    <div className='playlistItem' href='#' onClick={() => console.log('playlist click')}>{item.rudiment}</div>
                                    <Button size='small' variant="contained" color="secondary" onClick={() => this.props.onDeleteFromPlaylist(item)}>X</Button>
                                </div>
                    })
                }
            }

        return (
            
        
                
                    <Grid item xs={2} className='sideBar'>
                       {playListDisplay}
                    </Grid>

                    
                    
            
        );
    }
}


function mapStateToProps(state){
    return{
        playList: state.playList
    }
}

function mapDispatchToProps(dispatch){
    return{
        onDeleteFromPlaylist: (item) => dispatch(deleteFromPlaylist(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
