import React from 'react';


function FormHandle(){

    const [username, setName] = React.useState();

    const handleInput = (event)=>{
        setName(event.target.value);
    }

    const handleSubmit=()=>{
        console.log('Submited ', username);
        alert(username);
        setName('')
    }

    return(
        <div>
            <label>Name : </label>
            <input type="text" onChange={handleInput} value={username}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default FormHandle;