import React, { PropTypes } from 'react';
import Numbers from './components/numbers';
class App extends React.Component {
    constructor(props) {
        super(props);
        //this.numberClickHandler= this.numberClickHandler.bind(this);
    }
    render() {
        return (
            <Numbers clickHandler={this.numberClickHandler} />
        );
    }
    numberClickHandler(e) {
        alert(e);
    }
}
export default App;