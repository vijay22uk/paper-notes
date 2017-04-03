import React, {PropTypes} from 'react';
class Numbers extends React.Component {
     constructor(props) {
        super(props);
        this.clickHandler= this.clickHandler.bind(this);
    }
    render() {
        
        return (
            <div className="container-fluid numpad">
            <div className="col-md-12">
                <div className="col-md-4 col-sm-4 col-xs-4 num"><div value="7" onClick={this.clickHandler} className="num-container">7</div></div>
                <div className="col-md-4 col-sm-4 col-xs-4 num"><div value="8" onClick={this.clickHandler} className="num-container">8</div></div>
                <div className="col-md-4 col-sm-4 col-xs-4 num"><div className="num-container">9</div></div>
            </div>

             <div className="col-md-12">
                <div className="col-md-4 col-sm-4 col-xs-4 num"><div className="num-container">4</div></div>
                <div className="col-md-4 col-sm-4 col-xs-4 num"><div className="num-container">5</div></div>
                <div className="col-md-4 col-sm-4 col-xs-4 num"><div className="num-container">6</div></div>
            </div>

            <div className="col-md-12">
                <div className="col-md-4 col-sm-4 col-xs-4 num"><div className="num-container">1</div></div>
                <div className="col-md-4 col-sm-4 col-xs-4 num"><div className="num-container">2</div></div>
                <div className="col-md-4 col-sm-4 col-xs-4 num"><div className="num-container">3</div></div>
            </div>

            <div className="col-md-12">
                <div className="col-md-4 col-sm-4 col-xs-4 num"><div className="num-container">0</div></div>
                <div className="col-md-4 col-sm-4 col-xs-4 num"><div className="num-container">+</div></div>
                <div className="col-md-4 col-sm-4 col-xs-4 num"><div className="num-container">-</div></div>
            </div>
        </div>
        );
    }
clickHandler(e) {
    debugger
        if (typeof this.props.clickHandler === 'function') {
            //this.props.clickHandler(e.target.textContent);
            alert(e.target.textContent);
     }
    }
}


export default Numbers;