import React from 'react';
import { connect } from 'react-redux';

import TaskItem from './TaskItem';
import * as action from '../appRedux/actions/index'
import callAPI from '../util/callAPI';

class Content extends React.Component{
    componentDidMount = async ()=>{
        const jwt = JSON.parse(localStorage.getItem('token'));
        const res = await callAPI('picture', 'GET', {}, {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json'
        });
        this.props.getPictureFromServer(res.data);
    }

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

const mapDispathToProps = (dispath) =>{
    return {
        getPictureFromServer: (pictures) => {
            dispath(action.listPictures(pictures));
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Content);
