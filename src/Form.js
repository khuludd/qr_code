import React, {Component} from 'react';
import './App.css'
var QRCode = require('qrcode.react');
class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
             qr: '',
             qr_r:''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }
    getTextInputValue=()=>{
		this.setState({qr_r : this.state.qr});
	}
    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, qr } = this.state; 

        return (
            <form>
                
                <label>QR</label>
                <input 
                    type="text" 
                    name="qr" 
                    value={qr} 
                    onChange={this.handleChange} />
                <button onClick={this.getTextInputValue}>
                    Submit
                </button>

                <QRCode
                	value={this.state.qr}
                	size={124}
				    level={"H"}
				    includeMargin={false}
				    imageSettings={{
				    src: "./logo_digency.png",
				    x: null,
				    y: null,
				    height: 24,
				    width: 24,
				    excavate: true,
				  }}
  				/>
            </form>
        );
    }
}

export default Form;