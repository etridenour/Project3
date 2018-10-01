import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import VideoDisp from './VideoDisp';
import MusicDisp from './MusicDisp';
import Landing from './Landing';
import Grid from '@material-ui/core/Grid';
import uuid from 'uuid';
import AddVideo from './AddVideo';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';

import {addToPlaylist, deleteFromPlaylist, dbFetch, dbUpdate} from '../actions';

import '../styles/Main.css';


class Main extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount() {
    var dbArray = [];
    fetch('/test', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }})
    .then(response => response.json())
    .then(response => {
      dbArray = response.data.fulfillmentValue.map(item => {
        item[uuid] = uuid.v4();
        return item
      })
      ///map thruug and create another array
      //index
      // index[id] = uuid.v4();
      // return index
      this.props.onFetch(response)
      return response;
    })
    .then(response => console.log(response))
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <Grid container spacing={0} className='mainGrid'>
                    
          <Sidebar />

          <Route exact path="/" component={Landing}/>
          <Route exact path="/AddVideo" component={VideoDisp}/>

        </Grid>
        
      </div>
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
