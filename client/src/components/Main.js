import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import VideoDisp from './VideoDisp';
import PVideoPlay from './PVideoPlay';
import Landing from './Landing';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import {addToPlaylist, deleteFromPlaylist, dbFetch} from '../actions';

import '../styles/Main.css';


class Main extends Component {

  // constructor(props){
  //   super(props);
  // }

  componentWillMount() {
    fetch('/dbDrum', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }})
    .then(response => response.json())
    .then(response => {


      this.props.onFetch(response)
      return response;
    })
  }



  render() {
    return (
      <BrowserRouter>
      <div className="App">
     
        <Navbar />

        <Grid container spacing={0} className='mainGrid'>
                    
          <Sidebar />

          <Route exact path="/" component={Landing}/>
          <Route exact path="/AddVideo" component={VideoDisp}/>
          <Route exact path='/pvideoPlay' component={PVideoPlay}/>

        </Grid>
        
        
      </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state){
  return{
      playList: state.playList,
      videoList: state.videoList
  }
}

function mapDispatchToProps(dispatch){
  return{
      onAddToPlaylist: (item) => dispatch(addToPlaylist(item)),
      onDeleteFromPlaylist: (item) => dispatch(deleteFromPlaylist(item)),
      onFetch: (response) => dispatch(dbFetch(response))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
