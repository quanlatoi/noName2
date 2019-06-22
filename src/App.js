import React from 'react';
import Axios from 'axios';

import Navbar from './Component/NavBar'
import Content from './Component/Content';
import Form from './Component/Form';

class App extends React.Component{
    constructor(props){
        super();
        this.state = {
            pictures: [],
            isClicked : null,
            data: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        Axios.get(`http://localhost:3000/picture`)
        .then((res)=>{
            const picture =  res.data;
            this.setState({ pictures: picture });
        })
    }

    handleClick = (value) => {
        this.setState({isClicked : !value});
    }

    handleData = (data) => {
        this.state.pictures.push(data);
    }

    render() {
        const { pictures, isClicked, data } = this.state;
        const form = isClicked ? <Form onHandleData = { this.handleData }/> : null;
        
        return (
            <div>
                <div id='scroll'>
                    <Navbar 
                        onHandleClicked= { this.handleClick }
                    />
                </div>
                
                 <div className='container-fluid'>
                    { form }
                    <Content 
                        pictures={ pictures }
                        data={ data }
                    />
                </div>
            </div>
        )
    }
}


export default App;