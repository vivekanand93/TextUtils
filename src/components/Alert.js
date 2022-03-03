import React from 'react'

function Alert(props) {
    const caps = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
   
    props.alert &&  
    <>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{caps(props.alert.type)}</strong>: {caps(props.alert.message)} 
        {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </>
  )
}

export default Alert
