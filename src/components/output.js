import React, {Component} from 'react';

class Output extends Component {
  constructor(props){
    super(props);
    this.state={
      value: props.value,
      number: props.number
    }
  }

  render(){
    var indents = [];
    for (var i = 0; i < this.state.number; i++) {
      indents.push(      <div className="postbody">
            {this.props.value}

            </div>);
    }
return (
   <div>
    {indents}
   </div>

);

    /*
    return(
      <div className="output">
      {this.props.value}
      </div>
    )*/
  }
}

export default Output;
