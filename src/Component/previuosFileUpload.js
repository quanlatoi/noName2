import React, { Component } from 'react';

import A from './a'
 // const img = document.createElement('img');
// img.setAttribute('src', e.target.result)
// document.querySelector('#wrap-img').appendChild(img);
class PreviousFileUpload extends Component{

    render(){
        let arrImg = [...this.props.children];
        let q = arrImg.map(
            (img) => {
                const reader = new FileReader();
                reader.readAsDataURL(img);
                reader.onload = function(e){
                    console.log(e.target.result)
                    return <A b={e.target.result} />
                }
                return <A b='asd' />
            }
        )
        return(
            <div id='wrap-img'>
                {q}
            </div>
        )
    }
}

export default PreviousFileUpload;