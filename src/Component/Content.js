import React from 'react';

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

export default Content;
