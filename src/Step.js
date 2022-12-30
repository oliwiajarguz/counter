import React from 'react';
import './Step.css'


const Step = (props) => {
    return (
        <form>
            <label>Krok:</label>
            <input type="number" onClick={(event) =>props.stepMethod(event)

            }>

            </input>
        </form>

       
        
    )
   
};
export default Step;
