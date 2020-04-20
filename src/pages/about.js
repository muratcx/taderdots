import React from 'react';
import Page from './page';
import Intro from '../components/introC';
import Lightbulb from '../components/lightbulbC';
import SidePanels from '../components/SidePanelC';
import CenteredContent from '../components/centeredContentC/index';

export default class About extends Page {
  render() {
    return (
      <div style={this.baseStyle}>
        {this.header}
        <div>
          <CenteredContent
            title='not a whole lot to say about me'
            subtitle='I think your time would be better spent off of this page'
            subtitle2='go look at my drawings!!'
          />
        </div>
        {this.footer}
      </div>
    );
  }
}