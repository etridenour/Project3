import React from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {Link} from 'react-router-dom';
import {deleteFromPlaylist, videoSend, clearPlaylist} from '../actions/index';

import uuid from 'uuid';


import '../styles/SidebarH.css';

class SidebarH extends React.Component {
    constructor(props) {
        super(props);
        
    }

    handleSavePlaylist(){
        alert('Play List Saved')
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
                                    <div className='playlistItem'>
                                        <div>{item.rudiment}</div>

                                        <Button className='playButton'size='small' onClick={() => this.props.onVideoSend(item)} variant="contained"><Link className='playLink' to='/PVideoPlay'>Play</Link></Button>

                                        {/* <DeleteForeverIcon className='playButton' /> */}
                                        <Button className='deleteButton'  variant="contained" color="secondary" onClick={() => this.props.onDeleteFromPlaylist(item)}>X</Button>
                                    </div>
                                </div>
                        
                    })
                }
            }

        return (
            
        
                
                    <Grid item xs={5} sm={3} md={2} l={2}  className='sideBarH'>

                    <div className='user'>
                        <Avatar className='avatarH'>ER</Avatar>
                        <div className='userName'>Eric Ridenour</div>
                    </div>
                    <hr></hr>
                
                    <div className='playListTitle'>
                        <h2>Playlist</h2>
                        <Button className='playListTitleButton' size='small' variant="contained" onClick={this.handleSavePlaylist.bind(this)}>Save</Button>
                        <Button className='playListTitleButton' size='small' variant="contained"  onClick={() => this.props.onClearPlaylist()}>Clear</Button>
                        
                    </div>
                        <Grid className='playListContainer'item xs={9}>
                            {playListDisplay}
                        </Grid>

                    
                       
                    
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

export default connect(mapStateToProps, mapDispatchToProps)(SidebarH);
