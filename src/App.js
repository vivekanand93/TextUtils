import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  const [mode, setMode] = useState('dark');
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
// <Router>
  <Navbar title="TextUtilities" mode={mode} toggleMode={toggleMode} aboutText="about us" />
  <Alert alert={alert}/>
 // <Routes>
          // <Route exact path="/" element={ <TextForm heading='Enter your Text here to Recreate' showAlert={showAlert} mode={mode}/>}/>
          // <Route exact path="/about" element={<About aboutText="about"/>}/>
            <TextForm heading='Enter your Text here to Recreate' showAlert={showAlert} mode={mode}/>
            <About aboutText="about"/>
          {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        //</Routes>
  <div className="container my-3" >
  </div>
  //</Router>
  </>
  );
}

export default App;
