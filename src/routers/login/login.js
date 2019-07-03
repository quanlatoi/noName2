import React, { Component } from 'react';
import Axios from 'axios';
import { type } from 'os';
import { async } from 'q';
import { switchCase } from '@babel/types';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: '',
            err: ''
        }
    }

    onChange = (e)=>{
        const target = e.target;
        const name = target.name;
        this.setState({
            [name] : target.value
        })
    }

    onSubmit = async (e)=>{
        try{
            e.preventDefault();
            const data = {
                userName: this.state.userName,
                password: this.state.password
            }
            const res = await Axios.post('http://localhost:3000/api/login', data )
            if(res.data.token !== undefined){
                localStorage.setItem('token', `bearer ${res.data.token}`);
                this.props.history.push('/')
            }else{
                this.setState({
                    err: res.data.errors[0].mgs
                })
            }
        }
        catch(err){
            console.log("ERR : ", err)
        }    
    }

    render(){
        let {err} = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                {err}
                <div className="form-group">
                    <label>User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        name='userName'
                        value= {this.state.userName}
                        onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name='password'
                        value= {this.state.password}
                        onChange={this.onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default Login;