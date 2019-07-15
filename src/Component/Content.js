import React from 'react';
import { connect } from 'react-redux';

import TaskItem from './TaskItem';

class Content extends React.Component{

    render(){
        let { pictures } = this.props;
        let elmItem = pictures.map(
            (picture, index)=>{
                return (
                  <TaskItem key={index} picture= { picture } />
            )}
        );

        return (
            <div className='row'>
                <div className={`row`}>
                    { elmItem }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        pictures : state.pictures
    }
}

export default connect(mapStateToProps, null)(Content);
