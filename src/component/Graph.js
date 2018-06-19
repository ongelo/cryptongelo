import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, VerticalBarSeries, MarkSeries, LineSeries} from 'react-vis';

class Graph extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			d: this.props.feed
		}
	}

	/*shouldComponentUpdate(nextProps, nextState) {
		if(nextProps != nextState) {
			return true;
		}
	}*/


    componentWillReceiveProps(nextProps) {
    	if (this.props.feed !== nextProps.feed) {
    		this.setState({d: nextProps.feed});
    	}
    }

	render() {	
		return(
			<div>
			{this.state.d != undefined ?
				<XYPlot height={200} width={600}>
				  <VerticalBarSeries data={[
					  {x: 0, y: this.state.d[0].quotes.USD.price},
					  {x: 1, y: this.state.d[1].quotes.USD.price},
					  {x: 2, y: this.state.d[2].quotes.USD.price},
					  {x: 3, y: this.state.d[3].quotes.USD.price},
					  {x: 4, y: this.state.d[4].quotes.USD.price},
					  {x: 5, y: this.state.d[5].quotes.USD.price},
					  {x: 6, y: 6},
					  {x: 7, y: 3},
					  {x: 8, y: 2},
					  {x: 9, y: 0}
					]
				  } />
				</XYPlot>
			: null}
			</div>
		);
	}

}

export default Graph;