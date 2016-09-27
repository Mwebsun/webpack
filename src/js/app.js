import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Hello from '../components/Hello.js';
import Life from '../components/Life.js';

var obj={
    sex:"男",
    a:"23232",
    b:67,
    c:function(){
    },
    age:89
}

ReactDOM.render(
        <div>
          <Life/>
        </div>,
    document.getElementById('app')
);