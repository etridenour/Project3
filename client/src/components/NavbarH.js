import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {Link} from 'react-router-dom';
import {changeTheme} from '../actions';
import {connect} from 'react-redux';


import '../styles/NavbarH.css';


class NavbarH extends React.Component {
    constructor(props) {
        super(props);
        
    }
  

    render() {
        return (
            <div className='root'>
                <AppBar position="static" className='appBar'>
                    <Toolbar className='navH'>
                    <FormControlLabel
                        control={
                            <Switch
                            onChange={() => this.props.onThemeChange()}
                            color="white"
                            value="dynamic-class-name"
                            checked={true}
                            />
                        }
                        />
            
                    <Button className='rudButton'><Link className='noUnderline' to="/AddVideo">Rudiments</Link></Button>
                    
                    <Typography variant="title" color="inherit"><Link className='shredH' to="/">Chop Shredder</Link></Typography>
                    <Button className='exButton'>Exercises</Button>
                    
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        theme: state.theme
    }
}

function mapDispatchToProps(dispatch){

    return{
        onThemeChange: (theme) => dispatch(changeTheme(theme))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarH);

