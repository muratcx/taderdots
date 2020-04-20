import React,{Component} from 'react';
import './index.scss';
import SimpleReactLightbox,{SRLWrapper} from 'simple-react-lightbox';

export default class SRL extends Component {

  constructor(props) {
    super(props);
    this.href=props.href;
    this.img=props.img;
    this.alt=props.alt;
  }

  render(props=this.props) {
    return (
      <div>
        <SimpleReactLightbox>
          <SRLWrapper>
            <ul>
              {function() {
                return props.items.map(item => {
                  return (
                    <li>
                      <a href={item.href} data-attribute="SRL">
                        <img src={item.img} alt={item.alt} />
                      </a>
                    </li>
                  );
                });
              }}
            </ul>
          </SRLWrapper>
        </SimpleReactLightbox>
      </div>
    );
  }
}