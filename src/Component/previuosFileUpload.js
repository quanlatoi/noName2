import React from 'react';

export default function PreviousFileUpload(imgs, cb){
    const previous = [...imgs];

    const showIndex = (index) =>{
        cb(index)
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
    });
}
