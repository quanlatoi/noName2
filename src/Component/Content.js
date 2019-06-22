import React from 'react';
import Axios from 'axios';

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            picture: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        Axios.get(`http://localhost:3000/picture`)
        .then((res)=>{
            const picture =  res.data;
            this.setState({ picture });
        })
    }

    render(){
        let list = this.state.picture.map(
            (image, index)=>{
                return (
                  <div className='mt-2 col-sm-6 col-md-4 col-lg-3' key={index}>
                    <div className='card'>
                      <img className='card-img-top' src={`http://localhost:3000/${image.image}`} height='100px' width='200px'/>
                      <div className='card-body'>
                        <h5>Title</h5>
                        <p className='card-text'>some text</p>
                      </div>
                  </div>
                </div>
            )}
        );
        return (
            <div className='container-fluid'>
                <div className='row'>
                  { list }
                </div>
            </div>
        )
    }
}

export default Content;
