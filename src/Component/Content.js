import React from 'react';
import { connect } from 'react-redux';

import TaskItem from './TaskItem';
import * as action from '../appRedux/actions/index'
import callAPI from '../util/callAPI';

class Content extends React.Component{
    async componentDidMount(){
        const jwt = JSON.parse(localStorage.getItem('token'));
        const res = await callAPI('picture', 'GET', {}, {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json'
        });
        this.props.pictures(res.data);       
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
    console.log(state);
    return {
        a : state.pictures
    }
}

const mapDispathToProps = (dispath, props) =>{
    return {
        pictures: (picture) => {
            dispath(action.listPictures(picture));
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Content);
