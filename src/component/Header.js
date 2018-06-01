import React, {Component} from 'react';
import {Button} from 'react-bootstrap';


class Header extends React.Component {

	render() {
		return(
			<div>
              <img className="logo" src="./img/logo.png"/>
              <h2>CryptOngelo</h2>
              <h4>Latest prices, recent movements, market caps and more...</h4>
              <hr/>
              <div className="text-right"><Button bsStyle="success" bsSize="small" onClick={() => this.props.launchConverter()}>Crypto Converter</Button></div>
            </div>
		);
	}
}

export default Header;