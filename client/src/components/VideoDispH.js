import React from 'react';
import Grid from '@material-ui/core/Grid';
import uuid from 'uuid';
import {addToPlaylist, dbFetch} from '../actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import accenttap from '../img/accenttap.png';
import bookmark from '../img/bookmark.png';
import bookreport from '../img/bookreport.png';
import cheese from '../img/cheese.png';
import cheesepatty from '../img/cheesepatty.png';
import double from '../img/double.png';
import doublep from '../img/doublep.png';
import drag from '../img/drag.png';
import flam from '../img/flam.png';
import flam5 from '../img/flam5.png';
import flamaccent from '../img/flamaccent.png';
import flamdrag from '../img/flamdrag.png';
import flamtap from '../img/flamtap.png';
import invert from '../img/invert.png';
import para from '../img/para.png';
import paradd from '../img/paradd.png';
import patty from '../img/patty.png';
import single from '../img/single.png';
import swiss from '../img/swiss.png';
import tpara from '../img/tpara.png';
import triple from '../img/triple.png';

import '../styles/VideoDispH.css';

class VideoDispH extends React.Component {
    constructor(props) {
        super(props);
        
    }
    

    render() {

        
        return (

            <Grid item md={10} sm={9} xs={7} className='mainBoxH'>

            <h2 className='pageTitleH'>Click to add to playlist</h2>
        
            <Grid item xs={12} className='rudimentContentH'>
                        
            
            { this.props.videoList ? 
            this.props.videoList.map(item => {
                var image = ''
                switch(item.reference){
                    case 'flamdrag':
                        image = flamdrag
                        break;
                    case 'accenttap':
                        image = accenttap 
                        break;
                    case 'bookmark':
                        image = bookmark
                        break;
                    case 'bookreport':
                        image = bookreport
                        break;
                    case 'cheese':
                        image = cheese
                        break;
                    case 'cheesepatty':
                        image = cheesepatty
                        break;
                    case 'double':
                        image = double 
                        break;
                    case 'doublep':
                        image = doublep 
                        break;
                    case 'drag':
                        image = drag
                        break;
                    case 'flam':
                        image = flam
                        break;
                    case 'flam5':
                        image = flam5
                        break;
                    case 'flamaccent':
                        image = flamaccent 
                        break;
                    case 'flamdrag':
                        image = flamdrag 
                        break;
                    case 'flamtap':
                        image = flamtap
                        break;
                    case 'invert':
                        image = invert
                        break;
                    case 'para':
                        image = para
                        break;
                    case 'paradd':
                        image = paradd
                        break;
                    case 'patty':
                        image = patty
                        break;
                    case 'single':
                        image = single
                        break; 
                    case 'swiss':
                        image = swiss
                        break; 
                    case 'tpara':
                        image = tpara
                        break;
                    case 'triple':
                        image = triple
                        break; 
                }
                return <div key={uuid.v4()} className='rudimentBoxH zoomH' onClick={() => this.props.onAddToPlaylist(item)}>
                            <div className='rudimentNameH'>{item.rudiment}</div>
                            <img className='rudimentPicH' src={image} />
                        </div>
                })
                : <h2 className='pageTitleH'>(server may take a second)</h2>}
            }



            </Grid>
          
            </Grid> 
            
         
        );
    }
}






function mapStateToProps(state){
    return{
        videoList: state.videoList,
        playList: state.playList
    }
}

function mapDispatchToProps(dispatch){

    return{
        onAddToPlaylist: (item) => dispatch(addToPlaylist(item)),
        onFetch: (response) => dispatch(dbFetch(response))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoDispH));

