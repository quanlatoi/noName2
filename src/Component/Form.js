import React from 'react';
import Axios from 'axios';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: null,
            descript: null,
            file: null,
        }
        const text ='';
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChangeFile = this.onTodo.ChangeFile.bind(this);
        this.onChangeText = this.onTodo.ChangeTitle.bind(this);
        this.onChangeDes = this.onTodo.ChangeDescript.bind(this);
    }
    
    onTodo = {
        ChangeFile(e) {
            this.setState({file : e.target.files[0]});
            console.log(e)
            const name = e.target.value.split(/\\|\//).pop();
            this.text = (name.length > 10)? '... '+name.substr(name.length - 20) : name;
        },
        ChangeTitle(e) {
            this.setState({title : e.target.value});
        },
        ChangeDescript(e) {
            this.setState({descript: e.target.value});
        }
    }

    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        formData.append('myTitle',this.state.title);
        formData.append('myDescript',this.state.descript);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        console.log(config);
        Axios.post(`http://localhost:3000/picture/upload`, formData )
        .then((res)=>{
            let mgs = res.data;
            console.log(mgs)
        })
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit}>
            <div className='form-group'>
                <label>Title</label>
                <input className="form-control" type='text' name="myTitle" onChange= {this.onChangeText}/>
            </div>
            <div className='form-group'>
                <label>Describe</label>
                <textarea className="form-control textArea" onChange= {this.onChangeDes}></textarea>
            </div>
            <div className='row'>
                <div className='form-group col input-file'>
                    <label >File</label>
                    <input className='btn input-btn' type='button' value='Choose File' />
                    <input className="form-control file" type="file" name="myImage" onChange= {this.onChangeFile} />
                    <label className='file-info'>{this.text}</label>
                </div>
                <div className='form-group col'>
                    <label>Date</label>
                    <input className="form-control" type='date'/>
                </div>
            </div>
            <button className='btn btn-primary' type="submit">Upload</button>
        </form>)
    }
}

export default Form;