import React from 'react';

class Navbar extends React.Component{
    constructor(props){
        super(props);
            this.state = {
            countTime: ''
        };
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.timer = setInterval(
            () => {
                let now = new Date();
                const ts = new Date('2019-04-10T00:00:00');
                const resultTime = now - ts;
                let count = Math.floor(resultTime / (1000 * 60 * 60 * 24)) > 0 ? Math.floor((resultTime / (1000 * 60 * 60 * 24))) + ' day ' + Math.floor((resultTime / (1000 * 60 * 60)) % 24) + " : " + Math.floor((resultTime / (1000 * 60)) % 60) + " : " + Math.floor((resultTime / 1000) % 60) : Math.floor((resultTime / (1000 * 60 * 60)) % 24) + " hour " + Math.floor((resultTime / (1000 * 60)) % 60) + " min " + Math.floor((resultTime / 1000) % 60) + " sec";
                this.setState({ countTime: 'Count Time: ' + count })
                
            },1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    handleClicked = () => {
        this.props.onHandleClicked();
    }

    render(){
        const { countTime } = this.state;
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
                            <a className='nav-link' href="#" onClick={this.handleClicked}>Add Picture</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>{ countTime }</p>
                </div>
            </nav>
        )
    }
}

export default Navbar;