import React, {Component} from 'react';

class TaskItem extends Component{
    render(){
        const { picture } = this.props;
        // console.log(addData)
        return (
            <div className='mt-2 col-sm-6 col-md-4 col-lg-3'>
                <div className='card'>
                    <img className='card-img-top' alt="" src={`http://localhost:3000/${picture.image}`} height='100px' width='200px'/>
                    <div className='card-body'>
                    <h5>{ picture.title }</h5>
                    <p className='card-text'>{ picture.date}</p>
                    <p className='card-text'>{ picture.descript}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskItem;