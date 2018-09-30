import React from 'react';
import Grid from '@material-ui/core/Grid';


import '../styles/Sidebar.css';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            
        
                
                    <Grid item xs={2} className='sideBar'>
                        Balls Deep
                    </Grid>

                    
                    
            
        );
    }
}


export default Sidebar
