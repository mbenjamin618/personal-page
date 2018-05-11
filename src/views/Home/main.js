import React from 'react';

import '../../scss/views/home.css'
import MattAvatar from '../../assets/matthew-avatar.jpg'

const Main = (props) => (
  <div className="home container">
    <div className="row h-100">
      <div className="col-12">
        <div className="d-flex h-100 justify-content-between align-items-center">
          <div className="menu-item menu-item--left order-1">
            <i className="material-icons">keyboard_arrow_left</i>
            <span>About Me</span>
          </div>
          <div className="menu-item menu-item--right order-3">
            <span>My Work</span>
            <i className="material-icons">keyboard_arrow_right</i>
          </div>
          <div className="matt-image-wrapper order-2">
            <img src={MattAvatar} className="matt-image" alt="Matt Avatar" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Main;
