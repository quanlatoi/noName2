import React from 'react';

import callAPI from './util/callAPI';
import Navbar from './Component/NavBar';
import Content from './Component/Content';
import Form from './Component/Form';
import Authenticate from './routers/authenticate';
import PreviousFileUpload from './Component/previuosFileUpload';

class App extends React.Component{
    constructor(props){
        super();
        this.state = {
            pictures: [],
            isClicked : false,
            valueTag : '',
            previous: [],
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
    }

    closeModal = (e)=>{
        this.setState({isClicked : !this.state.isClicked});
    }

    getImg = (value)=>{
        let arrImg = [...value];
        arrImg.map(
            (img) => {
                const reader = new FileReader();
                reader.onloadend = ()=>{
                    const { previous } = this.state;
                    previous.push(reader.result);
                    this.setState({
                        previous: previous
                    })
                };
                return reader.readAsDataURL(img);
            }
        )
    }

    removeImg = (index)=>{
        //we will remove one display image when we click to X icon
        const { previous } = this.state;
        previous.splice(index, 1);
        this.setState({
            previous: previous
        });
    }

    render() {
        const { pictures, isClicked, data,  valueTag, previous } = this.state;
        let form, classNames = '';
        if(isClicked){
            classNames= ' show-my-modal'
            form = <Form onHandleData = { this.handleData }
                  onCloseForm = { this.onCloseForm }
                  valueTag = { valueTag }
                  getImg = { this.getImg }
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
                            <span className="close-hover close" onClick={this.closeModal}>&times;</span>
                            <div className='modal-content my-modal-content' >                                
                                <div className='d-flex flex-wrap'>
                                    <div className='col-8'>
                                        { form }
                                    </div>
                                    <div className='col-4 mt-2 pt-5'>
                                        {/* previous */}
                                        <div className='col-6 no-padding d-flex flex-wrap'>
                                            { PreviousFileUpload(previous, this.removeImg) }
                                        </div>
                                    </div>
                                </div>
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