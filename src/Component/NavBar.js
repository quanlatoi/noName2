import React from 'react';
import { connect } from 'react-redux';

import Clock from './clock';
import * as action from '../appRedux/actions/index';
import * as actionForNavBar from '../appRedux/actions/navBar';

class Navbar extends React.Component{
    handleClicked = (e) => {
        e.preventDefault();
        this.props.click();
        this.props.getValueTag(e.target.innerText);
    }
    
    onLogout = (e)=>{
        e.preventDefault();
        this.props.onLogout();
    }

    showMenu = ()=>{
        this.props.controllMenu();
    }

    mouseEnter = ()=>{
        this.props.mouseHoverInMenu();
    }

    mouseLeave = ()=>{
        this.props.mouseHoverInMenu();
    }

    render(){
        const { _controllMenu, _hoverMenu } = this.props;
        const classNames = [];
        if( _controllMenu ){
            classNames.push('isactive');
            classNames.push('show-menu');
            if(_hoverMenu){
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

const mapStateToProps = (state)=>{
    return {
        isClicked : state.isClicked,
        _controllMenu : state.navBar.controllMenu,
        _hoverMenu : state.navBar.hoverMenu
    }
}

const mapDispathToProps = (dispath) =>{
    return {
        click: () => {
            dispath(action.checkClick());
        },
        getValueTag : (valueTag)=>{
            dispath(action.valueTag(valueTag));
        },
        controllMenu : ()=>{
            dispath(actionForNavBar.controllMenu());
        },
        mouseHoverInMenu : ()=>{
            dispath(actionForNavBar.mouseHoverInMenu());
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Navbar);