import React, { Component } from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }

    onChange = (e)=>{
        const target = e.target;
        const name = target.name;
        let value = target.value;

        this.setState({
            [name] : value
        })
    }

    render(){
        return(
            <form>
                <div class="form-group">
                    <label>User Name</label>
                    <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" name='userName' onChange={this.onChange} />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" placeholder="Password" name='password' onChange={this.onChange} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default Login;