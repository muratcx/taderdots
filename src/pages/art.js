import React from 'react';
import Page from './page';
import Intro from '../components/introC';
import ArtCards from '../components/artCardC';
import art3 from '../resources/pg3-min.jpg';
import art1 from '../resources/pg1-min.jpg';
import art2 from '../resources/pg2-min.jpg';
import art4 from '../resources/pg4-min.jpg';
import art5 from '../resources/pg5-min.jpg';
import art6 from '../resources/pg6-min.jpg';
import art7 from '../resources/pg7-min.jpg';
import art8 from '../resources/pg8-min.jpg';
import art1Modal from '../resources/pg1.jpg';
import art2Modal from '../resources/pg2.jpg';
import art3Modal from '../resources/pg3.jpg';
import art4Modal from '../resources/pg4.jpg';
import art5Modal from '../resources/pg5.jpg';
import art6Modal from '../resources/pg6.jpg';
import art7Modal from '../resources/pg7.jpg';
import art8Modal from '../resources/pg8.jpg';

export default class Art extends Page {
  render() {
    return (
      <div style={this.baseStyle}>
        {this.header}
        <div>
          <Intro
            title='ART'
            img={art4}
            content='dis my site'
          />
          <div>
            <ArtCards
              title='MY DRAWINGS SO FAR..'
              items={[
                {
                  img: art1,
                  fullImg: art1Modal,
                },
                {
                  img: art2,
                  fullImg: art2Modal,
                },
                {
                  img: art3,
                  fullImg: art3Modal,
                },
                {
                  img: art4,
                  fullImg: art4Modal,
                },
                {
                  img: art5,
                  fullImg: art5Modal,
                },
                {
                  img: art6,
                  fullImg: art6Modal,
                },
                {
                  img: art7,
                  fullImg: art7Modal,
                },
                {
                  img: art8,
                  fullImg: art8Modal,
                },
              ]}
            />
          </div>
        </div>
        {this.footer}
      </div>
    );
  }
}