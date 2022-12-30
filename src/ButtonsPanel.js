import React from "react";
import './ButtonsPanel.css';
import './Step'




// - do pola input odwołuj się przez jego referencję np. <input ref={(data) => { this._inputStep = data} } type="number" /> - następnie odwołaj się do tego pola w kodzie np. let step = this._inputStep.value;
// - dodatkowo będziesz musiał się podpiąć pod zdarzenie onChange tego inputa <input ref={(data) => { this._inputStep = data} } onChange{this.updateStep} type="number" /> i gdy jego wartość została zmieniona, to aktualizuj state :) np. this.setState(....)

function ButtonsPanel(props) {
    return (


        <div className="buttons-panel">
            <button onClick={() => { props.buttonMethod('add') }}>

                Add {props.stepValue}</button>




            <button onClick={() => { props.buttonMethod('reinit') }}> ReInit</button>
            <button onClick={() => { props.buttonMethod('reset') }}>Reset</button>

        </div>

    );
}


export default ButtonsPanel;
