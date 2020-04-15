import React,{Component} from 'react';
import './index.scss';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.title=props.title;
  }
  render(props=this.props) {
    return (
      <div className='footer'>
        <div className='footerText'>
          <h1>{props.title}</h1>
        </div>

      </div>
    );
  }
}