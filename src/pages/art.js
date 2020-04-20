import React from 'react';
import Page from './page';
import Intro from '../components/introC';
import ArtCards from '../components/artCardC';
import art1 from '../resources/pg1-min.jpg';
import art2 from '../resources/pg2-min.jpg';
import art3 from '../resources/pg3-min.jpg';
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
import SimpleReactLightbox,{SRLWrapper} from 'simple-react-lightbox';
import '../components/SRL/index.scss';

const options={
  showDownloadButton: false,
  captionFontFamily: "Domine, serif",
  captionFontSize: "20px",
};

export default class Art extends Page {
  render() {
    return (
      <div style={this.baseStyle}>
        {this.header}
        <div>
          <Intro
            title='ART'
            img={art4Modal}
            content=''
          />
          <ArtCards title="MY DRAWINGS SO FAR.." />
          <div className='lightbox-main'>
            <SimpleReactLightbox>
              <SRLWrapper options={options}>
                <div className="row">

                  <div className="lightbox-art1">
                    <a href={art1Modal} data-attribute="SRL">
                      <img src={art1} alt='cleanliness' />
                    </a>
                  </div>

                  <div className="lightbox-art2">
                    <a href={art2Modal} data-attribute="SRL">
                      <img src={art2} alt='stress' />
                    </a>
                  </div>

                  <div className="lightbox-art3">
                    <a href={art3Modal} data-attribute="SRL">
                      <img src={art3} alt='reluctance' />
                    </a>
                  </div>

                  <div className="lightbox-art4">
                    <a href={art4Modal} data-attribute="SRL">
                      <img src={art4} alt='dread' />
                    </a>
                  </div>

                  <div className="lightbox-art5">
                    <a href={art5Modal} data-attribute="SRL">
                      <img src={art5} alt='happiness' />
                    </a>
                  </div>

                  <div className="lightbox-art6">
                    <a href={art6Modal} data-attribute="SRL">
                      <img src={art6} alt='stuck' />
                    </a>
                  </div>

                  <div className="lightbox-art7">
                    <a href={art7Modal} data-attribute="SRL">
                      <img src={art7} alt='vastness' />
                    </a>
                  </div>

                  <div className="lightbox-art8">
                    <a href={art8Modal} data-attribute="SRL">
                      <img src={art8} alt='blanton' />
                    </a>
                  </div>

                </div>
              </SRLWrapper>
            </SimpleReactLightbox>
          </div>

        </div>
        {this.footer}
      </div>
    );
  }
}