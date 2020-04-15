import React,{Component} from 'react';
import './index.scss';

export default class SidePanels extends Component {
  constructor(props) {
    super(props);
    this.content=props.content;
  }
  render() {
    return (
      <div className='sidepanels'>
        <h1>{this.content}</h1>
      </div>
    );
  }
}