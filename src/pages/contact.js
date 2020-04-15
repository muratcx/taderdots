import React from 'react';
import Page from './page';
import Intro from '../components/introC';
import art2 from '../resources/pg2.jpg';
import CenteredContent from '../components/centeredContentC/index';

export default class Contact extends Page {
  render() {
    return (
      <div style={this.baseStyle}>
        {this.header}
        <div>
          <Intro
            title='CONTACT'
            img={art2}
            content='dis my site'
          />
        </div>
        <div>
          <CenteredContent
            title='You can contact me through this stuff here'
            subtitle='email: taderdots@gmail.com'
            subtitle2='instagram: @taderdots'
          />
        </div>
        {this.footer}
      </div>
    );
  }
}