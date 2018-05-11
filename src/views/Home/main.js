import React, { Component } from 'react';

import '../../scss/views/home.css'
import MattAvatar from '../../assets/matthew-avatar.jpg'
console.log(MattAvatar)
const Main = (props) => (
  <div className="home container">
    <div className="row h-100">
      <div className="col-4 offset-4">
        <div className="d-flex h-100 justify-content-center align-items-center">
          <img src={MattAvatar} className="img-fluid" alt="Matt Avatar" />
        </div>
      </div>
    </div>
  </div>
)

export default Main;
