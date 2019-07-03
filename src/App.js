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
            isClicked : false,
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

    handleClick = () => {
        this.setState({isClicked : !this.state.isClicked});
    }

    handleData = (data) => {
        const { pictures } = this.state;
        pictures.push(data);
        this.setState({pictures : pictures});
    }

    onCloseForm = () => {
        this.setState({
            isClicked: false
        })
    }

    render() {
        const { pictures, isClicked, data} = this.state;
        const form = isClicked ? <Form
                                    onHandleData = { this.handleData }
                                    onCloseForm = { this.onCloseForm }
                                />: null;
        
        return (
            <div>
                <div id='scroll'>
                    <Navbar 
                        onHandleClicked= { this.handleClick }
                    />
                </div>
                
                 <div className='container-fluid'>
                    <Content 
                        pictures={ pictures }
                        data={ data }
                        isClicked= { isClicked }
                        form = { form }
                    />
                    
                </div>
            </div>
        )
    }
}


export default App;