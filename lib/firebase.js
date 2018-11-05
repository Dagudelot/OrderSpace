import * as firebase from 'firebase';
class Firebase {
  static init(){
    firebase.initializeApp({
      apiKey: "AIzaSyCmyrkfKKOnTAgfMgrgwEirLQUP1kjtX4Y",
    authDomain: "ensayo-378c0.firebaseapp.com",
    databaseURL: "https://ensayo-378c0.firebaseio.com",
    projectId: "ensayo-378c0",
    storageBucket: "ensayo-378c0.appspot.com",
    });
  }
}

module.exports = Firebase;
