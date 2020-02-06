import React from 'react';
import FromLogin from '../FormLogin';
import './styles.css';

const header = () => {
   return <header id="main-header">
             <img src="./brasao.png" class="img-fluid" ></img>
             <h4 className="hashtag">#Planejamento</h4>
             <FromLogin/>
          </header>;
}

export default header;

