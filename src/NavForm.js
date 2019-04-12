import React, { Component } from 'react';
import {connect} from 'react-redux';

class NavForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTittle: '',
            noteContent: ''
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    addData = (tittle, content) => {
       
        var note = {};
        note.noteTittle = tittle;
        note.noteContent = content;
        this.props.addData(note);
    }

    render() {
        return (
            <div className="col-4">
                <h3>Sua thong tin Note</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTittle">Tieu de note</label>
                        <input onChange={(event) => this.isChange(event)} type="text" name="noteTittle" id="noteTittle" className="form-control" placeholder="Nhap noi dung tieu de" aria-describedby="helpId" />
                        <div className="form-group">
                            <label htmlFor="noteBody">Noi dung note</label>
                            <textarea onChange={(event) => this.isChange(event)} type="text" name="noteContent" id="noteContent" className="form-control" placeholder="Nhap noi dung" aria-describedby="helpId" defaultValue={""} />
                        </div>
                        <button type="reset" onClick={()=>this.addData(this.state.noteTittle,this.state.noteContent)} className="btn btn-primary btn-block">Luu</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      status: state.status
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      addData: (note) => {
        dispatch({type : 'ADD_DATA', note})
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NavForm);