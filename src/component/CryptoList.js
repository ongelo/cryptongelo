import React, {Component} from 'react';
import {Table} from 'react-bootstrap'
import {Glyphicon} from 'react-bootstrap'

class CryptoList extends React.Component {
	constructor() {
		super();
		this.state = {
			color: '#F4D03F'
		}
	}

	showArrow = (number) => {
		if(number > 0) {
			//this.setState({color: '#27AE60'});
			return(<Glyphicon glyph="glyphicon glyphicon-chevron-up"/>);
		} else if (number < 0) {
			//this.setState({color: '#E74C3C'});
			return(<Glyphicon glyph="glyphicon glyphicon-chevron-down"/>);
		} else {
			return(<Glyphicon glyph="glyphicon glyphicon-resize-horizontal"/>);
		}
	}

	render() {
		var NumberFormat = require('react-number-format');
		return(
		  <Table striped bordered condensed hover>
	      	<thead>
				<tr>
			      <th className="nameHead">Name</th>
			      <th className="briefInfo">Price</th>
			      <th className="briefInfo">Last 24h Change</th>
			    </tr>
		    </thead>
	        {this.props.feed != undefined ? 
	         	this.props.feed.map((d,i) => 
	        <tbody href="#" key={i} onClick={() => this.props.retrieveToken(d.id)}>
	        	<tr>
	           	  <th>{d.name} ({d.symbol})</th>
	           	  <th className="briefInfo"><NumberFormat value={d.quotes.USD.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></th>
	           	  <th /*style={{color: this.state.color}}*/ className="briefInfo">{this.showArrow(d.quotes.USD.percent_change_24h)} {d.quotes.USD.percent_change_24h}%</th>
	           	</tr>
	        </tbody>) : null}
	      </Table>
		);
	}
}

export default CryptoList;