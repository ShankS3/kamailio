import React, { Component } from 'react';
import {Card, CardBody, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import Menu from './Menu';
import DrawerButton from './DrawerButton';

import kaSolid from './ka_solid.png';
import kaTransparent from './ka_transparent.png';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      logo: 0,
      displayCard: false,
      showList: false, 
      loading: false, 
      listContent: null
    };
  }

  componentDidMount () {
    setInterval(()=>{this.setState({logo: 1 - this.state.logo});}, 2500);
    setTimeout(()=>{this.setState(()=>({displayCard: true}))}, 5000);
  }

  _toggleList(){

    let items = [];
    for(let i=0; i< 5; i++){
      items.push(
        <ListGroupItem >
          <span className="dot-left-li"><i class="fas fa-circle"/></span>
          <span className="dot-right-li"><i class="fas fa-circle"/></span>
          <p className="list-item">deploymentLocation</p>
          <p className="list-item-head">dev</p>
        </ListGroupItem>
      );
    }

    let listContent = <ListGroup flush>{items}</ListGroup>;

    this.setState({showList: !this.state.showList});
    if(!this.state.showList){
      this.setState({loading: true});
      setTimeout(()=>{this.setState(()=>({loading: false, listContent}))}, 2500);
    }else{
      this.setState({listContent: null});
    }
  }

  render() {

    const { logo, displayCard, showList, loading, listContent } = this.state;
    const images = [kaTransparent, kaSolid];
    let loader = (
      <span className="loader">
        <div className="spinner">{''}</div> <span className="loaderText">Loading</span>
      </span>
    );
    let listClass = showList ? 'fadein' : 'fadeout';
    let drawerIcon = showList ? 'fa-caret-up' : 'fa-caret-down';
    let content = loading ? loader : listContent;
    let cardDisplay = displayCard ? 'show-card' : 'hide-card'
    let contentDisplay = displayCard ? 'show-content' : 'hide-content'
    return (
      <div className="App">
        <Row>
          <Col md={{size: 4, offset: 4}} sm={{size: 6, offset: 3}} xs={{size: 10, offset: 1}}>
            <Card className="card-main">
              <CardBody className="card-overlap">
                <h1 id="dot-left"><i class="fas fa-circle"/></h1>
                <img src={images[logo]} className="App-logo" alt="logo" />
                <h1 id="dot-right"><i class="fas fa-circle"/></h1>
              </CardBody>
              <CardBody className={"card-background "+cardDisplay} >
                <div className={"menu "+contentDisplay}>
                  <Menu />
                </div>  
                <CardBody className="card-container">
                  <p id="header">Kamailio</p>
                  <p id="version">resource::kamailio::1.0</p>
                </CardBody>
                <div className={"drawer "+contentDisplay} onClick={()=>this._toggleList()}>
                  <DrawerButton icon={drawerIcon}/>
                </div>
              </CardBody>
              <CardBody className={contentDisplay+" card-list "+listClass}>
                {content}
              </CardBody>
            </Card>          
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
