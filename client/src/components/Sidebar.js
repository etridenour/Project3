import React from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import greenp from '../img/green.png';
import clear from '../img/clearw.svg';
import save from '../img/savew.svg';
import {Link} from 'react-router-dom';
import {deleteFromPlaylist, videoSend, clearPlaylist} from '../actions/index';

import uuid from 'uuid';


import '../styles/Sidebar.css';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    handleSavePlaylist(){
        alert('Playlist Saved')
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
                                    <div className='playlistItem'>
                                        <div>{item.rudiment}</div>

                                        <Link className='playLink' to='/PVideoPlay'><img color='secondary'src={greenp} className='playButton'size='small' onClick={() => this.props.onVideoSend(item)} variant="contained"></img></Link>

                                        <DeleteForeverIcon className='deleteButton' color="secondary" onClick={() => this.props.onDeleteFromPlaylist(item)} />
                                    </div>
                                </div>
                        
                    })
                }
            }

        return (
            
        
                
                    <Grid item  xs={5} sm={3} md={2} l={2} className='sideBar'>

                    <div className='user'>
                        <Avatar className='avatar'>ER</Avatar>
                        <div className='userName'>Eric Ridenour</div>
                    </div>
                    <hr></hr>
                
                    <div className='playListTitle'>
                        <h2>Playlist</h2>
                        <img src={save} className='playListTitleButton zoom'  onClick={this.handleSavePlaylist.bind(this)}></img>
                        <img src={clear} className='playListTitleButton zoom'   onClick={() => this.props.onClearPlaylist()}></img>
                        
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
