import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    <h4>这是一个入口文件</h4>,
    document.body.appendChild(document.createElement('div'))
)