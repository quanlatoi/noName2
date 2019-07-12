import React from 'react';
import { connect } from 'react-redux';

import callAPI from './util/callAPI';
import Navbar from './Component/NavBar';
import Content from './Component/Content';
import Form from './Component/Form';
import PreviousFileUpload from './Component/previuosFileUpload';
import * as action from './appRedux/actions/index';

class App extends React.Component{
    constructor(props){
        super();
        this.state = {
            isClicked : false,
            valueTag : '',
            previous: [],
        }
        // this.componentDidMount = this.componentDidMount.bind(this);
    }
    // async componentDidMount(){
    //     const jwt = JSON.parse(localStorage.getItem('token'));
    //     const res = await callAPI('picture', 'GET', {}, {
    //         Authorization: `Bearer ${jwt}`,
    //         'Content-Type': 'application/json'
    //     })
    //     if(res.data !== false){
    //         const picture =  res.data;
    //         this.setState({ pictures: picture });
    //     }
    //     else{
    //         localStorage.clear();
    //         this.props.history.push('/');
    //     }        
    // }

    onLogout = ()=>{
        localStorage.clear();
        this.props.history.push('/');
    }

    closeModal = (e)=>{
        this.props.closeForm();
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
        const { valueTag, previous } = this.state;
        const { isClicked } = this.props;
        let form, classNames = '';
        if(isClicked){
            classNames= ' show-my-modal'
            form = <Form
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
                    <Content >
                    </Content>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        isClicked : state.isClicked
    }
}

const mapDispathToProps = (dispath) =>{
    return {
        closeForm : ()=>{
            dispath(action.checkClick());
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(App);