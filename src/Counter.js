import React, { Component } from 'react';
import Step from './Step';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';

//<komponent klasowy>

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: this.props.initValue,
            stepValue: 1
        };
        // binding for es5
     
        // this.changeValue = this.changeValue.bind(this);
    }

    // changeValue () { es5 method
    // es6 method
    
    
    
    changeValue = (action) => {


        this.setState((
            prevState, prevProps) => {
            let currentCounterValue = prevState.counterValue;
            if (action === 'add') {
                currentCounterValue+= this.state.stepValue;
                
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            }
            return ({
                counterValue: currentCounterValue
            })
        });
    }


    stepChange = (event) => {
        console.log(event);
        this.setState({
            stepValue: +event.target.value
        })


    }

    
// add 5 to add 5

    render() {
        return (

            <div className="counter">
                Licznik:
                <Display displayValue={this.state.counterValue} />
                {/* props */}
                <ButtonsPanel buttonMethod={this.changeValue} stepValue={this.state.stepValue} />
                <Step stepMethod={this.stepChange} />


            </div>

        );
    }
}

//</komponent klasowy>
//<komponent funkcyjny>

// function Counter(props) {
//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1)+1)
//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}


//             </span>


//         </div>

//     )
// }
//</komponent funkcyjny>

export default Counter;