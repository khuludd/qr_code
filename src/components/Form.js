import React, { Component } from "react";
var QRCode = require("qrcode.react");

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      qr: "",
      qr_r: ""
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };
  getTextInputValue = () => {
    this.setState({ qr_r: this.state.qr });
  };
    downloadQR =() => {
      const canvas = document.getElementById("1");
      const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "123456.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
};
  onFormSubmit = event => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name,qr } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <label>Code</label>
        <input type="text" name="name" value={name} onChange={this.handleChange} />
        <label>URL</label>
        <input type="text" name="qr" value={qr} onChange={this.handleChange} />
        <button onClick={this.getTextInputValue}>Submit</button>

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
            excavate: true
          }}
        />
<a onClick={this.downloadQR}> Download QR </a>
      </form>
    );
  }
}

export default Form;
