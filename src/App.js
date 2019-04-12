import React, { Component } from 'react';

import './App.css';
import {FireBaseConn} from './FireBaseConn';
import Nav from './Nav';
import NavNote from './NavNote';
import NavForm from './NavForm';


class App extends Component {

  // onClicKMe = () => {
  //   var data = firebase.database().ref('dataNote');
  //   data.push({
  //     tittle: "Nay troi dep",
  //     content :'hnay dc an chao ga'
  //   })
  //   console.log('du lieu ms dc them vao database');
  // }

  // deleteData = (id) => {
  //   var data = firebase.database().ref('dataNote');
  //   data.child(id).remove();
  //   console.log('da xoa thanh cong data co id:' + id);
  // }

  // addData = (note) => {
  //   FireBaseConn.push(note);
  //   console.log('da them thanh cong '+ JSON.stringify(note))

  // }

  getData= () => {
      FireBaseConn.on('value',(notes) => {
        
      })
  }

  render() {

    return (
      <>
        <Nav />
        <div className="container">
          <div className="row">
            <NavNote />
            <NavForm />
          </div>
        </div>
      </>
    );
  }
}



export default App;


