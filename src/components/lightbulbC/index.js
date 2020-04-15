import React,{Component} from 'react';
import './index.scss';

export default class Lightbulb extends Component {
  constructor(props) {
    super(props);
    this.title=props.title;
    this.content=props.content;
  }
  render() {
    return (
      <div className='sidepanels' >
        <div id="lamp">
          <div id="lampadario">
            <input type="radio" name="switch" value="on" />
            <input type="radio" name="switch" value="off" checked="checked" />
            <label for="switch"></label>
            <div id="filo"></div>
            <div id="lampadina">
              <div id="sorpresa">
                <div id="footer">
                  Still here?
            </div>
              </div>
            </div>
          </div>
          <div id="shadow">
            Still here?
           </div>
        </div>
      </div>

    );
  }
}