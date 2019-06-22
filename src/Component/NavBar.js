import React from 'react';
import Form from './Form';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            clicked : false,
            test: ''
        }
        this.showAddPicture = this.showAddPicture.bind(this)
        this.a = this.a.bind(this)
    }

    showAddPicture(){
        this.setState(state =>({
            clicked: !state.clicked
        }))
    }
    
    a = (data)=>{
        this.setState({test: data})
    }
    
    render(){
        const {clicked} = this.state;
        // console.log(clicked)
        const showForm = clicked?<Form test={this.a}/> : null
        return(
            <div id='scroll'>
                <nav className='navbar navbar-expand-lg navbar-bg bg-light'>
                    <a className='navbar-brand' href='http://localhost:2000'>Logo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='navbar-collapse justify-content-between'>
                        <ul className='navbar-nav'>
                            <li className='nav-item active'>
                                <a className='nav-link' href='http://localhost:2000'>Home</a>
                            </li>
                            <li className='nav-item active'>
                                <a className='nav-link' href='#' onClick={this.showAddPicture}>Add Picture</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='bg-white p-5'>
                    {showForm }
                </div>
            </div>
        )
    }
}

export default Navbar;