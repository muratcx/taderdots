import React,{Component} from 'react';
import './index.scss';
import NavBar from '../navBarC';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.title=props.title;
    this.content=props.content;
    this.img=props.img;
  }

  render(props=this.props) {
    return (
      <div className='header'>
        <a href='/'>
          <img src={this.img}></img>
          <div className='headerText'>
            <h1>{this.title}</h1>
            <p>{this.content}</p>
          </div>
        </a>
        <NavBar
          items={[
            {
              title: 'HOME',
              href: '/',
            },
            {
              title: 'ABOUT',
              href: '/about',
            },
            {
              title: 'CONTACT',
              href: '/contact',
            },
            {
              title: 'ART',
              href: '/art',
            }
          ]}
        />
      </div>
    );
  }
}