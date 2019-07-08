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
            isClicked : true,
            valueTag : '',
            data: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    async componentDidMount(){
        const jwt = JSON.parse(localStorage.getItem('token'));
        const res = await callAPI('picture', 'GET', {}, {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json'
        })
        const picture =  res.data;
        this.setState({ pictures: picture });
        
    }

    handleClick = (e) => {
        this.setState({
            isClicked : !this.state.isClicked,
            valueTag : e.target.innerText
        });
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

    onLogout = ()=>{
        Authenticate.logout();
        this.props.history.push('/');
        // console.log(this.props)
    }

    closeModal = (e)=>{
        this.setState({isClicked : !this.state.isClicked});
    }

    

    render() {
        const { pictures, isClicked, data, valueTag} = this.state;
        let form, classNames = '';
        if(isClicked){
            classNames= ' show-my-modal'
            form = <Form onHandleData = { this.handleData }
                  onCloseForm = { this.onCloseForm }
                  valueTag = { valueTag }
            />            
        }
        else{
            form = null;
        }

        return (
            <div>
                <div id='scroll'>
                    <Navbar 
                        onHandleClicked= { this.handleClick }
                        onLogout = { this.onLogout }
                    />
                </div>
                <div className='container-fluid'>
                    <div className={`my-modal${classNames}`}>
                        <div className='wrap-content'>
                            <span className="close" onClick={this.closeModal}>&times;</span>
                            <div className='modal-content my-modal-content' >
                                { form }
                            </div>
                        </div>
                    </div>
                    <Content 
                        pictures= { pictures }
                        data= { data }>
                    </Content>
                    
                </div>
            </div>
        )
    }
}


export default App;