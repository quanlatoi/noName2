import React from 'react';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            clicked: false
        }
    }

    handleClicked = () => {
        this.setState({clicked: !this.state.clicked});
        this.props.onHandleClicked(this.state.clicked);
    }
    
    render(){
        return(
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
                            <a className='nav-link' href='#' onClick={this.handleClicked}>Add Picture</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;