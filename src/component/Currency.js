import React, {Component} from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import {Glyphicon} from 'react-bootstrap'
import {Modal, ModalDialog, ModalHeader, ModalTitle, ModalFooter} from 'react-bootstrap'

class Currency extends React.Component {
	
	onClose = () => {
		this.props.clickClose();
	}

	showArrow = (number) => {
		if(number > 0) {
			return(<Glyphicon glyph="glyphicon glyphicon-chevron-up"/>);
		} else if (number < 0) {
			return(<Glyphicon glyph="glyphicon glyphicon-chevron-down"/>);
		} else {
			return(<Glyphicon glyph="glyphicon glyphicon-resize-horizontal"/>);
		}
	}

	render() {
		var NumberFormat = require('react-number-format');
		return(
			<Grid className="text-center">
			<Modal.Dialog>
			    <Modal.Header>
			    		<h4>Detailed information</h4>
						<Button className="close" onClick={this.onClose}>x</Button>
			    </Modal.Header>

			    <Modal.Body>
					{this.props.single != undefined ? 
	                    <ListGroup className="currencyInfoList">
						  <ListGroupItem>{this.props.single.data.name} ({this.props.single.data.symbol})</ListGroupItem>
						  <ListGroupItem>Rank: {this.props.single.data.rank}</ListGroupItem>
						  <ListGroupItem>Current Price: <NumberFormat value={this.props.single.data.quotes.USD.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></ListGroupItem>
						  <ListGroupItem>Market Cap.: <NumberFormat value={this.props.single.data.quotes.USD.market_cap} displayType={'text'} thousandSeparator={true} prefix={'$'} /></ListGroupItem>
						  <ListGroupItem>Total Supply: <NumberFormat value={this.props.single.data.total_supply} displayType={'text'} thousandSeparator={true} prefix={'$'} /></ListGroupItem>
						  <ListGroupItem><span>{this.showArrow(this.props.single.data.quotes.USD.percent_change_1h)}</span>  Last 1hr: <NumberFormat value={this.props.single.data.quotes.USD.percent_change_1h} displayType={'text'} suffix={'%'} /></ListGroupItem>
						  <ListGroupItem><span>{this.showArrow(this.props.single.data.quotes.USD.percent_change_24h)}</span>  Last 24hr: <NumberFormat value={this.props.single.data.quotes.USD.percent_change_24h} displayType={'text'} suffix={'%'} /></ListGroupItem>
						  <ListGroupItem><span>{this.showArrow(this.props.single.data.quotes.USD.percent_change_7d)}</span>  Last 7d: <NumberFormat value={this.props.single.data.quotes.USD.percent_change_7d} displayType={'text'} suffix={'%'} /></ListGroupItem>
						  <ListGroupItem>Volume (24hr): <NumberFormat value={this.props.single.data.quotes.USD.volume_24h} displayType={'text'} thousandSeparator={true} prefix={'$'} /></ListGroupItem>
						</ListGroup>
						: null}
			    </Modal.Body>

			    <Modal.Footer>

			    </Modal.Footer>
			</Modal.Dialog>
			</Grid>
		);
	}
}

export default Currency;