import React, { Component } from 'react';
import './App.scss';
import Output from './components/output'
import Select from './components/Controls/Select'
import Text from './components/Controls/Text'

import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      paras: 2,
      html: false,
      text: ''
    }
  }

  componentWillMount(){
    this.getSampleText();
  }

  getSampleText(){
    axios.get('http://hipsterjesus.com/api?paras=3&html='+this.state.html)
    .then((response) =>{
      this.setState({text: response.data.text}, function(){
        console.log(this.state);
      });
    })
    .catch((err) =>{
      console.log(err);
    });
  }

showHtml(x){
  this.setState({html:x}, this.getSampleText);
}




showParas(x){
  this.setState({paras:x},this.getSampleText);
}

  render() {
    return (
      <div className="App container">

      <h1>Ipsum Generator</h1>
      <hr/>
      <form className="form-inline">
        <div className="form-group">
        <label>Number of Posts:</label>

        <Text value="" onChange={this.showParas(.bind(this))} />




        </div>
      </form>


        <Output value={this.state.text} number={this.state.paras}/>



      </div>
    );
  }
}

export default App;
