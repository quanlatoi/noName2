import React, { Component } from 'react';

import Authenticate from '../authenticate';
import callAPI from '../../util/callAPI';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: '',
            err: '',
            classNames: 'd-none',
            validate: 'd-none'
        }
    }

    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        this.setState({
            [name] : target.value
        })
    }

    closeAlert = ()=>{
        setTimeout(
            ()=>{
                this.setState({
                    classNames: 'd-none',
                    validate: 'd-none'
            })
        }, 6000)
    }

    onSubmit = async (e) => {        
        e.preventDefault();
        if(this.state.userName.length < 3 || this.state.userName.length > 50){
            this.setState({
                classNames: 'alert alert-danger',
                password: ''
            })
            this.closeAlert();
            return;
        }
        if(this.state.password.length < 3 || this.state.password.length > 50){
            this.setState({
                classNames: 'alert alert-danger',
                password: ''
            })
            this.closeAlert();
            return;
        }
        console.log('a');
        
        try{
            const user = {
                userName: this.state.userName,
                password: this.state.password
            }
            const res = await callAPI('login', 'POST', user)
            if(res.data.token !== undefined){
                localStorage.setItem('profile', JSON.stringify(res.data.body.user));
                localStorage.setItem('token', JSON.stringify(res.data.token));
                Authenticate.login();
                this.props.history.push('/');
            }else{
                this.setState({
                    err: res.data.errors[0].mgs,
                    password: '',
                    validate: 'alert alert-danger'
                })
                this.closeAlert();
            }
        }
        catch(err){
            console.log("ERR : ", err)
        }
    }

    render(){
        let {err, classNames, validate} = this.state;
        const styles={
            backgroundImage: `url(https://i.pinimg.com/564x/86/07/e4/8607e4f69989a9bb9c9d34986e23e11b.jpg)`,
            color: '#fff'
        }
        return(
            <div className='bg-pink'>
                <div className='row col-12'>
                    <nav className="no-margin no-padding navbar navbar-expand-lg navbar-light bg-opacity">
                        <a className="no-margin no-padding navbar-brand" href="/"><img src='logo.png'style={{height: '50px', width: '92px'}} alt='logo'></img></a>
                    </nav>
                </div>
                <div className='container'>
                    <div className='row col-12'>
                        <div className='login-more col-6' style={styles}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        <div className='login-form col-6'>
                            <form onSubmit={this.onSubmit} className='col-12 bg-form'>
                                <div className='form-group'>
                                    <span className='d-flex justify-content-center title'>LOGIN</span>
                                </div>
                                <div className="form-group">
                                    <i className="m-2 pr-3 fas fa-user"></i>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Username"
                                        name='userName'
                                        value= {this.state.userName}
                                        onChange={this.onChange} />
                                    <p className={classNames}>
                                        <span>Username must be 3-50 characters long</span>
                                    </p>
                                </div>
                                <div className="form-group">
                                    <div className='d-flex'>
                                        <i className="m-2 pr-3  fas fa-lock"></i>
                                        <input 
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            name='password'
                                            value= {this.state.password}
                                            onChange={this.onChange} />
                                    </div>
                                    <p className={classNames}>
                                        <span>Password must be 3-50 characters long</span>
                                    </p>
                                </div>
                                <p>
                                    <span className={validate}>
                                        {err}
                                    </span>
                                </p>
                                <div className='form-group'>
                                    <input type='submit' className='btn btn-primary' value='Login' /> 
                                    <a className='ml-3 p-2' href='/'>Forgot Password</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                </div>
            </div>
        )
    }
}

export default Login;