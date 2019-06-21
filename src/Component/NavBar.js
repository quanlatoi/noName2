import React from 'react';
import Form from './Form';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            clicked : false
        }
        this.showAddPicture = this.showAddPicture.bind(this)
    }

    showAddPicture(){
        this.setState(state =>({
            clicked: !state.clicked
        }))
    }
    
    render(){
        const {clicked} = this.state;
        // console.log(clicked)
        const showForm = this.state.clicked?<Form /> : null
        // console.log(this.props)
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
                <div className='a'>
                    {showForm}
                </div>
            </div>
        )
    }
}

export default Navbar;