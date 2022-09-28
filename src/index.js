import React from 'react';
import { BrowserRouter as Router, Nav, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';

class Mywebsite extends React.Component{
      constructor(){
            super();
            this.state={ Name: "Come to Win"}
      }
changeme = ()=>{
      this.setState({Name:"Got It"})
}
componentWillUnmount(){
      alert("This is will mount");
}

render(){
      return(
            
            
                  <div>
             <Router>
            
            
                  <Link to="/">Home</Link>
                  <Link to="about">contact</Link>
                  <Link to="contact">contact</Link>
            
           
                  <Routes>
                        <Route to="/" element={Home}/>
                        <Route to="about" element={About}/>
                        <Route to="contact" element={Contact}/>
                  </Routes>
            </Router>
            </div>
                  

            
      )
}
}

      ReactDOM.render(<Mywebsite />, document.getElementById('root'));
      
