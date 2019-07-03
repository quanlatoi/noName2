import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const listMenu = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Picture',
        to: '/picture',
        exact: false
    },
    {
        name: 'Login',
        to: '/login',
        exact: false
    }
]

const MenuLink = ({ label, to, activeExact}) => {
    return (
        <Route
            path={to}
            exact={activeExact}
            children={ () => {
                    return (
                        <li>
                            <Link to={to}>
                                {label}
                            </Link>
                        </li>
                    )
                }
            }   
        />
    )
}

class Menu extends Component {
    
    render(){
        return(
            <nav id='scroll'>
                <ul>
                    {this.showMenu(listMenu)}
                </ul>
            </nav>
        )
    }
    showMenu = (listMenu)=>{
        let result = null;
        if(listMenu.length > 0){
            result = listMenu.map((menu, index) => {
                return <MenuLink label={menu.name} to={menu.to} exact={menu.exact} key={index}></MenuLink>
            })
        }
        return result;
    }
}

export default Menu;