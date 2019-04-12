import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAWfcaaSi4EbDivRxW-u7PYTrzGal417nI",
  authDomain: "notereact-61897.firebaseapp.com",
  databaseURL: "https://notereact-61897.firebaseio.com",
  projectId: "notereact-61897",
  storageBucket: "notereact-61897.appspot.com",
  messagingSenderId: "1088356644210"
};
firebase.initializeApp(config)

export const FireBaseConn = firebase.database().ref('dataNote');
// var data = firebase.database().ref('dataNote/node3');

// data.once("value").then(function (snapshot) {
//   console.log(snapshot.val())
// })

// data.set({
//   id: 3,
//   content : "Hom nay dc son dat com cho",
//   tittle: 'Ngay 12/4'
// })
