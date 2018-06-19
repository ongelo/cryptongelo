import React, {Component} from 'react';
import {Button} from 'react-bootstrap';


class Header extends React.Component {

	render() {
		return(
			<div>
              <img className="logo" src="./img/logo.png"/>
              <h1>CryptOngelo</h1>
              <h4>Latest prices, recent movements, market caps and more...</h4>
              <hr/>
              <div className="buttonConverter text-right"><Button bsStyle="success" onClick={() => this.props.launchConverter()}>Crypto Converter</Button></div>
            </div>
		);
	}
}

export default Header;