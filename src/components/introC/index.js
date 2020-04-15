import React,{Component} from 'react';
import './index.scss';
import QuoteF from '../../functions/quotefunctionF';

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.title=props.title;
    this.content=props.content;
    this.img=props.img;
    this.alt=props.alt;
  }

  render(props=this.props) {
    return (
      <div className='intro-body'>
        <div style={{backgroundImage: `url(${props.img})`}} className='intro-background'>
          <h1 className='intro-title'>
            {props.title}
          </h1>
          <p className='intro-content'>
            {QuoteF()}
            {props.content[QuoteF.rN]}
          </p>
        </div>
      </div>
    );
  }
}
