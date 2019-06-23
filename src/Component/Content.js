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
        
        const style = this.props.isClicked? 'col-8 ' : 'col-12'

        return (
            <div className='row'>
                <div className='col-4'>
                    { this.props.form }
                </div>
                <div className={`row ${style}`}>
                    { elmItem }
                </div>
            </div>
        )
    }
}

export default Content;
