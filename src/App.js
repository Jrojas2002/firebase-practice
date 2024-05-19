import React, { useState, useEffect } from 'react';
import './App.css';
import { auth } from './firebase/init';
import { createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
 } from "firebase/auth";
import { set } from 'firebase/database';

function App() {

const [user, setUser] = React.useState({});
const [loading, setLoading] = React.useState(true);

React.useEffect(() => {
onAuthStateChanged(auth, (user) => {
  setLoading(false);
  console.log(user);
  if (user) {
    setUser(user);
  }
  })
}, [])

function register() {
  console.log("registering");
  createUserWithEmailAndPassword(auth, "email@email.com", "password")
  .then((user) => {
     console.log(user);
   })
   .catch((error) => {
     console.log(error);
   });
   hideBTN();
}

function signIn() {
  signInWithEmailAndPassword(auth, "email@email.com", "password")
  .then(({ user }) => {
     console.log(user);
     setUser(user);
   })
   .catch((error) => {
     console.log(error);
   });
   hideBTN();
}

function logOut() {
  signOut(auth);
  setUser({});
  showBtn();
}

const inEl = document.querySelectorAll('.register, .signIn');
const outEl = document.querySelectorAll('.logOut');

function hideBTN() {
 inEl.forEach(el => {
   el.style.display = 'none';
 });
 outEl.forEach(el => {
   el.style.display = 'block';
 });
}

function showBtn() {
  inEl.forEach(el => {
    el.style.display = 'block';
  });
  outEl.forEach(el => {
    el.style.display = 'none';
  });
}

  return (
    <div className="App">
      <div>
      <figure className='img-container'>
          <img className='logo' src="https://frontendsimplified.com/_nuxt/img/Frontend%20Simplified%20Logo.853fbda.png" alt="logo" />
        </figure>
      </div>
      {loading ? 'loading...' : <>
      <div className='buttons'>
        <button className='register' onClick={register}>Register</button>
        <button className='signIn' onClick={signIn}>Log in</button>
        <button className='logOut' onClick={logOut}>{user && user.email ? user.email[0].toUpperCase() : '?'}</button>
      </div>
      </>}
    </div>
  );
}

export default App;
