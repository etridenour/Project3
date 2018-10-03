import React from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import {deleteFromPlaylist, videoSend, clearPlaylist} from '../actions/index';

import uuid from 'uuid';


import '../styles/Sidebar.css';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    handleSavePlaylist(){
        fetch('/update', {
            method: 'POST', 
            body: JSON.stringify({
                data: this.props.playList
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }
    
    render() {
    
        var playListDisplay = [];
            if(this.props.playList !== undefined){
                if(this.props.playList.length > 0){
                    playListDisplay = this.props.playList.map(item => {
                        return  <div key={uuid.v4()}>
                                    <div className='playlistItem'>{item.rudiment}</div>

                                    <Button className='playButton'size='small' variant="contained"><Link className='playLink'onClick={() => this.props.onVideoSend(item)} to='/PVideoPlay'>Play</Link></Button>

                                    <Button size='small' variant="contained" color="secondary" onClick={() => this.props.onDeleteFromPlaylist(item)}>X</Button>
                                </div>
                        
                    })
                }
            }

        return (
            
        
                
                    <Grid item xs={2} className='sideBar'>
                    <h1>Playlist</h1>
                    
                       {playListDisplay}

                      
                       <Button size='small' variant="contained" onClick={this.handleSavePlaylist.bind(this)}>Save</Button>
                       <Button size='small' variant="contained" onClick={() => this.props.onClearPlaylist()}>Clear</Button>
                       
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
        onDeleteFromPlaylist: (item) => dispatch(deleteFromPlaylist(item)),
        onVideoSend: (video) => dispatch(videoSend(video)),
        onClearPlaylist: (items) => dispatch(clearPlaylist(items))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
