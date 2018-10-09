import React, { Component } from 'react';
import Navbar from './Navbar';
import NavbarH from './NavbarH';
import Sidebar from './Sidebar';
import SidebarH from './SidebarH';
import VideoDisp from './VideoDisp';
import VideoDispH from './VideoDispH';
import ExerciseDisp from './ExerciseDisp';
import ExerciseDispH from './ExerciseDispH';
import PVideoPlay from './PVideoPlay';
import PVideoPlayH from './PVideoPlayH';
import Landing from './Landing';
import LandingH from './LandingH';
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
    fetch('https://chopbuilder.herokuapp.com/dbDrum', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }})
    .then(response => response.json())
    .then(response => {
      console.log(response)
      this.props.onFetch(response)
    })
    .then(response => console.log(response))
  }



  render() {
    var navbar;
    var sidebar;
    var landing;
    var videoDisp;
    var pvideoPlay;
    var exerciseDisp;
    switch(this.props.theme){
      case 'heaven':
        navbar = <Navbar />
        sidebar = <Sidebar />
        landing = Landing
        videoDisp = VideoDisp
        pvideoPlay = PVideoPlay
        exerciseDisp = ExerciseDisp
        break;

      case 'hell':
        navbar = <NavbarH />
        sidebar = <SidebarH />
        landing = LandingH
        videoDisp = VideoDispH
        pvideoPlay = PVideoPlayH
        exerciseDisp = ExerciseDispH
        break;

      default:
        navbar = <Navbar />
        sidebar = <Sidebar />
        landing = Landing
        videoDisp = VideoDisp
        pvideoPlay = PVideoPlay
        exerciseDisp = ExerciseDisp
        break;
    }

    return (
      <BrowserRouter>
      <div className="App">
      {console.log(sidebar)}
     
        {navbar}

        <Grid container spacing={0} className='mainGrid'>
                    
        {sidebar}

            <Route exact path="/" component={landing}/>
            <Route exact path="/AddVideo" component={videoDisp}/>
            <Route exact path='/pvideoPlay' component={pvideoPlay}/>
            <Route exact path='/AddExercise' component={exerciseDisp}/>
       
        </Grid>
        
        
      </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state){
  return{
      playList: state.playList,
      videoList: state.videoList,
      theme: state.theme
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
