import React, {Component} from 'react'
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: '',
			initialItems: this.props.feed,
		}
	}

	componentWillMount() {
		//this.props.feedReturn(this.state.initialItems)
		console.log('mounted')
	}

	filterList = (e) => {
		var updatedList = this.state.initialItems;

		updatedList = updatedList.filter((item) => {
			return item.name.toLowerCase().search(
				e.target.value.toLowerCase()) !== -1;
		})

		this.props.feedReturn(updatedList) // Call-back to App component
	}


	render() {
		return(
		<form>
	      <FormGroup>
	      <ControlLabel></ControlLabel>
	      <FormControl
	      	bsSize="small"
	        type="text"
	        //value={this.state.value}
	        placeholder="Search"
	        onChange={(e) => this.filterList(e)}
	      />
	      </FormGroup>
         </form>
		);
	}
}

export default Search;