import React from 'react';
import Axios from 'axios';

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

    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.myFile);
        formData.append('myTitle',this.state.myTitle);
        formData.append('myDescript',this.state.myDesc);
        formData.append('myDate', this.state.myDate)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        console.log(config);

        Axios.post(`http://localhost:3000/picture/upload`, formData )
        .then((res)=>{
            this.setState({data: res.data});
            this.props.onHandleData(this.state.data);
            this.onClearForm();
            this.onCloseForm();
        })
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
        return (
            <form className='bg-white p-5 pt-15' onSubmit={this.onFormSubmit}>
                <div className='form-group'>
                    <label>Title</label>
                    <input 
                        className="form-control"
                        type='text'
                        name="myTitle"
                        value= {this.state.myTitle}
                        onChange= {this.handleChange}
                    />
                    
                </div>
                <div className='form-group'>
                    <label>Describe</label>
                    <textarea 
                        className="form-control textArea"
                        name='myDesc'
                        value= {this.state.myDesc}
                        onChange= {this.handleChange}
                    >
                    </textarea>
                </div>
                <div className='row wrap-input'>
                    <div className='pl-15 input-file col-6'>
                        <label >File</label>
                        <input className='btn input-btn' type='button' value='Choose File' />
                        <input 
                            className="form-control file"
                            type="file"
                            name="myFile"
                            onChange= {this.handleChange}
                        />
                        <label className='file-info'>{this.text}</label>
                    </div>
                    <div className='col-6 no-padding'>
                        <label>Date</label>
                        <input 
                            className="form-control p-15r"
                            type='date'
                            name='myDate'
                            value= {this.state.myDate}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <button className='btn btn-primary' type="submit" >Upload</button>
            </form>
        )
    }
}

export default Form;