import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

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
  <> 
  <Navbar title="TextUtilities" mode={mode} toggleMode={toggleMode} aboutText="about us" />
  <Alert alert={alert}/>
  <TextForm heading='Enter your Text here to Recreate' showAlert={showAlert} mode={mode}/>
           // <About aboutText="about"/>
  </>
  );
}

export default App;
