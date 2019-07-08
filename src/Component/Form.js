import React from 'react';

import CallAPI from '../util/callAPI'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            myTitle: '',
            myDesc: '',
            myFile: null,
            myDate: '',
            data: ''
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const target = e.target;
        const name = target.name;
        let value = '';
        
        if(target.type === 'file'){
            value = target.files[0];
            const name = e.target.value.split(/\\|\//).pop();
            this.text = (name.length > 10)? '... '+name.substr(name.length - 20) : name;
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
        const formData = {
            myFile: this.state.myFile,
            myTitle: this.state.myTitle,
            myDesc: this.state.myDesc,
            myDate: this.state.myDate
        }
            const res = await CallAPI('upload', 'POST', formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            this.setState({data: res.data});
            this.props.onHandleData(this.state.data);
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
        this.text = '';
    }

    onCloseForm = () =>{
        this.props.onCloseForm();
    }

    render(){
        const { valueTag } = this.props;        
        return (
            <div className='row'>
                <div className='col-8'>
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
                                        onChange= {this.handleChange}
                                    />
                                    <label className='file-info'>{this.text}</label>
                                </div>
                            </div>
                            {/* previous*/}
                            <div>
                                
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
                </div>
                <div className='col-4'>

                </div>
            </div>
        )
    }
}

export default Form;