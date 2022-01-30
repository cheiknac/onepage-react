import React, { Component } from 'react';
import './TopHeader.css'
import Apple from '../../src/Apple.png'

export default class TopHeader extends Component {
  render() {
    return <div>
        
    <div id="mainG">

    <div id="logoP">
        <img style={{ margin: '30px 30px'}} src={Apple} />
    </div>

    <div id="mainP">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Playslist</a></li>
            <li><a href="#">Upload</a></li>
        </ul>
    </div>

    </div>

    <div id="callToAction">

    <h1>MUSIQUE GRATUITE</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book.</p>
    <button>S'inscrire en ligne</button>

    </div>


    </div>;
  }
}

