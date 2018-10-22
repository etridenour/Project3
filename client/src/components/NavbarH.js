import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
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
                        <div className='largeParentH'>
                            <div className='switchH'>
                                <FormControlLabel
                                    control={
                                        <Switch
                                        className='inSwitchH'
                                        checked='true'
                                        onChange={() => this.props.onThemeChange()}
                                        color="primary"
                                        value="dynamic-class-name"
                                        />
                                    }/>
                                <FormHelperText className='mode'>Build Mode</FormHelperText>
                            </div>
                            <div className='smallParentH'>
                                <Link className='rudButtonH' to="/AddVideo"><Button className='rudButtonTH'>Rudiments</Button></Link>
                                <Typography variant="title" color="inherit"><Link className='shredH' to="/">Chop Builder</Link></Typography>
                                <Link className='exButtonH' to="/AddExercise"><Button className='exButtonTH'>Exercises</Button></Link>
                            </div>
                        </div>
                    
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

