import React from 'react';
import reactDom from 'react-dom';
const element = React.createElement('iv',{className:"hi"},'wtf');
reactDom.render(element,document.querySelector("#root"))