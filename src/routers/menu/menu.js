import React, { Component } from 'react';

const listMenu = [
    {
        name: 'homePage',
        to: '/',
        exact: true
    },
    {
        name: 'picture',
        to: '/picture',
        exact: false
    },
    {
        name: 'login',
        to: '/login',
        exact: false
    }
]

class menu extends Component {
    showMenu = (listMenu)=>{
        let result = null;
        if(listMenu.length > 0){
            result = listMenu.map((menu, index) => {
                return <li label={menu.name} to={menu.to} exact={menu.exact} key={index}></li>
            })
        }
        return result;
    }
    
    render(){
        return(
            <nav>
                <ul>
                    {this.showMenu(listMenu)}
                </ul>
            </nav>
        )
    }
}

export default menu;