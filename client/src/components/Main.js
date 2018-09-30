import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Video from './Video';
import Grid from '@material-ui/core/Grid';

import '../styles/Main.css';


class Main extends Component {

  componentWillMount() {
    fetch('/test')
    .then(response => response.json())
    // .then(response => this.props.onFetch(response))
    .then(response => console.log(response))
  }
  render() {
    return (
      <div className="App">
        <Navbar />

        <Grid container className='mainGrid'>
                    
          <Sidebar />

          <Grid item xs={1}></Grid>

          <Video />

        </Grid>
        
      </div>
    );
  }
}

export default Main;
