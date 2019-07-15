import React from 'react';
import { connect } from 'react-redux';

import CallAPI from '../util/callAPI'
import * as action from '../appRedux/actions/index'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            myTitle: '',
            myDesc: '',
            myFile: null,
            myDate: ''
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const target = e.target;
        const name = target.name;
        let value = '';
        
        if(target.type === 'file'){
            for(let i = 0; i < target.files.length; i++){
                value = [];
                value.push(target.files[i]);
                if(target.type){
                    console.log(target.files)
                    this.props.getImg(target.files);
                }
            }
        }
        else{
            value = target.value;
        }

        this.setState({
            [name] : value
        })
    }

    async onFormSubmit(e){
        e.preventDefault();
        try{
            const formData = new FormData()
            formData.append('myFile',this.state.myFile[0]);
            formData.append('myTitle',this.state.myTitle);
            formData.append('myDesc',this.state.myDesc);
            formData.append('myDate', this.state.myDate)
            
            const jwt = JSON.parse(localStorage.getItem('token'));
            const res = await CallAPI('picture/upload', 'POST', formData, {
                'content-type': 'multipart/form-data',
                Authorization: `Bearer ${jwt}`,
            });
            this.props.getPictureFromServer(res.data);
            this.onClearForm();
            this.onCloseForm();
        }
        catch(err){
            console.log('ERR: ',err)
        }
    }

    onClearForm = () =>{
        this.setState({
            myTitle: '',
            myDesc: '',
            myFile: null,
            myDate: '',
        })
    }

    onCloseForm = () =>{
        this.props.closeForm();
    }

    render(){
        const { valueTag } = this.props;
        return (
            <form className='bg-white p-5 pt-15' onSubmit={this.onFormSubmit}>
                <div className='form-group'>
                    <span className='d-flex justify-content-center font-weight-bold text-info text-sizing'>{valueTag}</span>
                </div>
                <div className='form-group'>
                    <div className='add-new-form'>
                        <span><i className="fas fa-paperclip"></i></span>
                        <label className='font-weight-bold text-info text-title'>Title</label>
                    </div>
                    <input 
                        className="form-control"
                        type='text'
                        name="myTitle"
                        value= {this.state.myTitle}
                        onChange= {this.handleChange}
                    />
                </div>
                <div className='form-group'>
                    <div className='add-new-form'>
                        <span><i className="fas fa-pen"></i></span>
                        <label className='font-weight-bold text-info text-title'>Describe</label>
                    </div>
                    <textarea 
                        className="textArea form-control"
                        name='myDesc'
                        value= {this.state.myDesc}
                        onChange= {this.handleChange}
                    >
                    </textarea>
                </div>
                <div className='row wrap-input'>
                    <div className='pl-15 input-file col-6'>                               
                        <div className='add-new-form'>
                            <span><i className="fas fa-file"></i></span>
                            <label className='font-weight-bold text-info text-title'>File</label>
                        </div>
                        <div>
                            <input className='btn input-btn' type='button' value='Choose File' />
                            <input
                                className="form-control file"
                                type="file"
                                name="myFile"
                                accept="image/*, video/*"
                                onChange= {this.handleChange}
                                multiple={true}
                            />
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                        <div className='add-new-form'>
                            <span><i className="fas fa-hourglass"></i></span>
                            <label className='font-weight-bold text-info text-title'>Date</label>
                        </div>
                        <input 
                            className="form-control p-15r"
                            type='date'
                            name='myDate'
                            value= {this.state.myDate}
                            onChange={this.handleChange}
                        />
                    </div>
                <button className='btn btn-primary' type="submit" >Upload</button>
            </form>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        picture : state.picture,
        valueTag : state.getValueTag
    }
}

const mapDispathToProps = (dispath) =>{
    return {
        getPictureFromServer: (pictures) => {
            dispath(action.getNewPicture(pictures));
        },
        closeForm: ()=>{
            dispath(action.checkClick());
        }
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Form);