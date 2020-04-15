import React,{Component} from 'react';
import './index.scss';
class CenteredContent extends Component {
  constructor(props) {
    super(props);
    this.title=props.title;
    this.content=props.content;
    this.subtitle=props.subtitle;
    this.subtitle2=props.subtitle2;
  }

  render() {
    return (
      <section className='centeredContent content'>
        <div className='inner'>
          <h2>{this.title}</h2>
          <h3>{this.subtitle}</h3>
          <h3>{this.subtitle2}</h3>
          <p>{this.content}</p>
        </div>
      </section>
    );
  }
}

export default CenteredContent;