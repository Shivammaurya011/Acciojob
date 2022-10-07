import React from 'react';

function MyComponent(){
    const [count, setCount] = React.useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Inc Count</button>
        </div>
    )
}
export default MyComponent;