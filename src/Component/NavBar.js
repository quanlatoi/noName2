import React from 'react';

import Clock from './clock';

class Navbar extends React.Component{
    state = {
        isShowMenu: false,
        isHover: false
    }
    handleClicked = (e) => {
        e.preventDefault();
        this.props.onHandleClicked(e);
    }

    onLogout = (e)=>{
        e.preventDefault();
        this.props.onLogout();
    }

    showMenu = ()=>{
        this.setState({
            isShowMenu: !this.state.isShowMenu
        })
    }

    mouseEnter = ()=>{
        this.setState({
            isHover: !this.state.isHover
        })
    }

    mouseLeave = ()=>{
        this.setState({
            isHover: !this.state.isHover
        })
    }

    render(){
        const { isShowMenu, isHover } = this.state;
        const classNames = [];
        if(isShowMenu){
            classNames.push('isactive');
            classNames.push('show-menu');
            if(isHover){
                classNames.push('item-hover ')
            }
        }
        else{
            classNames.pop()
        }
        return(
            <nav className='p-16 navbar navbar-expand-lg navbar-bg bg-pink'>
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
                            <a href='/' className='nav-link' onClick={this.handleClicked}>Add Picture</a>
                        </li>
                    </ul>
                </div>
                <div className='dropdown'>
                    <div className={`${typeof classNames[0] === 'undefined'? '' : classNames[0]} btn-utilities`} onClick={this.showMenu}></div>
                    <ul className={`${typeof classNames[1] === 'undefined'? '' : classNames[1]} dropdown-menu dropdown-menu-right`}>
                        <li className='item'>
                            <Clock />
                        </li>
                        <li className='separator item'></li>
                        <li className={`${typeof classNames[2] === 'undefined'? '' : classNames[2]}item`} 
                            onMouseEnter={this.mouseEnter}
                            onMouseLeave={this.mouseLeave}>
                            <a
                                href='/'
                                onClick={this.onLogout}
                            >
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;