import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../styles/Navbar.css';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className='root'>
                <AppBar position="static" className='appBar'>
                    <Toolbar>
                    <Typography variant="title" color="inherit">
                        App Logo
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}



export default Navbar


