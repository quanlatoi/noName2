import React from 'react';

const PreviousFileUpload = (imgs) => {
    const previous = [...imgs];
    console.log(previous)
    const showIndex = (index) =>{
        previous.filter((a) => {
            console.log(a)
        })
    }


    return previous.map((urlImage, index)=>{
        return (
            <div className='d-flex wrap-image' key={index} style={{width: '100px', height: '100px'}}>
                <img className='' src={urlImage} alt='' style={{width: '100px', height: '100px'}} />
                <div className='utilities'>
                    <span className='remove close' onClick={() => showIndex(index)}>
                        &times;
                    </span>
                </div>
            </div>
        )
    })
}

export default PreviousFileUpload;