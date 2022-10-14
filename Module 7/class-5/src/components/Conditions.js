import React from 'react';
function Conditions(){

    const [isLoading, SetIsLoading] = React.useState(true);

    return(
        <div>
            {
                isLoading || <p>Loading... Please Wait!</p>
            }
            <button onClick={()=>SetIsLoading(!isLoading)}>Toggel</button>
        </div>
    )
}
export default Conditions;