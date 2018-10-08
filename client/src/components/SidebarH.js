import React from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import green from '../img/green.png';
import cw from '../img/cw.svg';
import sw from '../img/sw.svg';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
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
        fetch('https://chopbuilder.herokuapp.com/update', {
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
                                    <div className='playlistItemH'>
                                        <div>{item.rudiment}</div>

                                        <Link className='playLinkH' to='/PVideoPlay'><img color='secondary'src={green} className='playButtonH'size='small' onClick={() => this.props.onVideoSend(item)} variant="contained"></img></Link>

                                        <DeleteForeverIcon className='deleteButtonH' color="secondary" onClick={() => this.props.onDeleteFromPlaylist(item)} />
                                    </div>
                                </div>
                        
                    })
                }
            }

        return (
            
        
                
                    <Grid item xs={5} sm={3} md={2} l={2}  className='sideBarH'>

                    <div className='userH'>
                        <Avatar className='avatarH'>ER</Avatar>
                        <div className='userNameH'>Eric Ridenour</div>
                    </div>
                    <hr></hr>
                
                    <div className='playListTitleH'>
                        <h2>Playlist</h2>
                        <img src={sw} className='playListTitleButtonH zoomH'  onClick={this.handleSavePlaylist.bind(this)}></img>
                        <img src={cw} className='playListTitleButtonH zoomH'   onClick={() => this.props.onClearPlaylist()}></img>
                        
                    </div>
                        <Grid className='playListContainerH'item xs={9}>
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
