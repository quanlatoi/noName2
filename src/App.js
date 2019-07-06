import React from 'react';

import callAPI from './util/callAPI';
import Navbar from './Component/NavBar';
import Content from './Component/Content';
import Form from './Component/Form';
import Authenticate from './routers/authenticate';

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

    async componentDidMount(){
        const jwt = JSON.parse(localStorage.getItem('token'));
        const res = await callAPI('picture', 'GET', {}, {
            Authorization: `Bearer ${jwt}`
        })
        const picture =  res.data;
        this.setState({ pictures: picture });
        
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
                <button onClick={()=>{Authenticate.logout(); this.props.history.push('/'); console.log(this.props)}}>logout</button>
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