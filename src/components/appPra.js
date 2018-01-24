import React from 'react';
import Counter from './counterPra';
import Buttons from './buttonPra';
import Option from './optionPra';

class App extends React.Component {
    render(){
        return (
            <div style={ {textAlign: 'center'} }>
                <Counter/>
                <Option/>
                <Buttons/>
            </div>
        );
    }

}

export default App;

