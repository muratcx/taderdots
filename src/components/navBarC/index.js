import React,{Component} from 'react';
import './index.scss';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.item=props.items;
  }
  render(props=this.props) {
    return (
      <div className='navbar'>
        <ul>
          {function() {
            return props.items.map(item => {
              return (
                <li>
                  <a href={item.href}>
                    <span>
                      {item.title}
                    </span>
                  </a>
                </li>
              );
            });
          }()}
        </ul>

      </div>
    );
  }
}