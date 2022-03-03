import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success");
    }
    const handleLoClick = () => {
        // console.log("uppercase clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase", "success");
    }
    const handleDelete = () => {
        // console.log("uppercase clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("text deleted", "warning");
    }
    
    const handleOnChange = (event)=>{
        // console.log("onchange done");
        setText(event.target.value);
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("removed extra space ", "success");
    }
    const [text, setText] = useState('Enter Text Here');
    return (
    <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
            <div className="mb-3"> 
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="MyBox" rows="6"></textarea>
            </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert To UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert To lowercase</button>
        <button className="btn btn-secondary mx-2" onClick={handleExtraSpace} >Remove extra spaces</button>
        <button className="btn btn-danger mx-2" onClick={handleDelete} >Clear</button>
        </div> 
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <span class="badge rounded-pill bg-info text-dark"><h2>your tex summary :- </h2></span>
        <p>It have {text.split(" ").length} words and {text.length} characters </p>
        <p>It takes {0.008 * text.split(" ").length} minute to read </p>
        <span class="badge rounded-pill bg-info text-dark"><h3>preview</h3></span>
        <p>{text.length>0?text:"enter somthing above to customize"}</p>
        </div>
    </>
  )
}
