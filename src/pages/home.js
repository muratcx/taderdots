import React from 'react';
import Page from './page';
import Intro from '../components/introC';
import ArtCards from '../components/artCardC';
import art3 from '../resources/pg3-min.jpg';
import art1 from '../resources/pg1-min.jpg';
import art1Modal from '../resources/pg1.jpg';
import art2 from '../resources/pg2-min.jpg';
import art2Modal from '../resources/pg2.jpg';
import art3Modal from '../resources/pg3.jpg';
import RotIcon from '../resources/roticon.png';

class Home extends Page {
  render() {
    return (
      <div style={this.baseStyle}>
        {this.header}
        <div>
          <Intro
            title='HOME'
            img={art3}
            content='dis my site'
          />
          <ArtCards
            title='RECENT DRAWINGS..'
            items={[
              {
                img: art1,
                fullImg: art1Modal,
                rotIcon: RotIcon,
              },
              {
                img: art2,
                fullImg: art2Modal,
              },
              {
                img: art3,
                fullImg: art3Modal,
              }
            ]}

          />
        </div>
        {this.footer}
      </div>
    );
  }
}

export default Home;