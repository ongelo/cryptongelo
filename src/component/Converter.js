import React, {Component} from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import {ControlLabel, FormControl, FormGroup, HelpBlock} from 'react-bootstrap'
import {InputGroup, InputGroupAddon} from 'react-bootstrap'
import {Glyphicon} from 'react-bootstrap'
import {Modal, ModalDialog, ModalHeader, ModalTitle, ModalFooter} from 'react-bootstrap'

class Converter extends React.Component {
	constructor() {
		super();
		this.state = {
			value: '',
			result: 0,
			selectedCoin: '',
			selectedPrice: null,
		}
	}

 	handleChange = (e) => {
    	this.setState({ 
    		value: e.target.value
    	});
  	}

  	handleSelect = (e) => {
  		this.setState({
  			// selectedCoin: e.target.value.symbol,
  			selectedPrice: e.target.value
  		});
  	}

  	calculate = () => {
  		console.log('Calculate is submitted');
  		this.setState({
  			result: this.state.selectedPrice * this.state.value
  		});
  	}


	render() {
		var NumberFormat = require('react-number-format');
		return(
			<div className="static-modal">
			  <Modal.Dialog>
			    <Modal.Header>
			      <Button className="close" onClick={this.props.closeConverter}>x</Button>
			      <Modal.Title>Convert Any Cryptocurrency to US Dollar</Modal.Title>
			    </Modal.Header>

			    <Modal.Body>
			    	<FormGroup controlId="formControlsSelect">
			    	<FormControl className="selectCoin" componentClass="select" placeholder="select" onChange={(e) => this.handleSelect(e)}>
				        <option value="select">Select the cryptocurrency to convert...</option>
				        {this.props.feed != undefined ?
				        	this.props.feed.map((d,i) => 
				        		<option value={d.quotes.USD.price} key={i}>{d.name}</option>
				        	): null}
				    </FormControl>
					<InputGroup>
				      <FormControl
			            type="numeric"
			            value={this.state.value}
			            placeholder="Enter the value"
			            onChange={(e) => this.handleChange(e)}
		          	  />
				      <InputGroup.Addon></InputGroup.Addon>
				    </InputGroup>
		          	<HelpBlock className="text-left">Please enter a numeric value.</HelpBlock>
				</FormGroup>
			    </Modal.Body>

			    <Modal.Footer>
					  <Button className="converterSubmit" onClick={this.calculate} type="submit"><Glyphicon glyph="glyphicon glyphicon-transfer"/> Convert</Button>
				      <p className="converterResult"><NumberFormat value={this.state.result.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>	
			    </Modal.Footer>
			  </Modal.Dialog>
			</div>
		);
	}
}

export default Converter;