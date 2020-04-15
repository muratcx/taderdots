import React,{Component} from 'react';
import './index.scss';

class ArtCard extends Component {
  constructor(props) {
    super(props);
    this.title=props.title;
    this.content=props.content;
    this.img=props.img;
    this.fullImg=props.fullImg;
    this.rotIcon=props.rotIcon;
    this.handleClick.bind(this);
    this.state={
      isOpen: false
    };
  }

  handleClick=() => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <li className={this.state.isOpen? '--isOpen':'--isClosed'} onClick={this.handleClick} style={{backgroundImage: `url(${this.img})`}}>
        <button>{this.rotIcon}</button>
        <div className='imgContainer'>
          <img src={this.fullImg} />
          <h1>{this.title}</h1>
          <h2>{this.content}</h2>
        </div>
      </li>
    );
  }
}

export default class ArtCards extends Component {
  constructor(props) {
    super(props);
    this.items=props.items;
    this.title=props.title;
    this.content=props.content;
  }

  render(trueThis=this) {
    return (
      <div className='artcards'>
        <h1>{this.title}</h1>
        <ul>
          {function() {
            if(!trueThis.props.items) {return;}
            return trueThis.props.items.map(item => {
              return (
                <ArtCard
                  title={item.title}
                  content={item.content}
                  img={item.img}
                  fullImg={item.fullImg}
                />
              );
            });
          }()}
        </ul>
      </div>
    );
  }
  //<img src={item.img} alt={item.alt}/>
}