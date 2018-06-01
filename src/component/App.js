import React, {Component} from 'react'
import CryptoList from './CryptoList';
import Currency from './Currency'
import Converter from './Converter'
import Header from './Header'
import Search from './Search'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {Row, Col, Grid} from 'react-bootstrap'
import {Button, ButtonGroup} from 'react-bootstrap'
import { ClipLoader } from 'react-spinners';
import axios from 'axios'

class App extends React.Component {

  	constructor() {
  		super();
  		this.state = {
  			feed: null,        
        single: null,
        opened: false,
        converterOpen: false,
        loading: true
  		}
  	}

    componentDidMount() {
        this.intervalId = setInterval(() => this.loadData(), 60000);
        this.loadData();
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    loadData = () => {
      axios.get("https://api.coinmarketcap.com/v2/ticker/").then((response) => {
        var arr = Object.keys(response.data.data).map(d => response.data.data[d]);
        this.setState({feed: arr, loading: false}, () => console.log('Data is updated'));
      }
    )}

    retrieveToken = (i) => {
      console.log(i);
      console.log('retrieving single data');
      axios.get("https://api.coinmarketcap.com/v2/ticker/"+i+"/").then((response) => this.setState({single: response.data, opened: true}, () => console.log(this.state.single)));
    }

    clickClose = () => {
      this.setState({opened: false, single: null});
    }

    sortList = (selection) => {
      var arr = this.state.feed;

      switch(selection) {
        case 'n':
              arr.sort((a, b) => {
              return (b.name.toLowerCase() < a.name.toLowerCase() ? 1 : b.name.toLowerCase() > a.name.toLowerCase() ? -1 : 0)}); 
              break;
        case 'm':
              arr.sort((a,b) => a.rank - b.rank);
              break;
        case 'c':
              arr.sort((a,b) => b.quotes.USD.price - a.quotes.USD.price);
              break;
        case 't':
              arr.sort((a,b) => b.total_supply - a.total_supply);
              break;
        case 'l':
              arr.sort((a,b) => b.quotes.USD.percent_change_24h - a.quotes.USD.percent_change_24h);  
              break; 
        case 's':
              arr.sort((a, b) => {
              return (b.symbol < a.symbol ? 1 : b.symbol > a.symbol ? -1 : 0)}); 

      }

      this.setState({
        feed: arr,
      });
    }

    launchConverter = () => {
      this.setState({
        converterOpen: true
      });
    }

    closeConverter = () => {
      this.setState({
        converterOpen: false
      });
    }

    feedReturn = (data) => {
      this.setState({
        feed: data
      })
    }

    render() {
        return (
        	<Grid className="container-fluid text-center">
            <Row className="show-grid">
              <Header launchConverter={this.launchConverter}/>
            </Row>
            {this.state.converterOpen ? 
            <Converter retrieveToken={this.retrieveToken} single={this.state.single} closeConverter={this.closeConverter} feed={this.state.feed}/> : null}
            <Row>
              <Col md={4}>
                <Search feed={this.state.feed} feedReturn={this.feedReturn}/>
              </Col>
              <Col md={8}>
                <div className="sortSection">
                  <label>Sort By</label>
                  <Button bsStyle="info" bsSize="xsmall" onClick={() => this.sortList('n')}>Name</Button>
                  <Button bsStyle="info" bsSize="xsmall" onClick={() => this.sortList('s')}>Symbol</Button>
                  <Button bsStyle="info" bsSize="xsmall" onClick={() => this.sortList('c')}>Current Price</Button>
                  <Button bsStyle="info" bsSize="xsmall" onClick={() => this.sortList('l')}>Last 24h Change</Button>
                  <Button bsStyle="info" bsSize="xsmall" onClick={() => this.sortList('m')}>Market Cap.</Button>
                  <Button bsStyle="info" bsSize="xsmall" onClick={() => this.sortList('t')}>Total Supply</Button>
                </div>
              </Col>
            </Row>
            <Row className="show-grid">
                <div className="cryptoSection text-left">
                  {this.state.single != null ? <Currency opened={this.state.opened} clickClose={this.clickClose} retrieveToken={this.retrieveToken} single={this.state.single}/> : null} 
                  <CryptoList feed={this.state.feed} retrieveToken={this.retrieveToken} />
                  <div className="loader text-center"><ClipLoader size={120} color={'rgb(81,193,219)'} loading={this.state.loading} /></div>
                </div>
            </Row>
            <Row className="show-grid">
              <footer>Powered by ongelo 2018</footer>
            </Row>	
          </Grid>
        );
    }
}

export default App;