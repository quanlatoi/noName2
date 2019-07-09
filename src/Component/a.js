import React, {Component} from 'react';

class A extends Component{
    render(){
        console.log(this.props.b)
        return(
            <div></div>
        )
    }
}

export default A;