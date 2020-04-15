import React,{Component} from 'react';
import Header from '../components/headerC';
import Footer from '../components/footerC';
import logo from '../resources/logoinvert.png';

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.baseStyle={height: '100vh',backgroundColor: 'rgb(6,6,6)'};
    this.header=(
      <div>
        <Header
          img={logo}
          title='TADERDOTS'
        />
      </div>
    );
    this.footer=(
      <Footer
        title='@taderdots'
      />
    );
  }
}