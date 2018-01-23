import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

/*
 * Action
 */

 const Increment = 'INCREMENT';

 // It is an action; it defines a control of
 // what elements are going to be changed with a certain condition
 function increase(diff) {
     return ({
        type: Increment, // condition
        addBy: diff // parameter of this action
     });
 }


 /*
 Reducer
 */

const initialState = {
            value: 0
};
        
const counterReducer = (state = initialState, action) => { //action : increase(diff) above
        switch(action.type) {
            case Increment:
                    // "Object.assign()" is to copy "state".
                    // Then, we can manipulate the copied "state" here.
                    // We must not change the origin of the state.
                    // The third parameter is for the manipuation.
                    return (Object.assign ({}, state, { // {} disregard at the moment.
                        value: state.value + action.addBy // data manipulation!!!
                    }));

                // return initial state when it is not "Increment"
                default: return state;
            }
}

/**
 * store
 */

// createStore() method!!!!!
// It receives the value of return from counterReducer
const store = createStore(counterReducer);



/**
 * Event
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        
        let centerStyle = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            MsUserSelect:'none',
            userSelect: 'none',
            cursor: 'pointer'
        };
        

        // getState().value: built-in method to get data in "store"
        // It uses "props" to get data.
        return (
            <div
                onClick={ this.onClick }
                style = {centerStyle }
               
            >

                <h1> {this.props.store.getState().value} </h1>
            </div>
        )
    }

    // store.dispatch() is to input parameter to change "state or value" in "store".
    onClick() {
        this.props.store.dispatch(increase(1));
    }
}

/**
 * View
 */
const render = () => {

    const appElement = document.querySelector('.container');
    
    // "props" is used to deliver state "store"
    ReactDOM.render(
        <App store = { store }/>,
        appElement
    );
};

store.subscribe(render);
render();
