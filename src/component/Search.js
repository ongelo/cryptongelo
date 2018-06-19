import React, {Component} from 'react'
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: '',
		}
	}

	componentWillMount() {
		//this.props.feedReturn(this.state.initialItems)
		console.log('mounted')
	}

	filterList = (e) => {
		var updatedList = this.props.feed;

		updatedList = updatedList.filter((item) => {
			return item.name.toLowerCase().search(
				e.target.value.toLowerCase()) !== -1;
		})

		this.props.feedReturn(updatedList) // Call-back to App component
	}


	render() {
		return(
		<Form inline>
	      <FormGroup>
	      <FormControl
	      	bsSize="small"
	        type="text"
	        //value={this.state.value}
	        placeholder="Search"
	        onChange={(e) => this.filterList(e)}
	      />
	      </FormGroup>
	      <Button className="filterReset" bsSize="sm" onClick={() => this.props.loadData()}>Reset Filter</Button>
         </Form>
		);
	}
}

export default Search;