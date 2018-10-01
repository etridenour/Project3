import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

import '../styles/Navbar.css';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className='root'>
                <AppBar position="static" className='appBar'>
                    <Toolbar className='nav'>
                    <Button><Link to="/AddVideo">Add To Playlist</Link></Button>
                    <Button>Exercises</Button>
                    <Typography variant="title" color="inherit">
                        Shred
                        
                    </Typography>
                    <Button>Video Player</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}




export default Navbar

