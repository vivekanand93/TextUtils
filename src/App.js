import React, { Component , useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { HashRouter, Route, Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
      },2000);
  }
  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode active", "success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("dark mode active", "success");
    }
  }
  return (
   <HashRouter basename="/">
     <Navbar title="TextUtilities" mode={mode} toggleMode={toggleMode} aboutText="about us" />
     <Alert alert={alert}/>
     <Route exact path="/" component={<TextForm heading='Enter your Text here to Recreate' showAlert={showAlert} mode={mode}/>} />
    <Route path="/about" component={<About aboutText="about"/>} />
    </HashRouter>
  );
}

export default App;
