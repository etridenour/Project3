
import React from 'react';
import PropTypes from 'prop-types';

class ExerciseDisp extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div key={uuid.v4()} className='rudimentBox zoom' onClick={() => this.props.onAddToPlaylist(item)}>
                    <div className='rudimentName'>{item.rudiment}</div>
                    <img className='rudimentPic' src={image} />
            </div>
        );
    }
}


ExerciseDisp.propTypes = {
    
};

export default ExerciseDisp
