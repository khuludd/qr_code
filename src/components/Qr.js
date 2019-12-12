import React, { Component } from 'react';

var QRCode = require('qrcode.react');

class Qr extends Component {
	constructor(){
		super();
		this.state={
			Text_Input :'',
			Text_Output :''
		}
	}

	getTextInputValue=()=>{
		this.setState({Text_Output : this.state.Text_Input});
	}

	render(){
		return (
			 <form onSubmit={this.onFormSubmit}>
				<input onChangeText={() => this.setState({type="text"})}
					placeholder="Enter your URL"
				/>
				
				<button onPress={this.getTextInputValue}>
                    Génerer
                </button>
                <QRCode
                	value={this.state.Text_Output}
                	size={84}
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

export default Qr;